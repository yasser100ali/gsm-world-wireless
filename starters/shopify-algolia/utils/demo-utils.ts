import type { Hit } from "algoliasearch"
import type { Review } from "lib/reviews/types"
import type { PlatformCollection } from "lib/shopify/types"
import type { CommerceProduct } from "types"
import merchandiseData from "../public/merchandise-data.json"
import categoriesData from "../public/demo-categories-data.json"
import reviewsData from "../public/demo-product-reviews-data.json"

export function getDemoProducts(): {
  hits: Hit<CommerceProduct>[]
  totalPages: number
  facetDistribution: Record<string, unknown>
  totalHits: number
  independentFacetDistribution: Record<string, unknown>
} {
  return {
    hits: merchandiseData.hits as Hit<CommerceProduct>[],
    totalPages: 1,
    facetDistribution: {},
    totalHits: merchandiseData.hits.length,
    independentFacetDistribution: {},
  }
}

export function getDemoSingleProduct(handle: string) {
  return getDemoProducts()?.hits?.find((p) => p.handle === handle) || null
}

export function getDemoCategories() {
  return {
    hits: categoriesData as Hit<PlatformCollection>[],
    totalPages: 1,
    facetDistribution: {},
    totalHits: categoriesData.length,
    independentFacetDistribution: {},
  }
}

export function getDemoSingleCategory(handle: string) {
  return getDemoCategories().hits.find((c: { handle: string }) => c.handle === handle) || null
}

export function getDemoProductReviews() {
  return reviewsData as { reviews: Review[]; total: number }
}

export function isDemoMode(): boolean {
  return (
    isDemoValue(process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) ||
    isDemoValue(process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) ||
    isDemoValue(process.env.SHOPIFY_APP_API_SECRET_KEY) ||
    isDemoValue(process.env.SHOPIFY_STORE_DOMAIN) ||
    isDemoValue(process.env.ALGOLIA_APP_ID) ||
    isDemoValue(process.env.ALGOLIA_WRITE_API_KEY) ||
    isDemoValue(process.env.ALGOLIA_PRODUCTS_INDEX) ||
    isDemoValue(process.env.ALGOLIA_CATEGORIES_INDEX) ||
    !process.env.LIVE_URL ||
    process.env.IS_DEMO_MODE === "true"
  )
}

function isDemoValue(value: string | undefined) {
  return !value || value === "demo"
}
