import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import header from '../../assets/imgs/image.png'
import './left-nav.less'
import menuList from '../../config/menuConfig'
import SubMenu from 'antd/lib/menu/SubMenu'

class LeftNav extends Component {

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

        const openKey = this.props.location.pathname
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img alt='head' src={header} />
                    <h1>Manage System</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[openKey]}
                >
                    {this.getMenuNodes(menuList)}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)