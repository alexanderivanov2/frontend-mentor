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
      path: '/newbie/profile-card',
      name: 'ProfileCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieProfileCardPage.vue')
    },
    {
      path: '/newbie/single-price-grid',
      name: 'SinglePriceGrid',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieSinglePriceGrid.vue')
    },
    {
      path: '/newbie/recipe-card',
      name: 'RecipeCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieRecipePage.vue')
    },
    {
      path: '/newbie/faq-accordion',
      name: 'FaqAccordion',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieFAQAccordionCardPage.vue')
    },
    {
      path: '/newbie/workit-landing-page',
      name: 'WorkitLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/WorkitLandingPage.vue')
    },
    {
      path: '/newbie/skilled-e-learning-landing-page',
      name: 'SkilledELearningLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/SkilledELearningLandingPage.vue')
    },
    {
      path: '/newbie/equalizer-landing-page',
      name: 'EqualizerLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/EqualizerLandingPage.vue')
    },
    {
      path: '/newbie/meet-landing-page',
      name: 'MeetLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/MeetLandingPage.vue')
    },
    {
      path: '/newbie/pod-request-access-landing-page',
      name: 'PodRequestAccessLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/PodRequestAccessLandingPage/PodRequestAccessLandingPage.vue')
    },
    {
      path: '/newbie/social-proof-landing-page',
      name: 'SocialProofLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/SocialProofLandingPage.vue')
    },
    {
      path: '/newbie/article-preview-card',
      name: 'ArticlePreviewCard',
      component: () => import('../views/NewbiePages/NewbieCardPages/NewbieArticlePreviewCardPage.vue')
    },
    {
      path: '/newbie/four-card-feature-landing-page',
      name: 'FourCardFeatureLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/FourCardFeatureLandingPage.vue')
    },
    {
      path: '/newbie/huddle-landing-page',
      name: 'HuddleLandingPage',
      component: () => import('../views/NewbiePages/NewbieLandingPages/HuddleLandingPage.vue')
    },
    {
      path: '/junior/product-list-with-cart',
      name: 'ProductListWithCart',
      component: () => import('../views/JuniorPages/ProductListWithCart/ProductListWithCartView.vue')
    },
    {
      path: '/junior/mortgage-repayment-calculator',
      name: 'MortgageRepaymentCalculator',
      component: () => import('../views/JuniorPages/MortgageRepaymentCalculator/MortgageRepaymentCalculatorView.vue')
    },
    {
      path: '/junior/age-calculator',
      name: 'AgeCalculator',
      component: () => import('../views/JuniorPages/AgeCalculator/AgeCalculatorView.vue')
    },
    {
      path: '/junior/tip-calculator',
      name: 'TipCalculator',
      component: () => import('../views/JuniorPages/TipCalculator/TipCalculatorView.vue')
    },
  ]
})

export default router
