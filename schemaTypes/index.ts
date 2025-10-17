import blockContent from './objects/blockContent'
import cta from './objects/cta'
import linkableLogo from './objects/linkableLogo'
import module from './objects/module'
import seo from './objects/seo'
import stat from './objects/stat'
import strandItem from './objects/strandItem'
import testimonial from './objects/testimonial'

import aboutPage from './pages/aboutPage'
import articles from './pages/articles'
import homepage from './pages/homepage'
import listenAppPage from './pages/listenAppPage'
import newsPage from './pages/newsPage'
import perpetratorProgrammePage from './pages/perpetratorProgrammePage'
import siteSettings from './pages/siteSettings'
import thinkDifferentPage from './pages/thinkDifferentPage'

export const schemaTypes = [
  // Reusable objects
  blockContent,
  testimonial,
  cta,
  strandItem,
  stat,
  seo,
  linkableLogo,
  module,

  // Documents
  homepage,
  aboutPage,
  thinkDifferentPage,
  listenAppPage,
  perpetratorProgrammePage,
  newsPage,
  articles,
  siteSettings,
]
