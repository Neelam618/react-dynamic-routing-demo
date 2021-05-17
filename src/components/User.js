import React from 'react'
import {withRouter} from 'react-router-dom'

function User(props) {
    console.warn(props)
    return (
        <div>
            <h1>User Component</h1>
        </div>
    )
}

export default withRouter(User)
