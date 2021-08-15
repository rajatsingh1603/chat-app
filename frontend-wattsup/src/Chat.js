import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Mehta</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Mehta</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Mehta</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
            <InsertEmoticonIcon />
            <form>
                <input placeholder="Type a message.."
                    type="text" />
                    
                
                <button type="submit" >Send message</button>

                
            </form>
            <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
