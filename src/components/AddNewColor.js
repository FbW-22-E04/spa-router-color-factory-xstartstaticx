import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewColor = ({ selectColor, setSelectColor }) => {
  const [data, setData] = useState({ colorName: "", colorValue: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(data);
    setSelectColor([...selectColor, data]);

    navigate("/colors");
  };

  return (
    <div className="bg-green-400 h-screen flex justify-center items-center">
      <div className="bg-white w-[80%] p-[6rem] rounded-[15px] ">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Color name</label>
            <input
              onChange={(e) => setData({ ...data, colorName: e.target.value })}
              className="border-2 border-gray-400"
              type="text"
              placeholder="Enter a name for the color"
            />
          </div>
          <div className="my-5">
            <label htmlFor="">Color value</label>
            <input
              onChange={(e) => setData({ ...data, colorValue: e.target.value })}
              type="color"
            />
          </div>
          <button className="border-2 bg-blue-200">Add this color</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewColor;
