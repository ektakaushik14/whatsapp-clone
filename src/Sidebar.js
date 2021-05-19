import React from "react";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar-headerright">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>{" "}
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chat">
        <SidebarChat name="pushkar" m="1" msg="hello" />
        <SidebarChat name="ekta" m="2" />
        <SidebarChat name="ankit" m="3" />
        <SidebarChat name="golumolu" />
      </div>
    </div>
  );
}
