import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Colors = ({ selectColor }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-black text-white h-[20rem] flex flex-col items-center justify-center">
        <h2 className="text-[2rem]">Welcome to the color factory.</h2>
        <h1
          style={{ cursor: "pointer" }}
          className="text-[3rem] underline"
          onClick={() => navigate("/colors/new")}
        >
          Add a color
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <h3 className="mb-4">Please select a color.</h3>
        {selectColor.map((item, i) => (
          <Link to={`/colors/${item.colorName}`} key={i}>
            <p className="underline">{item.colorName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colors;
