

import CollectionTemplate from "@/modules/collections/templates"
import Banner from "@/modules/home/components/banner"
import FeaturedCollection from "@/modules/home/components/featured-collection"


export default function Home() {
  return (
    <>
      <div>
      <Banner 
        imageURL="https://cdn.shopify.com/s/files/1/3000/0340/files/DESKTOP_76ab8f86-4c45-44c0-98af-36916b5d6abf.png?v=1717091401"
        title="Short Season"
        href="/collections/all"
        buttonCTA="Shop Now"
        description="Designed to bring maximum support and performance in every activity"
        />
      </div>
      <div>
        <FeaturedCollection handle="shorts"/>
      </div>
    </>
  )
}
