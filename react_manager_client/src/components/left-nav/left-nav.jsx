import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import header from '../../assets/imgs/image.png'
import './left-nav.less'
import menuList from '../../config/menuConfig'
import SubMenu from 'antd/lib/menu/SubMenu'

export default class LeftNav extends Component {

    getMenuNodes = (menuList) => {
        return menuList.map(menu => {
            /* 
            {
                title:'Home',
                key: '/home',
                icon: <PieChartOutlined />,
                children: [] // maybe exist or not exist
            },
             */
            if(!menu.children){
                return (
                    <Menu.Item key={menu.key} icon={menu.icon}>
                        <Link to={menu.key}>{menu.title}</Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
                        {this.getMenuNodes(menu.children)}
                    </SubMenu>
                )
            }
        })
    }
    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img alt='head' src={header} />
                    <h1>Manage System</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                    {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        )
    }
}