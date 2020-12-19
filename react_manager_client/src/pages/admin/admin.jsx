import React, {Component} from 'react' 
import {Button} from 'antd'
import {connect} from 'react-redux'


class Admin extends Component { 
    render () { 

        const user = this.props.user

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