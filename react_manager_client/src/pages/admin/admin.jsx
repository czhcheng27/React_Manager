import React, {Component} from 'react' 
import {Button} from 'antd'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';


class Admin extends Component { 
    render () { 

        const user = this.props.user
        if(!user || !user._id){
            return <Redirect to='/login' />
        }

        return ( 
            <div>
                Hello {user.username}
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {}
)(Admin)