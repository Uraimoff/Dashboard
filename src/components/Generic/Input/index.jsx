import React from "react";
import search from "./../../../assets/svg/search.svg";
import './style.css'

const Input = ({ icon, placeholder, background }) => {
  // const [icon, setIcon] = useState()
  return (
    <div style={{background: `${background}`}} className="inputWrapper">
      <img src={icon ? search : ""} alt="" />
      <input placeholder={placeholder}
        style={{ paddingLeft: icon ? "20px" : "0px" }}
        type="text"
      />
    </div>
  );
};

export default Input;
