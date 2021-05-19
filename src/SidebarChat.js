import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
export default function SidebarChat({ name, m, msg }) {
  const [random, setrandom] = useState("abc");

  useEffect(() => {
    var a = Math.floor(Math.random() * 100);
    setrandom(a);
  }, []);

  return (
    <div>
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/male/${random}.svg`} />
        <div className="SidebarChat_info">
          <h1>{name}</h1>
          <p>{m}</p>
          <h2>{msg}</h2>
        </div>
      </div>
    </div>
  );
}
