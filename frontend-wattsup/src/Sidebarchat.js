import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebarchat.css'

function Sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>The last message.</p>
            </div>
        </div>
    )
}

export default Sidebarchat
