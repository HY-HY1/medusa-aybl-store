import { Metadata } from "next"

import Footer from "@/modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav/index"
import Announcement from "@/modules/layout/templates/announcement"
import { listRegions } from "@lib/data"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const regions = await listRegions().then((regions) => regions)
  return (
    <>
      <Announcement regions={regions}/>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
