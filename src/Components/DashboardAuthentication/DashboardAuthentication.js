import React, { useState } from 'react';
import './DashboardAuthentication.css';
import { Form, Button } from "react-bootstrap";

const DashboardAuthentication = ({authenticateCreds}) => {
    const [userCreds,setUserCreds] = useState({
        username:'',
        password:''
    })
    const onChangeHandler = (event) =>{
        setUserCreds({...userCreds, [event.target.name]: event.target.value})
    }
  return <div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control name="username" onChange={onChangeHandler} type="name" placeholder="Enter username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" onChange={onChangeHandler} type="password" placeholder="Password" />
  </Form.Group>
  <Button onClick={() => authenticateCreds(userCreds.username, userCreds.password)}>
    Get me In
  </Button>
</Form>
  </div>;
};

export default DashboardAuthentication;
