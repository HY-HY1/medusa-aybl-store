"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
          <div className="flex flex-col">
            <div
              className="flex justify-between m-auto content-center "
              onMouseEnter={toggleState.open}
              onMouseLeave={toggleState.close}
            >
              {regions && (
               <div className="flex flex-row">
                <CountrySelect toggleState={toggleState} regions={regions} />
                <ArrowRightMini
                className={clx(
                  "transition-transform duration-150 my-2 mr-2",
                  toggleState.state ? "rotate-90" : ""
                )}
              />
               </div>
              )}
             
            </div>
          </div>
        </div>
      </div>
  )
}

export default SideMenu
