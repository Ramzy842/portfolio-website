import React, { useState } from "react";
import Image from "next/image";
import FilterDropdown from "./FilterDropdown";
const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  return (
    <div className="text-white w-full flex z-40 flex-col items-end px-12 relative">
      <div className="flex items-center justify-end mb-4">
        <h1 className="mr-4 text-lg font-semibold">Filter</h1>
        <div className="flex cursor-pointer" onClick={() => setFilterIsOpen(!filterIsOpen)}>
          <Image
            src="/assets/icons/filter.svg"
            alt="filter"
            height={18}
            width={18}
          />
        </div>
        
      </div>
      {filterIsOpen && <FilterDropdown />  } 
       
    </div>
  );
};

export default Filter;
