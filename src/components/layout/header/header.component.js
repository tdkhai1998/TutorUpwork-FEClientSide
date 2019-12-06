import React from 'react';
import { Layout, Input, Avatar, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './header.css';

const header = props => {
  const { userData } = props;
  console.log(props);
  const { Header } = Layout;
  const { Search } = Input;
  return (
    <Header className="header" style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Col span={16} style={{ display: 'flex', height: '100%' }}>
          <Link to="/">
            <img alt="" src="/img/logo.png" style={{ alignSelf: 'center', height: '80%' }} />
          </Link>
          <Search
            onSearch={value => console.log(value)}
            style={{ alignSelf: 'center', width: '50%' }}
            className="searchHeader"
          />
        </Col>

        <Col span={4}>
          {userData !== '' ? (
            <Avatar shape="square" size={35} icon="user" />
          ) : (
            <Link to="/login" style={{ padding: '5px', color: 'white' }}>
              {/* Đăng nhập */}
            </Link>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default header;