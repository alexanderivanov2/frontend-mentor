import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
// import NewbieQRCode from '../views/NewbiePages/NewbieQRCode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/newbie/QR-code',
      name: 'NewbieQRCode',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieQRCodePage.vue')
    },
    {
      path: '/newbie/product-preview-card',
      name: 'ProductPreviewCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieProductPreviewCardPage.vue')
    },
    {
      path: '/newbie/results-summary',
      name: 'ResultsSummary',
      component: () => import('../views/NewbiePages/NewbieCardPages/ResultSummaryPage/ResultSummaryPage.vue')
    },
    {
      path: '/newbie/three-column-preview',
      name: 'ThreeColumnPreview',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieThreeColumnCardPage.vue')
    },
    {
      path: '/newbie/interactive-rating-card',
      name: 'InteractiveRatingCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieInteractiveCardPage.vue')
    },
    {
      path: '/newbie/nft-preview-card',
      name: 'NFTPreviewCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieNFTCardPage.vue')
    },
    {
      path: '/newbie/order-summary-card',
      name: 'OrderSummaryCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieOrderSummaryCardPage.vue')
    },
    {
      path: '/newbie/stats-preview-card',
      name: 'StatsPreviewCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieStatsPreviewCard.vue')
    },
    {
      path: '/newbie/social-links-profile-card',
      name: 'SocialLinksProfileCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieSocialLinksProfileCardPage.vue')
    },
    {
      path: '/newbie/blog-preview-card',
      name: 'BlogPreviewCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieBlogPreviewCardPage.vue')
    },
    {
      path: '/newbie/blog-preview-card',
      name: 'ProfileCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieProfileCardPage.vue')
    },
  ]
})

export default router
