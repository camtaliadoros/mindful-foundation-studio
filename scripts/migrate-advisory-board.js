#!/usr/bin/env node

/**
 * Migration script to convert advisory board strings to linkableLogo objects
 *
 * This script will:
 * 1. Find all aboutPage documents
 * 2. Convert advisoryBoard string arrays to linkableLogo object arrays
 * 3. Preserve existing data by using strings as the 'name' field
 *
 * Usage:
 * 1. Set your SANITY_TOKEN environment variable
 * 2. Run: node scripts/migrate-advisory-board.js
 *
 * To get a token:
 * 1. Go to https://sanity.io/manage
 * 2. Select your project
 * 3. Go to API settings
 * 4. Create a new token with Editor permissions
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'ue9tzk13',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need to set this
})

async function migrateAdvisoryBoard() {
  try {
    console.log('🔍 Fetching about page documents...')

    const aboutPages = await client.fetch('*[_type == "aboutPage"]')
    console.log(`Found ${aboutPages.length} about page document(s)`)

    if (aboutPages.length === 0) {
      console.log('📝 No about page documents found. Creating a new one...')

      const newAboutPage = {
        _type: 'aboutPage',
        title: 'About Us',
        headerHeadline: 'About The Mindful Foundation',
        headerSubheadline: 'Building safer futures together.',
        whoWeAreTitle: 'Who We Are',
        whoWeAre: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Add your content here...',
              },
            ],
          },
        ],
        missionTitle: 'Our Mission',
        mission: 'Add your mission statement here...',
        approachTitle: 'Our Approach',
        approach: [],
        teamTitle: 'The Team',
        team: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Add your team information here...',
              },
            ],
          },
        ],
        advisoryBoardTitle: 'Advisory Board',
        advisoryBoard: [],
        listenAppPartnersTitle: 'ListenApp Partners',
        listenAppPartners: [],
        specialThanksTitle: 'Special thanks to',
        specialThanks: [],
      }

      const created = await client.create(newAboutPage)
      console.log(`✅ Created new about page: ${created._id}`)
      return
    }

    for (const doc of aboutPages) {
      if (doc.advisoryBoard && Array.isArray(doc.advisoryBoard)) {
        console.log(`📝 Processing document: ${doc._id}`)

        // Check if items are strings (need migration) or already objects
        const needsMigration = doc.advisoryBoard.some((item) => typeof item === 'string')

        if (needsMigration) {
          console.log(`🔄 Migrating advisory board data...`)

          const migratedAdvisoryBoard = doc.advisoryBoard.map((item, index) => {
            if (typeof item === 'string') {
              // Convert string to linkableLogo object
              return {
                _type: 'linkableLogo',
                _key: `migrated-${index}-${Date.now()}`,
                name: item,
                logo: null, // Will need to be added manually
                url: null, // Will need to be added manually
              }
            }
            return item // Already an object, keep as is
          })

          // Update the document
          await client.patch(doc._id).set({advisoryBoard: migratedAdvisoryBoard}).commit()

          console.log(`✅ Successfully migrated advisory board for document: ${doc._id}`)
          console.log(`📋 Migrated items:`)
          migratedAdvisoryBoard.forEach((item, index) => {
            if (item._type === 'linkableLogo') {
              console.log(`   ${index + 1}. "${item.name}" (logo needs to be uploaded)`)
            }
          })
        } else {
          console.log(`⏭️  Document ${doc._id} already has object format, skipping...`)
        }
      } else {
        console.log(`⏭️  Document ${doc._id} has no advisory board data, skipping...`)
      }
    }

    console.log('🎉 Migration completed!')
    console.log('📝 Next steps:')
    console.log('   1. Go to your Sanity Studio')
    console.log('   2. Open the About Page')
    console.log('   3. Upload logo images for each advisory board member')
    console.log('   4. Add URLs if needed')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    if (error.message.includes('token')) {
      console.log('💡 Make sure you have set the SANITY_TOKEN environment variable')
      console.log('   Get a token from: https://sanity.io/manage')
    }
    process.exit(1)
  }
}

// Run the migration
migrateAdvisoryBoard()
