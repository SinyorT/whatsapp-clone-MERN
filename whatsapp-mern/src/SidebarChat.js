import React from 'react'
import "./SidebarChat.css"
import { Avatar, IconButton } from "@material-ui/core"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125202419_714379482507167_6370285396132852066_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=ErttRFPkQRoAX-QyAWR&edm=ABfd0MgBAAAA&ccb=7-4&oh=74fc331995de899f251069bf826d8dfe&oe=60A43CF4&_nc_sid=7bff83" />

            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
