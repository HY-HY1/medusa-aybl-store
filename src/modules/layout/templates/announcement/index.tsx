"use client"
import React from "react"
import { ArrowRightMini } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { clx, useToggleState } from "@medusajs/ui"
import CountrySelect from "@/modules/checkout/components/country-select"
import SideMenu from "../../components/side-menu"

const Announcement = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()
  return (
    <div className="w-full bg-gray-100 border-b h-10 ">
     <div className="w-[90vw] m-auto">
        <div className="w-full grid gap-4 grid-cols-3">
            <div></div>
            <div></div>
            <div className="flex justify-end content-center py-1 border-r shadow-sm"><SideMenu regions={regions}/></div>
        </div>
     </div>
    </div>
  )
}

export default Announcement
