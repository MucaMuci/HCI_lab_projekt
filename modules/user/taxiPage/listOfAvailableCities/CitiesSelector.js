import React, { Component, useState } from "react";
import { listOfCities } from "./const/listOfCities";

const CitiesSelector = ({ toggleList, setCity }) => {
  return (
    <div
      style={{ width: "inherit" }}
      className={`flex flex-col absolute z-10 bg-hci-siva-2 overflow-y-scroll h-[200px] rounded-b-2xl ${
        !toggleList && "hidden"
      }`}
    >
      {listOfCities.map((el) => (
        <button
          className="hover:bg-white hover:text-hci-modra"
          key={el.city}
          onClick={() => {
            setCity(el.city, el.estimatedTime, el.price);
          }}
        >
          {el.city}
        </button>
      ))}
    </div>
  );
};

export default CitiesSelector;
