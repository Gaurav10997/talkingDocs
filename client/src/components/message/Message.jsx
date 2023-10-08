import React from 'react'
import "./message.css"

function getCurrentTimeIn12HourFormat(timestamp) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
  

    const formattedHours = hours % 12 || 12;
  
    // Ensure single-digit minutes are padded with a leading zero
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  
    // Construct the time string in 12-hour format
    const timeIn12HourFormat = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

    
    return timeIn12HourFormat;
  }


function Message({answer,isQuestion,name}) {
  return (
    <div className={isQuestion?"msg right-msg":"msg left-msg"}>
    <div
        className="msg-img"
        style={{
            backgroundImage:isQuestion?
            "url(https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?pid=ImgDet&rs=1)":
            "url(https://images.discordapp.net/avatars/421231044881022976/1cdbcb7b90e0ed85693cfc0a07827bea.png?size=512)"
        }}
    />
    <div className="msg-bubble">
        <div className="msg-info">
            <div className="msg-info-name">{name}</div>
            <div className="msg-info-time">{getCurrentTimeIn12HourFormat(Date.now())}</div>
        </div>
    <div className="msg-text">
        {answer}
    </div>
    </div>
    </div>
  )
}

export default Message