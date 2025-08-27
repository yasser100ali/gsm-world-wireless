"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { PlatformCollection } from "lib/shopify/types"
import type { CommerceProduct } from "types"
import { ProductCard } from "components/product-card"
import { Button } from "components/ui/button"

interface CategoryLandingPageProps {
  collection: PlatformCollection
  products: CommerceProduct[]
  basePath?: string
}

export function CategoryLandingPage({ collection, products, basePath }: CategoryLandingPageProps) {
  const [showAllProducts, setShowAllProducts] = useState(false)

  const initialProductCount = 12
  const categorySlug = collection.handle || ""

  // Filter products based on category
  const getFilteredProducts = () => {
    const title = (p: CommerceProduct) => (p.title || "").toLowerCase()

    switch (categorySlug) {
      case "cell-phones":
        return products.filter((p) => {
          const productTitle = title(p)
          const allowed = /iphone|galaxy|pixel|android/.test(productTitle)
          const excluded = /macbook|airpod|magsafe|charger|watch|ipad|imac|mac mini/.test(productTitle)
          return allowed && !excluded
        })

      case "computers":
        return products.filter((p) => {
          const productTitle = title(p)
          return /macbook|imac|mac mini|ipad|galaxy tab/.test(productTitle)
        })

      case "accessories":
        return products.filter((p) => {
          const productTitle = title(p)
          return /airpod|magsafe|charger|watch|case|screen protector/.test(productTitle)
        })

      default:
        return products
    }
  }

  const filteredProducts = getFilteredProducts()
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, initialProductCount)
  const hasMoreProducts = filteredProducts.length > initialProductCount

  return (
    <div className="mx-auto w-full md:max-w-container-md">
      {}
      {collection.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg md:aspect-[21/9]">
          <Image
            src={collection.image.url}
            quality={90}
            alt={collection.image.altText || collection.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">{collection.title}</h1>
          </div>
        </div>
      )}

      {}
      {!collection.image && (
        <div className="py-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">{collection.title}</h1>
        </div>
      )}

      {}
      {collection.descriptionHtml && (
        <div className="py-8">
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }}
          />
        </div>
      )}

      {}
      {products.length > 0 && (
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
            {categorySlug === "cell-phones" ? "Featured Phones" : "Featured Products"}
          </h2>

          {}
          <div className="space-y-8">
            {/* Apple iPhones */}
            {categorySlug === "cell-phones" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Apple iPhones</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {(() => {
                  // Group iPhones by series and get the first/best product from each series
                  const iphoneGroups: { [key: string]: CommerceProduct[] } = {};

                  displayedProducts
                    .filter((p) => p.title.toLowerCase().includes("iphone"))
                    .forEach((product) => {
                      const seriesMatch = product.title.toLowerCase().match(/iphone (\d+)/);
                      const series = seriesMatch ? seriesMatch[1] : "other";

                      if (!iphoneGroups[series]) {
                        iphoneGroups[series] = [];
                      }
                      iphoneGroups[series].push(product);
                    });

                  // Sort series by newest first, then get the best product from each series
                  const seriesOrder = ["16", "15", "14", "13", "other"];
                  const sortedSeries = Object.keys(iphoneGroups).sort((a, b) => {
                    const aIndex = seriesOrder.indexOf(a);
                    const bIndex = seriesOrder.indexOf(b);
                    return (aIndex === -1 ? seriesOrder.length : aIndex) - (bIndex === -1 ? seriesOrder.length : bIndex);
                  });



                  return sortedSeries.map((series) => {
                    const products = iphoneGroups[series];
                    // Get the Pro Max if available, otherwise Pro, otherwise the first one
                    const bestProduct = products.find(p => p.title.toLowerCase().includes("pro max")) ||
                                      products.find(p => p.title.toLowerCase().includes("pro")) ||
                                      products[0];

                    // Create a custom product card that represents the whole series
                    const seriesProduct = {
                      ...bestProduct,
                      title: `iPhone ${series}${series === "other" ? "" : ""}`,
                      price: Math.min(...products.map(p => p.minPrice || 0)),
                      id: `iphone-${series}`,
                      images: bestProduct.images,
                      handle: bestProduct.handle
                    };

                    return (
                      <div key={series} className="relative">
                        <ProductCard {...seriesProduct} className="h-full" prefetch={false} />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {products.length} models
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
              <p className="mt-2 text-sm text-gray-500">* Click any iPhone to see all available models in that series</p>
            </div>
            )}

            {/* Apple MacBooks */}
            {categorySlug === "computers" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Apple MacBooks</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {displayedProducts
                  .filter((p) => p.title.toLowerCase().includes("macbook"))
                  .sort((a, b) => {
                    // Sort by Pro first, then Air
                    const aIsPro = a.title.toLowerCase().includes("pro");
                    const bIsPro = b.title.toLowerCase().includes("pro");
                    if (aIsPro && !bIsPro) return -1;
                    if (!aIsPro && bIsPro) return 1;

                    // Within same type, sort by newest chip first
                    const chipOrder = ["m3", "m2"];
                    const aChip = chipOrder.find(chip => a.title.toLowerCase().includes(chip));
                    const bChip = chipOrder.find(chip => b.title.toLowerCase().includes(chip));
                    if (aChip && bChip) {
                      return chipOrder.indexOf(aChip) - chipOrder.indexOf(bChip);
                    }

                    return 0;
                  })
                  .map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} {...product} className="h-full" prefetch={false} />
                  ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">* Professional-grade laptops with M3 and M2 chips</p>
            </div>
            )}

            {/* Apple Computers */}
            {categorySlug === "computers" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Apple Computers</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {displayedProducts
                  .filter((p) => (p.title.toLowerCase().includes("imac") || p.title.toLowerCase().includes("mac mini")) &&
                                !p.title.toLowerCase().includes("macbook"))
                  .sort((a, b) => {
                    // Sort iMac before Mac Mini
                    const aIsImac = a.title.toLowerCase().includes("imac");
                    const bIsImac = b.title.toLowerCase().includes("imac");
                    if (aIsImac && !bIsImac) return -1;
                    if (!aIsImac && bIsImac) return 1;
                    return 0;
                  })
                  .map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} {...product} className="h-full" prefetch={false} />
                  ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">* All-in-one desktops and compact mini computers</p>
            </div>
            )}

            {/* Tablets */}
            {categorySlug === "computers" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tablets</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {displayedProducts
                  .filter((p) => p.title.toLowerCase().includes("ipad") || p.title.toLowerCase().includes("galaxy tab"))
                  .sort((a, b) => {
                    // Sort iPad Pro first, then regular iPad, then Samsung
                    const aIsIpadPro = a.title.toLowerCase().includes("ipad pro");
                    const bIsIpadPro = b.title.toLowerCase().includes("ipad pro");
                    const aIsIpad = a.title.toLowerCase().includes("ipad") && !a.title.toLowerCase().includes("pro");
                    const bIsIpad = b.title.toLowerCase().includes("ipad") && !b.title.toLowerCase().includes("pro");

                    if (aIsIpadPro && !bIsIpadPro) return -1;
                    if (!aIsIpadPro && bIsIpadPro) return 1;
                    if (aIsIpad && !bIsIpad) return -1;
                    if (!aIsIpad && bIsIpad) return 1;

                    return 0;
                  })
                  .map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} {...product} className="h-full" prefetch={false} />
                  ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">* iPad Pro, iPad, and Samsung Galaxy Tab series</p>
            </div>
            )}

            {/* Android Section */}
            {categorySlug === "cell-phones" && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Android</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {displayedProducts
                  .filter((p) => !p.title.toLowerCase().includes("iphone"))
                  .map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} {...product} className="h-full" prefetch={false} />
                  ))}
              </div>
            </div>
            )}
          </div>

          {}
          {!showAllProducts && hasMoreProducts && (
            <div className="mt-8 flex justify-center">
              <Button onClick={() => setShowAllProducts(true)} className="w-full md:w-auto">
                Show More Products ({filteredProducts.length - initialProductCount} more)
              </Button>
            </div>
          )}

          {}
          {showAllProducts && (
            <div className="mt-8 flex justify-center">
              <Link
                href={`/${basePath ? `${basePath}/` : ""}category/plp/${collection.handle}`}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse All {collection.title} Products
              </Link>
            </div>
          )}
        </div>
      )}

      {}
      {products.length === 0 && (
        <div className="py-16 text-center">
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-2 text-gray-500">
            We&apos;re working on adding products to this collection. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}
