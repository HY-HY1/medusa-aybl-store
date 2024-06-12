"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { Search, ShoppingCart, User } from "lucide-react"
import CartButton from "../cart-button"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ItemsTemplate from "@/modules/cart/templates/items"

export function Navmenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LocalizedClientLink href="/store" hrefk>
              WOMEN
            </LocalizedClientLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LocalizedClientLink href="/store" hrefk>
              MEN
            </LocalizedClientLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function Iconmenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LocalizedClientLink href="/search">
              <Search size={20} strokeWidth={1.5} />
            </LocalizedClientLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LocalizedClientLink href="/account">
              <User size={20} strokeWidth={1.5} />
            </LocalizedClientLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Sheet>
              <SheetTrigger asChild>
                <ShoppingCart size={20} strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Cart</SheetTitle>
                  <SheetDescription>
                    Find all of you shopping here
                  </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Continue Shopping</Button>
                  </SheetClose>
                  <LocalizedClientLink href="/cart">
                    <Button variant="outline" type="submit">
                      Cart
                    </Button>
                  </LocalizedClientLink>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
