import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>

                </Button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/Cryptocurrencies">cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>

        </div>
    )
}

export default Navbar
