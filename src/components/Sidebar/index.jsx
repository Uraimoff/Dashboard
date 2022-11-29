import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { obj } from "../mock/data";
import setting from "./../../assets/svg/setting.svg";
import vector from "./../../assets/svg/Vector.svg";
import { Col, Row, Statistic } from "antd";
// import type { countdownValueType } from 'antd/es/statistic/utils';
import "./style.css";
import avatar from './../../assets/img/avatar.png'
// import arrow from './../../assets/svg/Vector.png'
const Sidebar = () => {
  const [active, setActive] = useState();
  const handleClick = () => {
    setActive((current) => !current);
  };
  let activeStyle = {
    backgroundColor: "#5932EA",
    borderRadius: "8px",
  };
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
  const onFinish = () => {
    console.log("finished!");
  };
  return (
    <>
      <div
        style={{
          background: active ? "white" : "",
          width: active ? "300px" : "80px",
        }}
        className="kategory"
      >
        <div onClick={() => handleClick()} className="logoWr">
          <div>
            <img
              style={{
                transform: active && "rotate(180deg)",
                transition: "0.5s",
              }}
              src={setting}
              alt=""
            />
          </div>
          <h1 className="Logoname">Dashboard</h1>
        </div>
        <div
          style={{
            display: active ? "" : "",
            width: active ? "250px" : "200px",
            height: "40px",
          }}
          className="categories"
        >
          <div className="sideBarCont">
            {obj.map((value) => (
              <NavLink
                className="ddas"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={value.path}
              >
                <div className="dass">
                  <img src={value.icon} alt="" />
                  <div className="sidename">{value.name}</div>
                </div>
                <img className="arrow" src={vector} alt="" />
              </NavLink>
            ))}
          </div>
          {
            active ?
            <>
            <div className="timeWr">
            <Row gutter={16}>
              <Col span={12}>
                <Countdown style={{color: "white"}}
                  // title="Countdown"
                  value={deadline}
                  onFinish={onFinish}
                  />
              </Col>
            </Row>
          </div>
            <div className="userWrass">
          <div className="userinfo">
              <div><img src={avatar} alt="" /></div>
              <div className="asdas">
                <div className="avatarName">Turdiyev Sheroz</div>
                <div className="secondaryyTxt">Frontend o’qituvchi</div>
              </div>
            </div>
            <div><img style={{transform: "rotate(90deg)"}} src={vector} alt="" /></div>
          </div>
            </>
            : 
            <div className="userWrass" style={{marginTop: "197px"}}>
          <div className="userinfo">
              <div><img src={avatar} alt="" /></div>
              <div className="asdas">
                <div className="avatarName">Turdiyev Sheroz</div>
                <div className="secondaryyTxt">Frontend o’qituvchi</div>
              </div>
            </div>
            <div><img style={{transform: "rotate(90deg)"}} src={vector} alt="" /></div>
          </div>
          }
        </div>
        </div>
    </>
  );
};
export default Sidebar;
