import React, { Component } from 'react'
import {Modal} from 'antd'
import { connect } from 'react-redux'

import './head.less'
import formDate from '../../utils/dateUtils'
import LinkButton from '../link-button'
import { logout } from '../../redux/actions'

class Head extends Component {

    state = {
        currentTime: formDate(Date.now())
    }

    getCurrentTime = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                currentTime: formDate(Date.now())
            })
        }, 1000)
    }

    logout = () => {
        Modal.confirm({
            content: 'Do you want to sign out?',
            onOk: () => {
              console.log('OK', this)
              this.props.logout()
            }
          })
    }

    componentDidMount() {
        this.getCurrentTime()
    }

    render() {

        const { currentTime } = this.state
        return (
            <div className='head'>
                <div className='head-top'>
                    <LinkButton onClick={this.logout}>Log Out</LinkButton>
                </div>
                <div className='head-bottom'>
                    {currentTime}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ }),
    { logout }
)(Head)