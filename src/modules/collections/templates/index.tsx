import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import H2 from "@/components/typograpghy/H2"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <div className="w-full grid gap-8 grid-cols-5">
        <div className=" col-span-1">
          <H2 classname='max-w-sm'>Filter</H2>
          <RefinementList sortBy={sortBy || "created_at"} />
        </div>
        <div className=" col-span-4">
          <div className="w-full">
            <div className="mb-8 text-2xl-semi">
              <p className=" text-sm text-muted-foreground hover:underline">
                <LocalizedClientLink href={`/collections/${collection.handle}`}>
                  View All
                </LocalizedClientLink>
              </p>
              <h1>{collection.title}</h1>
            </div>
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sortBy || "created_at"}
                page={pageNumber}
                collectionId={collection.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
