"use client";

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}

const BrandScroll: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  // Simulate fetching brands
  const fetchBrands = async () => {
    // Replace with your actual API or data fetching logic
    const newBrands = Array.from({ length: 10 }, (_, index) => ({
      id: (page - 1) * 10 + index + 1,
      name: `Brand ${((page - 1) * 10 + index + 1)}`,
      logoUrl: `https://via.placeholder.com/100?text=Logo${((page - 1) * 10 + index + 1)}`,
    }));

    setBrands((prevBrands) => [...prevBrands, ...newBrands]);
    setPage((prevPage) => prevPage + 1);
    if (newBrands.length < 10) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className="bg-black/[0.96] py-10">
      <h2 className="text-3xl mb-6 font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center">
        Our Trusted Brands
      </h2>
      
      <InfiniteScroll
        dataLength={brands.length}
        next={fetchBrands}
        hasMore={hasMore}
        loader={<h4 className="text-white text-center">Loading...</h4>}
        endMessage={<p className="text-white text-center">No more brands to show</p>}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="w-[150px] h-[150px] flex items-center justify-center">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BrandScroll;
