import React, { useState } from "react";

const SingleTechnologyFilter = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="javascript"
          className="accent-cyan-500"
          id="technology"
          onChange={() => setIsChecked(!isChecked)}
          value={isChecked}
        />
        <span className="ml-2 text-sm">Javascript</span>
      </label>
    </div>
  );
};

export default SingleTechnologyFilter;
