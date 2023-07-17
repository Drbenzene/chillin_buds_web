'use client'


const products = [
    {
      id: 1,
      name: 'Leather Long Wallet',
      color: 'Natural',
      price: '$75',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 2,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        imageAlt: 'Hand stitched, orange leather long wallet.',
      },
      {
        id: 3,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        imageAlt: 'Hand stitched, orange leather long wallet.',
      },
      {
        id: 4,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        imageAlt: 'Hand stitched, orange leather long wallet.',
      },
    // More products...
  ]


  import { useRouter } from "next/navigation"
  import { useSearchParams } from "next/navigation"
  import { useEffect, useState } from "react"
  import ProductView from "@/components/block-component/modal/product-view-modal"
  import { BASE_URL } from "../../../constants"
import axios from "axios"

  export default function Search() {

    const router = useRouter()
    const [showProduct, setShowProduct] = useState(false)

    const search =  useSearchParams().get('query')

    console.log(search, "THE SEARCH")



    useEffect(() => {
        if(!search){
            router.push('/')
        } 

        async function getData (){
          const {data} = await axios.post(`${BASE_URL}/products/search`, {search})
          console.log(data, "THE DATAAAA")
        }

        getData()
    }, [search])


    return (
      <div className="search-bg-con min-h-screen min-w-full">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900"> Related Products for  - <span className="text-green">{search}</span> </h2>
          </div>
  
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-black rounded-xl text-white"
              onClick={() => setShowProduct(true)}
              >
                <div className="h-40 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="p-5">
                <h3 className="mt-4 text-sm text-white">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-white">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-white">{product.price}</p>
                </div>

              </div>
            ))}
          </div>


        </div>

        {
          showProduct && (
            <ProductView open={showProduct} setOpen={setShowProduct} />
          )
        }
      </div>
    )
  }