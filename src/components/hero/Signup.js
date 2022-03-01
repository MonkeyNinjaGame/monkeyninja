import React, { useState } from 'react';
import { useMoralis } from "react-moralis";
import { Button, Input } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

function Signup() {

  const { signup } = useMoralis();

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")

  return (
    <>
      <Input type="text" prefix={<UserOutlined />} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
      <Input type="text" prefix={<MailOutlined />} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      <Input.Password type="password" prefix={<LockOutlined />} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      <Button type="primary" onClick={()=>signup(username, password, email)}>Signup</Button>
    </>
  );
}

export default Signup;