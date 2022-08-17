import React, { useState } from "react";
import Image from "next/image";
import FilterDropdown from "./FilterDropdown";
const Filter = ({technologies, setProjectsList, projects, projectsList}) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  return (
    <div className="text-white w-full flex z-40  flex-row mb-8 items-center justify-end px-12 relative">
      <div className="flex items-center justify-end mr-8 ">
        <h1 className="mr-4 text-base font-semibold">Filter</h1>
        <div className="flex cursor-pointer" onClick={() => setFilterIsOpen(!filterIsOpen)}>
          <Image
            src="/assets/icons/filter.svg"
            alt="filter"
            height={18}
            width={18}
          />
        </div>
        
      </div>
      <div className="flex items-center justify-end">
        <h1 className="mr-4 text-base font-semibold">Reset</h1>
        <div className="flex cursor-pointer" onClick={() => {setProjectsList(projects);setFilterIsOpen(false)}}>
          <Image
            src="/assets/icons/reset.svg"
            alt="filter"
            height={18}
            width={18}
          />
        </div>
        
      </div>
      {filterIsOpen && <FilterDropdown setProjectsList={setProjectsList} projects={projects}  technologies={technologies} projectsList={projectsList} />  } 
       
    </div>
  );
};

export default Filter;
