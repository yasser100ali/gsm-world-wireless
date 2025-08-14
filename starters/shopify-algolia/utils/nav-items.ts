import type { NavItem } from "components/navigation-bar/types"

export const navigationItems: NavItem[] = [
  {
    text: "Cell Phones",
    href: "/category/cell-phones",
    pageDisplayType: "CLP",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Smartphones",
          href: "/category/smartphones",
          items: [
            { text: "iPhone", href: "/category/iphone" },
            { text: "Android Phones", href: "/category/android-phones" },
            { text: "Unlocked Phones", href: "/category/unlocked-phones" },
          ],
        },
        {
          text: "Prepaid & Plans",
          href: "/category/prepaid-phones",
        },
        {
          text: "Cases & Protection",
          href: "/category/cases-and-protection",
        },
        {
          text: "Chargers & Cables",
          href: "/category/chargers-and-cables",
        },
      ],
    },
  },
  {
    text: "Computers",
    href: "/category/computers",
    pageDisplayType: "CLP",
    submenu: {
      variant: "text-grid",
      items: [
        { text: "Laptops", href: "/category/laptops" },
        { text: "Desktops", href: "/category/desktops" },
        { text: "Monitors", href: "/category/monitors" },
        { text: "Tablets", href: "/category/tablets" },
        { text: "Networking", href: "/category/networking" },
      ],
    },
  },
  {
    text: "Accessories",
    href: "/category/accessories",
    pageDisplayType: "CLP",
    submenu: {
      variant: "text-grid",
      items: [
        { text: "Phone Cases", href: "/category/phone-cases" },
        { text: "Screen Protectors", href: "/category/screen-protectors" },
        { text: "Chargers & Cables", href: "/category/chargers-and-cables" },
        { text: "Headphones & Earbuds", href: "/category/headphones-and-earbuds" },
        { text: "Smartwatches", href: "/category/smartwatches" },
      ],
    },
  },
  {
    text: "About",
    href: "/pages/about",
    pageDisplayType: "CLP",
  },
]
