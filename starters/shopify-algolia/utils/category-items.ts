export interface CategoryItem {
  title: string
  handle: string
  href: string
  description: string
  imageUrl?: string
}

export const categoryItems: CategoryItem[] = [
  {
    title: "Cell Phones",
    handle: "cell-phones",
    href: "/category/cell-phones",
    description: "Smartphones, unlocked phones, and plans",
    imageUrl: "/hero-images/woman_on_phone.png",
  },
  {
    title: "Computers",
    handle: "computers",
    href: "/category/computers",
    description: "Laptops, desktops, monitors, and tablets",
    imageUrl: "/hero-images/Apple-MacBook-Pro-M4-lineup.webp",
  },
  {
    title: "Accessories",
    handle: "accessories",
    href: "/category/accessories",
    description: "Cases, chargers, audio, and wearables",
    imageUrl: "/hero-images/apple_watch_series_10.png",
  },
  {
    title: "About",
    handle: "about",
    href: "/pages/about",
    description: "GSM World USA — Cypress, CA",
  },
]
