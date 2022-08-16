import React from 'react'
import SingleTechnologyFilter from './SingleTechnologyFilter'

const FilterDropdown = () => {
  return (
    <div className={` w-64  p-4 gap-2 bg-filter-dropdown rounded-lg grid grid-cols-2 top-8 absolute shadow-dropdown `}>
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
        <SingleTechnologyFilter />
    </div>
  )
}

export default FilterDropdown