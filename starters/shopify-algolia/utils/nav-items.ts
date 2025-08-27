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
          text: "New Phones",
          href: "/category/new-phones",
          items: [
            { text: "iPhones", href: "/category/iphone" },
            { text: "Android", href: "/category/android-phones" },
          ],
        },
        {
          text: "Used & Refurbished",
          href: "/category/used-refurbished",
          items: [
            { text: "iPhones", href: "/category/iphone" },
            { text: "Android", href: "/category/android-phones" },
          ],
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
        {
          text: "Laptops",
          href: "/category/laptops",
          items: [
            { text: "MacBook Air", href: "/category/macbook-air" },
            { text: "MacBook Pro", href: "/category/macbook-pro" },
          ],
        },
        {
          text: "Computers",
          href: "/category/desktops",
          items: [
            { text: "iMac", href: "/category/imac" },
            { text: "Mac Mini", href: "/category/mac-mini" },
          ],
        },
        {
          text: "Tablets",
          href: "/category/tablets",
          items: [
            { text: "iPad Pro", href: "/category/ipad-pro" },
            { text: "iPad", href: "/category/ipad" },
            { text: "Samsung Galaxy Tab S9", href: "/category/samsung-galaxy-tab-s9" },
            { text: "Samsung Galaxy Tab S8", href: "/category/samsung-galaxy-tab-s8" },
          ],
        },
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
