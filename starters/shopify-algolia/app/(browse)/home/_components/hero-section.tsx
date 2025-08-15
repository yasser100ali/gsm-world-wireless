import { type HeroSlide, HomepageCarousel } from "components/homepage-carousel"
import { cn } from "utils/cn"
import { getProduct } from "lib/algolia"
import { getCombinationByMultiOption, getImagesForCarousel } from "utils/visual-variant-utils"

interface HeroConfigItem {
  id: string
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  productHandle: string
  variantOptions: Record<string, string>
}

const heroConfig: HeroConfigItem[] = [
  {
    id: "iphone",
    imageUrl: "/product-images/iphone_16.jpg",
    imageAlt: "Latest iPhone",
    title: "Shop the latest iPhones",
    subtitle: "Upgrade to the newest iPhone models in stock",
    ctaText: "Shop smartphones",
    ctaHref: "/category/cell-phones",
    productHandle: "iphone-15-pro",
    variantOptions: {},
  },
  {
    id: "samsung",
    imageUrl: "/product-images/samsung_s25_ultra.webp",
    imageAlt: "Samsung Galaxy S25 Ultra",
    title: "Shop the latest Samsung phones",
    subtitle: "Discover the Galaxy lineup including S series",
    ctaText: "Shop smartphones",
    ctaHref: "/category/cell-phones",
    productHandle: "galaxy-s24-ultra",
    variantOptions: {},
  },
  {
    id: "airpods",
    imageUrl: "/product-images/air_pods_pro_2.jpeg",
    imageAlt: "AirPods Pro (2nd generation)",
    title: "Shop accessories and headphones",
    subtitle: "AirPods, chargers, cases, and more",
    ctaText: "Shop accessories",
    ctaHref: "/category/accessories",
    productHandle: "airpods-pro-2",
    variantOptions: {},
  },
]

export async function HeroSection({ className }: { className?: string }) {
  const productPromises = heroConfig.map((config) => getProduct(config.productHandle).catch(() => null))
  const products = await Promise.all(productPromises)

  const heroSlides: HeroSlide[] = heroConfig.map((config, index) => {
    const product = products[index]
    if (!product) {
      return {
        ...config,
        product: undefined,
      }
    }

    const variant = getCombinationByMultiOption(product.variants, config.variantOptions)

    let featuredImage = product.featuredImage
    if (variant && product.images && product.images.length > 0) {
      const colorValue = config.variantOptions.color || Object.values(config.variantOptions)[0]
      const { images, activeIndex } = getImagesForCarousel(product.images, colorValue, "Color")
      if (activeIndex > 0 && images[activeIndex]) {
        featuredImage = images[activeIndex]
      }
    }

    const enhancedProduct = {
      ...product,
      featuredImage,
      selectedVariant: variant,
      minPrice: variant?.price?.amount || product.minPrice,
    }

    return {
      ...config,
      product: enhancedProduct,
    }
  })

  return (
    <div className={cn("mb-8 w-full sm:mb-12 lg:mb-16", className)}>
      <HomepageCarousel slides={heroSlides} />
    </div>
  )
}
