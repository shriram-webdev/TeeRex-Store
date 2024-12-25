import React, { useState } from "react";
import "./sidebox.css";

const SideBox = ({ data, setFilteredData }) => {
  const [colorBox, setColorBox] = useState({});
  const [typeBox, setTypeBox] = useState({});
  const [priceBox, setPriceBox] = useState({});
  const [genderBox, setGenderBox] = useState({});

  const colorArr = [...new Set(data.map((item) => item.color))];
  const typeArr = [...new Set(data.map((item) => item.type))];
  const priceArr = [...new Set(data.map((item) => item.price))];
  const genderArr = [...new Set(data.map((item) => item.gender))];

  const handelChange = (color, checked) => {
    setColorBox((prev) => ({
      ...prev,
      [color]: checked,
    }));

    const selectedData = data.filter((item) => item.color === color);
    
    if (checked) {
      setFilteredData(selectedData);
    } else {
      setFilteredData(data);
    }
  };

  const handelType = (type, checked) => {
    setTypeBox((prev) => ({
      ...prev,
      [type]: checked,
    }));

    const selectedData = data.filter((item) => item.type === type);

    if (checked) {
      setFilteredData(selectedData);
    } else {
      setFilteredData(data);
    }
  };

  const handelPrice = (price, checked) => {
    setPriceBox((prev) => ({
      ...prev,
      [price]: checked,
    }));

    const selectedData = data.filter((item) => item.price === price);

    if (checked) {
      setFilteredData(selectedData);
    } else {
      setFilteredData(data);
    }
  };

  const handelGender = (gender, checked) => {
    setGenderBox((prev) => ({
      ...prev,
      [gender]: checked,
    }));

    const selectedData = data.filter((item) => item.gender === gender);

    if (checked) {
      setFilteredData(selectedData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="side-box">
      <h2>Color</h2>
      <div className="color">
        {colorArr.map((color) => (
          <div className="border" key={color}>
            <label htmlFor={color}>{color}</label>
            <input
              type="checkbox"
              name={color}
              checked={colorBox[color] || false}
              onChange={(e) => handelChange(color, e.target.checked)}
            />
          </div>
        ))}
      </div>
      <h2>Type</h2>
      <div className="type">
        {typeArr.map((type) => (
          <div className="border" key={type}>
            <label htmlFor={type}>{type}</label>
            <input
              type="checkbox"
              name={type}
              checked={typeBox[type] || false}
              onChange={(e) => handelType(type, e.target.checked)}
            />
          </div>
        ))}
      </div>
      <h2>Price</h2>
      <div className="price">
        {priceArr.map((price) => (
          <div className="border" key={price}>
            <label htmlFor={price}>{price}</label>
            <input
              type="checkbox"
              name={price}
              checked={priceBox[price] || false}
              onChange={(e) => handelPrice(price, e.target.checked)}
            />
          </div>
        ))}
      </div>
      <h2>Gender</h2>
      <div className="gender">
        {genderArr.map((gender) => (
          <div className="border" key={gender}>
            <label htmlFor={gender}>{gender}</label>
            <input
              type="checkbox"
              name={gender}
              checked={genderBox[gender] || false}
              onChange={(e) => handelGender(gender, e.target.checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBox;
