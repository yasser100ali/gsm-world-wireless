import Image from "next/image"
import Link from "next/link"
import { cn } from "utils/cn"
import { type CurrencyType, mapCurrencyToSign } from "utils/map-currency-to-sign"
import type { CommerceProduct } from "types"
import { StarIcon } from "components/icons/star-icon"

interface ProductCardProps
  extends Pick<CommerceProduct, "variants" | "handle" | "images" | "title" | "featuredImage" | "vendor"> {
  priority?: boolean
  prefetch?: boolean
  className?: string
  href?: string
  highlighted?: boolean
  variant?: "default" | "hero"
}

export const ProductCard = ({
  variants,
  handle,
  title,
  featuredImage,
  minPrice,
  avgRating,
  totalReviews,
  className,
  priority,
  vendor,
  prefetch = false,
  href = "",
  highlighted = false,
  variant = "default",
}: ProductCardProps) => {
  const noOfVariants = variants?.length
  const path = href || `/product/${handle}`
  const linkAria = `Visit product: ${title}`
  const variantPrice = undefined

  if (variant === "hero") {
    return (
      <Link
        className={cn(
          "group flex flex-col overflow-hidden rounded-lg border border-background/20 bg-background/95 p-3 shadow-xl backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-2xl",
          className
        )}
        aria-label={linkAria}
        href={path}
        prefetch={prefetch}
      >
        <div className="relative mb-3 aspect-square overflow-hidden rounded-md">
          <Image
            priority={priority}
            src={featuredImage?.url || "/default-product-image.svg"}
            alt={featuredImage?.altText || title}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="240px"
          />
        </div>
        <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-foreground">{title}</h3>
        {false}
        <span className="mt-2 text-xs font-medium text-muted-foreground">Shop Now →</span>
      </Link>
    )
  }

  return (
    <Link
      className={cn("group flex h-full w-full flex-col overflow-hidden rounded-lg", className)}
      aria-label={linkAria}
      href={path}
      prefetch={prefetch}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          priority={priority}
          src={featuredImage?.url || "/default-product-image.svg"}
          alt={featuredImage?.altText || title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="bg-size-200 bg-pos-0 hover:bg-pos-100 flex shrink-0 grow flex-col text-pretty bg-gradient-to-b from-transparent to-primary/5 p-4 transition-all duration-200">
        <h3
          className={cn(
            "line-clamp-2 text-lg font-semibold transition-colors data-[featured]:text-2xl",
            highlighted && "md:text-2xl"
          )}
        >
          {title}
        </h3>
        <div className="flex flex-col pt-1">
          {!!vendor && <p className={cn("text-sm text-gray-500", highlighted && "md:text-base")}>{vendor}</p>}

          <div className="flex flex-wrap items-center gap-1" />
        </div>

        {false}
      </div>
    </Link>
  )
}
