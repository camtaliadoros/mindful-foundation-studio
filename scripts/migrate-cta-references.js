#!/usr/bin/env node

/**
 * Migration script to remove embedded CTAs from articles
 *
 * This script will:
 * 1. Find all blogPost documents with embedded CTAs (not references)
 * 2. Remove the embedded CTA field to allow the new reference-based schema
 *
 * Usage:
 * 1. Set your SANITY_TOKEN environment variable
 * 2. Run: node scripts/migrate-cta-references.js
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

async function migrateCTAs() {
  try {
    console.log('🔍 Fetching articles with embedded CTAs...')
    
    // Find all articles with embedded CTAs (not references)
    const articles = await client.fetch(`
      *[_type == "blogPost" && defined(cta) && cta._type != "reference"]
    `)

    console.log(`Found ${articles.length} article(s) with embedded CTAs`)

    if (articles.length === 0) {
      console.log('✅ No articles need migration. All done!')
      return
    }

    for (const article of articles) {
      console.log(`📝 Processing article: ${article.title || article._id}`)
      
      try {
        // Remove the embedded CTA
        await client
          .patch(article._id)
          .unset(['cta'])
          .commit()
        
        console.log(`✅ Removed embedded CTA from "${article.title || article._id}"`)
      } catch (error) {
        console.error(`❌ Error migrating article ${article._id}:`, error.message)
      }
    }

    console.log('\n🎉 Migration completed!')
    console.log('📝 Next steps:')
    console.log('   1. Go to your Sanity Studio')
    console.log('   2. Create Article CTA documents')
    console.log('   3. Reference them in your articles')
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
migrateCTAs()
