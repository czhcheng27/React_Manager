import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';

import LeftNav from '../../components/left-nav/left-nav'
import Head from '../../components/head/head'
import Home from '../home/home'
import Team from '../team/team'
import Player from '../player/player'
import User from '../user/user'
import Role from '../role/role'

const {  Footer, Sider, Content } = Layout;

class Admin extends Component {
    render() {

        const user = this.props.user
        if (!user || !user._id) {
            return <Redirect to='/login' />
        }

        return (
            <Layout style={{ minHeight: '100%' }}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Head>Head</Head>
                    <Content style={{ backgroundColor: '#fff' }}>
                        <Switch>
                            <Redirect exact from='/' to='/home' />
                            <Route path='/home' component={Home} />
                            <Route path='/team' component={Team} />
                            <Route path='/player' component={Player} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Develop by Zihang Cheng</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(Admin)