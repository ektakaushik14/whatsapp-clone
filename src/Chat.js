import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

export default function Chat() {
  const [random, setrandom] = useState("");
  const [input, setinput] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  useEffect(() => {
    setrandom(Math.floor(Math.random() * 5000));
  }, [roomId]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("message")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setmessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);

    db.collection("rooms").doc(roomId).collection("message").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setinput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/male/${random}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen at{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {/* true means message.name=== user.displayName */}
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName && "chat_reciever"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
