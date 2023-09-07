import {siteConfig} from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '339e76eda6ad4622a5f9278af92214a3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '셀러노트',
  domain: 'msellernote.com',
  author: 'GPAKOREA',

  // open graph metadata (optional)
  description: '셀러노트 - 잘나가는 셀러들의 비밀노트',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UCqFSejE0zwfS-TTxqfjI6pw',
  language: 'ko',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/policy/terms': '4a52739fe1f14baf9a3876c060164732',
    '/policy/privacy': '42b859fe7ac54ca08fbca13d69a1dcca',
    '/store/smartstore': '0b8197bbe51b4836ad7c09411d714cb7',
    '/store/coupang': 'f2c597606bc441df8e1edf3f6e1e65b7',
    '/store/11st': '89fee51af41e4e5f93ddf248538c629d',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
