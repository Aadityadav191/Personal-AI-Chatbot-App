// src/Pages/Chat/Chat.jsx (assumed location based on structure)
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Conversation from "../Conversation/Conversation"; // <-- correct path

export default function Chat() {
  return (
    <>
      <Sidebar>
        <Conversation />
      </Sidebar>
    </>
  );
}
