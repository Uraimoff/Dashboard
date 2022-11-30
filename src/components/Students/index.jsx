import React, { useEffect, useState } from "react";
import Box from "../Homec/box";
import users from "./../../assets/svg/users.svg";
import user from "./../../assets/svg/user.svg";
import noUser from "./../../assets/svg/noUser.svg";
import online from "./../../assets/svg/online.svg";
// import { Select } from "antd";
import Input from "./../Generic/Input";
import { Pagination } from 'antd';
import "./style.css";
import { useNavigate } from "react-router-dom";
// import { dato } from "../mock/data";

const Students = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  // https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    fetch("https://6385c5f4beaa64582667e624.mockapi.io/api/v1/studentCreate")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res, "res dan qaytgan malumot");
        setData(res);
      });
  }, []);
  // console.log(data, "fakedata");
  return (
    <>
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
                <div className="block">
                  <img src={user} alt="" />
                  <div>
                    <div className="secondaryTxt">Ketgan O’quvchilar</div>
                    <div className="boxName">10 ta</div>
                  </div>
                </div>
                <div className="block">
                  <img src={noUser} alt="" />
                  <div>
                    <div className="secondaryTxt">Ketgan O’quvchilar</div>
                    <div className="boxName">10 ta</div>
                  </div>
                </div>
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
        <div className="studentgsecondbox">
          <Box
            child={
              <div className="">
                <div className="studentsecondbx">
                  <div>
                    <div className="boxName">Hamma O’quvchilar</div>
                    <div className="greenTxt">Faol o’quvchilar</div>
                  </div>
                  <div className="filter">
                    <Input
                      type="text"
                      icon={false}
                      placeholder="Qidiruv"
                      background={"#F9FBFF"}
                    />
                    {/* <Select name="" id="" defaultValue={"Select Sort"}>
                      <Select.Option value="asc">Yillar</Select.Option>
                      <Select.Option value="desc">Oylar</Select.Option>
                    </Select> */}
                  <button className="AdddBtn" onClick={()=>navigate('/adduser')}>Add User</button>
                  </div>
                </div>
                <div>
                  <table style={{ width: "100%", textAlign: "start" }}>
                    <tr>
                      <th>F.I.O</th>
                      <th>Yo’nalish</th>
                      <th>Telefon nomer</th>
                      <th>To’lov</th>
                      <th>Guruh</th>
                      <th>Status</th>
                    </tr>
                    {data.map((value) => (
                      <tr>
                        <td>{value.firstName} {value.lastName}</td>
                        <td>{value.email}</td>
                        <td>{value.phoneNumber}</td>
                        <td>697 000</td>
                        <td>{value.direction}</td>
                        <td>
                          <button>Active</button>
                        </td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>Jane Cooper</td>
                      <td>Microsoft</td>
                      <td>(225) 555-0118</td>
                      <td>697 000</td>
                      <td>Frontend 010</td>
                      <td>button</td>
                    </tr> */}
                  </table>
                </div>
                <div className="pagination">
                <Pagination defaultCurrent={6} total={500} />
                </div>
              </div>
            }
            background={"white"}
          />
        </div>
      </div>
    </>
  );
};

export default Students;
