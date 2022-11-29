// import { Dropdown } from "antd";
import { Select } from "antd";
import React from "react";
import Example from "../Dashboard";
import setting from "./../../assets/svg/setting.svg";
import Box from "./box";
import "./style.css";
import statistics from './../../assets/img/statistics.jpg'
import pie from './../../assets/img/pie.png'

const Homec = () => {
  return (
    <>
      <div className="homeWr">
        <Box
          child={
            <div>
              <div className="yearly">
                <div className="boxName">Yillik Statistika</div>
                <Select name="" id="" defaultValue={"Select Sort"}>
            <Select.Option value='asc'>Yillar</Select.Option>
            <Select.Option value='desc'>Oylar</Select.Option>
            </Select>
              </div>
              <div className="static"><img src={statistics} alt="" /></div>
            </div>
          }
          background={"white"}
        />
        <Box
          child={
            <div>
              <div>
                <div className="boxName">O’quvchilar</div>
                <div className="secondaryTxt">Guruhdagi o’quchilar guruhi</div>
              </div>
              <div className="pie"><img src={pie} alt="" /></div>
            </div>
          }
          background={"white"}
        />
        {/* <Example /> */}
      </div>
    </>
  );
};

export default Homec;
