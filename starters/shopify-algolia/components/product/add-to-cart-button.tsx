"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"

import type { PlatformVariant } from "lib/shopify/types"

import { addCartItem, getItemAvailability } from "app/actions/cart.actions"

import { Button } from "components/ui/button"
import { BagIcon } from "components/icons/bag-icon"

import { cn } from "utils/cn"
import { getCookie } from "utils/get-cookie"
import type { Combination } from "utils/product-options-utils"

import { useAddProductStore } from "stores/add-product-store"
import { useCartStore } from "stores/cart-store"

import type { CommerceProduct } from "types"

import { COOKIE_CART_ID } from "constants/index"

export function AddToCartButton() {
  return null
}
