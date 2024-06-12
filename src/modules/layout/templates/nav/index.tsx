import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Iconmenu, Navmenu } from "../../components/Navmenu"
import RSQ from "@/../public/logo.png"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-white border-ui-border-base w-full border-b">
      <header className="relative h-16 mx-aut duration-200   w-[90vw] m-auto">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="w-full grid grid-cols-3 gap-4 place-content-center m-auto">
            <div className="w-full flex justify-start">
              <Navmenu />
            </div>
            <div className="w-full m-auto text-center flex justify-center">
              <LocalizedClientLink href="/">
                {" "}
                <img className="w-20" src={'https://www.bidnamic.com/hubfs/abulr3-logo-removebg-preview.png'} alt="RSQ LOGO" height={50} />
              </LocalizedClientLink>
            </div>
            <div className="w-full flex justify-end">
              <Iconmenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
