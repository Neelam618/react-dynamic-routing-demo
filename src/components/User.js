import React from 'react'
import {withRouter} from 'react-router-dom'

function User(props) {
    console.log(props.match.params.id)
    return (
        <div>
            <h1>Hi this is User id: {props.match.params.id}</h1>
            <h1>Hi this is {props.match.params.name}</h1>
        </div>
    )
}

export default withRouter(User)
