import React from 'react'
import { useEffect, useState } from 'react';
import './Chat.css'
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'

function Chat({ messages }) {

    const [input, setInput] = useState("")

    const sendMessage =async (e) => {
        e.preventDefault();
        await axios.post("/api/v1/messages/new", {
            "message": input,
            "name": "Demo App",
            "timestamp": "Just now!",
            "received": true
        })
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
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

            <div className="chat__body">

                {
                    messages.map((message,index) => (
                        <p key={index} className={`chat__message ${message.received && "chat__reciever"}`}>
                            <span className="chat__name">
                                {message.name}
                            </span>
                            {message.message}
                            <span className="chat__timestamp">
                                {message.timestamp}
                            </span>
                        </p>
                    ))
                }

            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={sendMessage}
                        type="submit"
                    >
                        Send a message
                        </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
