import React, { Component } from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

import './head.less'
import LinkButton from '../linkbutton';
import { logout } from '../../redux/actions';
import formDate from '../../utils/dateUtlis';

const { confirm } = Modal;

class Head extends Component {

    state = {
        currentTime: formDate(Date.now()) 
    }

    logout = () => {
        confirm({
            content: 'Do you want to sign out?',
            onOk: () => {
                console.log('OK', this)
                this.props.logout()
            }
        });
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formDate(Date.now()) 
            this.setState({
                currentTime
            })
        }, 1000)
    }

    componentDidMount(){
        this.getTime()
    }
    
    render() {

        const {currentTime} = this.state

        return (
            <div className='head'>
                <div className='head-top'>
                    <LinkButton onClick={this.logout}>Log out</LinkButton>
                </div>
                <div className='head-bottom'>
                    {currentTime}
                </div>
            </div>
        )
    }
}

export default connect(
    state => { },
    {logout}
)(Head)