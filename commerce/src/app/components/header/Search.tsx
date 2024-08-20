"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

export default function Search() {
  const router = useRouter();

  const handleInputChange = (searchText:string) => {
    if(searchText === ''){
      router.replace(`/products`);
    }else{
      router.replace(`/products?search=${searchText}`);
    }
  };

  return (
    <div>
      <form className={"d-flex"} role="search">
        <input
          className={"form-control me-2"}
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e.target.value);
          }}
        />
        <button className="btn btn-outline-light border-2" type="button">
          Search
        </button>
      </form>
    </div>
  );
}
