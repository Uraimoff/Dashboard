import { message } from "antd";
import React, { useState } from "react";
import useRequest from "../../hooks/useRequest";
import Input from "../Generic/Input";
import './style.css'

// import { dato } from "./../mock/data";

const AddUser = () => {
  // const navigate = useNavigate();
  const [body, setBody] = useState({});
  const request = useRequest();

  const info = () => {
    message.info("Successfully added");
  };

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };
  const onCreate = () => {
    request({ method: "POST", body })
    // .then(
    //   (res) => {
    //     // console.log(res, "");
    //     // if(res){
    //     //   info()
    //     // }
    //   })
    // fetch(`https://6385c5f4beaa64582667e624.mockapi.io/api/v1/studentCreate`, {
    //   method: "POST",
    //   body: JSON.stringify(body),
    // });
  };
  console.log(body, "bu bodyni ichidagi malumotla");
  return (
    <div>
      <div className="wrap">
      <Input onChange={onChange} name="firstName" placeholder={"first name"} />
      <Input onChange={onChange} name="lastName" placeholder={"last name"} />
      <Input onChange={onChange} name="phoneNumber" placeholder={"phone"} />
      </div>
      <div className="wrap">
      <Input onChange={onChange} name="email" placeholder={"email"} />
      <Input onChange={onChange} name="direction" placeholder={"direction"} />
      </div>
      <button className="AddBtn" onClick={onCreate}>+ Add user</button>
      {/* {dato.map((value) => (
        <tr>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.phone}</td>
          <td>697 000</td>
          <td>{value.job}</td>
          <td>
            <button>Active</button>
          </td>
        </tr>
      ))} */}
    </div>
  );
};

export default AddUser;
