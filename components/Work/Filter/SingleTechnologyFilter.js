import React, { useState } from "react";

const SingleTechnologyFilter = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="">
      <label className="flex items-center ">
        <input
          type="checkbox"
          name="javascript"
          className=" relative accent-cyan-500 ring-offset-0 border-none outline-none  bg-cyan-500 rounded-full ring-cyan-500 "
          id="technology"
          onChange={() => setIsChecked(!isChecked)}
          value={isChecked}
        ></input>

        <span className="ml-2 text-sm">Javascript</span>
      </label>
    </div>
  );
};

export default SingleTechnologyFilter;
