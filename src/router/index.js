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
      component: () => import('../views/NewbiePages/NewbieQRCode/NewbieQRCode.vue')
    },
    {
      path: '/newbie/product-preview-card',
      name: 'ProductPreviewCard',
      component: () => import('../views/NewbiePages/ProductPreviewCard/ProductPreviewCard.vue')
    },
    {
      path: '/newbie/results-summary',
      name: 'ResultsSummary',
      component: () => import('../views/NewbiePages/ResultsSummary/ResultsSummary.vue')
    },
    {
      path: '/newbie/3-column-preview',
      name: '3ColumnPreview',
      component: () => import('../views/NewbiePages/3ColumnPreview/3ColumnPreview.vue')
    },
    {
      path: '/newbie/interactive-rating-card',
      name: 'InteractiveRatingCard',
      component: () => import('../views/NewbiePages/InteractiveRatingCard/InteractiveRatingCardView.vue')
    },
    {
      path: '/newbie/nft-preview-card',
      name: 'NFTPreviewCard',
      component: () => import('../views/NewbiePages/NFTPreviewCard/NFTPreviewCard.vue')
    },
    {
      path: '/newbie/order-summary-card',
      name: 'OrderSummaryCard',
      component: () => import('../views/NewbiePages/OrderSummaryCard/OrderSummaryCard.vue')
    },
    {
      path: '/newbie/stats-preview-card',
      name: 'StatsPreviewCard',
      component: () => import('../views/NewbiePages/StatsPreviewCard/StatsPreviewCard.vue')
    }
  ]
})

export default router
