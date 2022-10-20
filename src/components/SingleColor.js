import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleColor = ({ selectColor }) => {
  // color comes from App.js :color
  const { color } = useParams();

  const navigate = useNavigate();

  //   console.log(color);
  const colorNew = selectColor.filter((item) => item.colorName === color)[0];

  return (
    <div
      style={{ backgroundColor: `${colorNew && colorNew.colorValue}` }}
      className="flex justify-center items-center h-screen"
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {colorNew && colorNew.colorName.toUpperCase()}.</p>
        <p className="my-[10rem]">ISN'T IT BEAUTIFUL?</p>
        <p className="underline" onClick={() => navigate("/colors")}>
          GO BACK
        </p>
      </div>
    </div>
  );
};

export default SingleColor;
