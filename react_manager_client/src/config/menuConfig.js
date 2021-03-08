import React from 'react' 
import {
    AppstoreOutlined,
    PieChartOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const menuList = [
    {
        title:'Home',
        key: '/home',
        icon: <PieChartOutlined />
    },
    {
        title:'Team',
        key: '/team',
        icon: <MailOutlined />
    },
    {
        title:'Player',
        key: '/player',
        icon: <AppstoreOutlined />
    },
    {
        title: 'User',
        key: '/user',
        icon: <PieChartOutlined />
    },
    {
        title: 'Role',
        key: '/role',
        icon: <ContainerOutlined />,
    }
]
export default menuList