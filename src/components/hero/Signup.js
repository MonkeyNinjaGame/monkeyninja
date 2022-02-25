import React, { useState } from 'react';
import { useMoralis } from "react-moralis";
import { Button, Input } from 'antd';

function Signup() {

  const { signup } = useMoralis();

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")

  return (<>
    <Input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
    <Input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
    <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
    <Button onClick={()=>signup(username, password, email)}>Press</Button>
    
</>);
}

export default Signup;