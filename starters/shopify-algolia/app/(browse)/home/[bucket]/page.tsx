import { BUCKETS } from "constants/index"
import { AnnouncementBar } from "app/(browse)/home/_components/announcement-bar"
import { HeroSection } from "app/(browse)/home/_components/hero-section"
import { CategoriesSection } from "app/(browse)/home/_components/categories-section"
// Removed New Arrivals section

export const revalidate = 86400

export const dynamic = "force-static"

export const dynamicParams = true

export default async function Homepage(_props: { params: Promise<{ bucket: string }> }) {

  return (
    <div className="flex w-full flex-col">
      <AnnouncementBar />
      <HeroSection />
      <CategoriesSection />
    </div>
  )
}

export async function generateStaticParams() {
  return BUCKETS.HOME.map((bucket) => ({ bucket }))
}
