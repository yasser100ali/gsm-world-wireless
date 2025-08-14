export interface CategoryItem {
  title: string
  handle: string
  href: string
  description: string
}

export const categoryItems: CategoryItem[] = [
  {
    title: "Cell Phones",
    handle: "cell-phones",
    href: "/category/cell-phones",
    description: "Smartphones, unlocked phones, and plans",
  },
  {
    title: "Computers",
    handle: "computers",
    href: "/category/computers",
    description: "Laptops, desktops, monitors, and tablets",
  },
  {
    title: "Accessories",
    handle: "accessories",
    href: "/category/accessories",
    description: "Cases, chargers, audio, and wearables",
  },
  {
    title: "About",
    handle: "about",
    href: "/pages/about",
    description: "GSM World Wireless — Cypress, CA",
  },
]
