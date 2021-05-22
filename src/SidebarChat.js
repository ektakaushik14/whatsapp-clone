import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";
export default function SidebarChat({ addNewChat, name, id }) {
  const [random, setrandom] = useState("abc");
  const [messages, setmessages] = useState("");

  useEffect(() => {
    var a = Math.floor(Math.random() * 100);
    setrandom(a);
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("message")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setmessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div>
        <div className="SidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/male/${random}.svg`} />
          <div className="SidebarChat_info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}
