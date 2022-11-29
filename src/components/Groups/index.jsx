import React from "react";
import Box from "./../Homec/box/index";
import users from "./../../assets/svg/users.svg";
import user from "./../../assets/svg/user.svg";
import online from "./../../assets/svg/online.svg";
import threedots from "./../../assets/svg/threedots.svg";
import { Progress } from "antd";
import "./style.css";

const Groups = () => {
  const userInfo = (
    <div className="smbxCn">
      <div className="smbxWr">
        <div className="secondaryTxt">December 20, 2022</div>
        <img src={threedots} alt=""/>
      </div>
      <div>
        <div className="boxName">Frontent 010</div>
        <div className="secondaryTxt">O’quvchilar soni : 6</div>
      </div>
      <div>
        <div className="ddasTxtx"> O’rtacha o’z</div>
        <Progress percent={70} size="small" />
      </div>
      <div>
        <div className="secondaryTxt">O’qituvchi</div>
        <div></div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="grouppgfirstbox">
        <Box
          child={
            <div className="inf">
              <div className="block">
                <img src={users} alt="" />
                <div>
                  <div className="secondaryTxt">Hamma o’quvchilar</div>
                  <div className="boxName">125 ta</div>
                </div>
              </div>
              <div className="line"></div>
              <div className="block">
                <img src={user} alt="" />
                <div>
                  <div className="secondaryTxt">Ketgan O’quvchilar</div>
                  <div className="boxName">10 ta</div>
                </div>
              </div>
              <div className="line"></div>
              <div className="block">
                <img src={online} alt="" />
                <div>
                  <div className="secondaryTxt">Faol o’quvchilar</div>
                  <div className="boxName">54 ta</div>
                </div>
              </div>
            </div>
          }
          background={"white"}
        />
      </div>
      <Box
        child={
          <div className="grouppgsecondbox">
            <div className="gropgrdate">
              <div className="thirdpartyword">Guruhlar</div>
              <div className="boxName">Oktabr, 27</div>
            </div>
            <div className="scbxinfo">
              <div>
                <div className="boxName">7</div>
                <div className="secondaryTxt">Faol Guruhlar</div>
              </div>
              <div>
                <div className="boxName">2</div>
                <div className="secondaryTxt">Tugatgan guruh</div>
              </div>
              <div>
                <div className="boxName">9</div>
                <div className="secondaryTxt">Umumiy guruh </div>
              </div>
            </div>
            <div>
              <div className="tripleboxwr">
                <Box child={userInfo} background={"#FEE4CB"} />
                <Box child={userInfo} background={"#DBF6FD"} />
                <Box child={userInfo} background={"#FEE4CB"} />
              </div>
              <div></div>
            </div>
            <div className="tripleboxwr">
              <Box child={userInfo} background={"#FEE4CB"} />
              <Box child={userInfo} background={"#FEE4CB"} />
              <Box child={userInfo} background={" #DBF6FD"} />
            </div>
          </div>
        }
        background={"white"}
      />
    </div>
  );
};

export default Groups;
