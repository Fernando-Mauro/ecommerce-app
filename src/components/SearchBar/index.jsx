import { useContext, useState } from "react";
import { MainContext } from "../../Context/mainContext";

export const SearchBar = () => {
    const {onInputChange, searchValue} = useContext(MainContext);

    return (
        <>
            <input onChange={onInputChange} value={searchValue} type="text" placeholder="Search a product" className="rounded-lg border border-black w-80 p-4 text-center mb-4 focus:outline-none"/>
        </>
  )
}
