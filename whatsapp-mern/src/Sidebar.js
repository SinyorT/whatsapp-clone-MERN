import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125202419_714379482507167_6370285396132852066_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=ErttRFPkQRoAX-QyAWR&edm=ABfd0MgBAAAA&ccb=7-4&oh=74fc331995de899f251069bf826d8dfe&oe=60A43CF4&_nc_sid=7bff83" />
                <div className="sidebar__headerRight">
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

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text"
                        placeholder="Search or start new chat"
                    />
                </div>

            </div>
        
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
