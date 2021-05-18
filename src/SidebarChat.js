import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
export default function SidebarChat() {
  const [random, setrandom] = useState("");

  useEffect(() => {
    const number = Math.floor(Math.random() * 10);
    setrandom(number);
  }, []);

  return (
    <div>
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/male/${random}.svg`} />
        <button>submit</button>
      </div>
    </div>
  );
}
