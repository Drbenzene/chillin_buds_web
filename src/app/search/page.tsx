'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation"
import ProductView from "@/components/block-component/modal/product-view-modal";
import { BASE_URL } from "../../../constants";
import axios from "axios";
import Loader from "@/components/block-component/loader/loader";
import EmptyImage from '../../assets/cbd.png';

const Search = () => {
  const router = useRouter();
  const [showProduct, setShowProduct] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState(true);

  const search = useSearchParams().get('query');

  console.log(search, "THE SEARCH");

  const showHandler = (details: any) => {
    setShowProduct(true);
    setDetails(details);
  };

  useEffect(() => {
    if (!search) {
      router.push('/');
    }

    async function getData() {
      const { data } = await axios.post(`${BASE_URL}/products/search`, { search });
      setProducts(data?.products);
      setLoading(false);
      console.log(data, "THE DATAAAA");
    }

    getData();

  }, [search]);

  return (
    <div className="search-bg-con min-h-screen min-w-full pb-20">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white shadow-lg">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"> Related Products for - <span className="text-green">{search}</span> </h2>
          <button 
          onClick = {() => router.push('/')}
          className="text-2xl text-white font-bold tracking-tigh px-3 py-2 bg-red-500"> Back </button>
        </div>

        {
          loading && (
            <div className="flex justify-center items-center mt-20">
              <Loader />
            </div>
          )
        }

        {
          !loading && products?.length === 0 && (
            <div className="flex justify-center items-center mt-20 flex-col">
              <Image src={require('../../assets/cbd.png')} alt="" className="w-1/4" />
              <p className="font-bold text-xl text-green-400">No Related Product with the search query {search} Found</p>
            </div>
          )
        }

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products?.map((product: any) => (
            <div key={product.id} className="group cursor-pointer relative bg-black rounded-xl text-white mb-20"
              onClick={() => showHandler(product)}
            >
              <div className="h-40 w-full overflow-hidden bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc || "https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"}
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
              </div>

            </div>
          ))}
        </div>

      </div>

      {
        showProduct && (
          <ProductView open={showProduct} setOpen={setShowProduct} details={details} />
        )
      }
    </div>
  );
};

export default Search;
