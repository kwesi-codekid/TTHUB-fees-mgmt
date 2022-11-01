import React from "react"
import { Form, Input, Switch, Button, Row, Col, Typography, Image } from "antd"
import { UserOutlined, LockOutlined, WhatsAppOutlined, FacebookFilled, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons"

//import logo
import TTHubLogo from './images/tthub-logo.jpg'

//import css files
import './css/login.css'
const Login = () => {
  //destructure antd components
  const { Title, Link, Text } = Typography;
  const { Item } = Form;

  return (
    <div className="wrapper">
      <Row justify="center" align="middle" className="login-form-wrap">
        <Col sm={24} lg={12} className="formalities text-center">
          <Image className="image rounded" src={TTHubLogo} />
          <Title className="heading-text text-center text-white">FEES MGMT SYSTEM</Title>
        </Col>
        <Col sm={24} lg={12} className="login-form border-left">
          <Form className="antd-form m-auto" hideRequiredMark layout="vertical">
            <div className="heading d-flex flex-col">
              <UserOutlined className="icon rounded text-center" />
              <Title className=" form-title text-white text-center">Login to your Account</Title>
            </div>

            <Item
              className="label text-white"
              label={<label style={{color: '#eef', fontSize: '16px'}}>Email</label>}
              name={'email'}
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email"
                }
              ]}
            >
              <Input 
                size="large" 
                prefix={<UserOutlined />}
              />
            </Item>

            <Item
              className="label text-white"
              label={<label style={{color: '#eef', fontSize: '16px'}}>Password</label>}
              name={'password'}
              rules={[
                {
                  required: true,
                  message: "Please enter a valid password"
                }
              ]}
            >
              <Input.Password 
                size="large" 
                prefix={<LockOutlined />}
              />
            </Item>

            <Row style={{marginBottom: '15px'}}>
              <Col md={14}>
                <div className="d-flex">
                    <Switch />
                    <p>Remember Me</p>
                </div>
              </Col>

              <Col md={10}>
                <Link>
                  Forgot Password
                </Link>
              </Col>
            </Row>

            <Item>
              <Button block type="primary" size="large">Submit</Button>
            </Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
