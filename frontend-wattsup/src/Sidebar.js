import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Sidebarchat from './Sidebarchat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

                <Avatar src='https://st.depositphotos.com/1787196/1330/i/600/depositphotos_13301967-stock-photo-furry-blue-monster.jpg' />
                <div className="sidebar_headRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_serachContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or type text" type="text"></input>
                </div>
            </div>

            <div className="sidebar_chat">
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />

            </div>
        </div>
    )
}

export default Sidebar
