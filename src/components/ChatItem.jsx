import React from 'react';
import Avatar from "./Avatar.jsx";

export default function ChatItem() {
    return (
        <div className="chat-item">
            <Avatar src="" height={55} width={55} />
            <div className="chat-item-infos">
                <div className="avatar-infos">
                    <span className="username">John Doe</span>
                    <span className="timeline">2 days ago.</span>
                </div>
                <p className="last-message">Say hi! to John Doe</p>
            </div>
        </div>
    );
}