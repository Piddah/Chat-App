import "../assets/css/content.css";
import Avatar from "./Avatar.jsx";
import SVG from "react-inlinesvg";
import Menu from "../assets/svgs/menu.svg";
import React from "react";
import Message from "./Message.jsx";
import Send from "../assets/svgs/send.svg";
import {SeedMessages} from "../data/Message.js";
import { useState } from "react";


export default function Content() {

    const [onMenu, setOnMenu] = useState(false);
    const [onViewer, setViewer] = useState(false);
    const [messages, setMessages] = useState(SeedMessages);
    const [msgImages, setMsgImages] = useState([]);

    const openImageViewer = (images) => {
        setMsgImages(images);
        setViewer(true);
    }

    const closeImageViewer = () => {
        setMsgImages([]);
        setViewer(false);
    }

    return (
            <div className="content">
                <div className="wrapper">
                    <div className="top">
                        <Avatar username={"Peter"} height={45} width={45}/>
                        <div className="app-icon" onClick={() => setOnMenu(prev => !prev)}>
                            <SVG className="menu-icon" src={Menu} />
                        
                            {onMenu && (
                            <div className="menu-wrapper">
                                <span className="menu-item">Close Chat</span>
                                <span className="menu-item">Delete Messages</span>
                                <span className="menu-item">Delete Chat</span> 
                            </div>
                            )}
                        </div>    
                    </div>
                    <div className="center">
                        {msgImages.length > 0 && onViewer ? (
                        <div className="image-viewer-wrapper">
                            <h2>Images</h2>
                            <button onClick={closeImageViewer}>close</button>
                        </div>
                        ) : (
                        <div className="messages-wrapper">
                            {messages.map((msg) => (
                                <Message 
                                key={msg?.id} 
                                msg={msg} 
                                owner={msg?.owner} 
                                openImageViewer={openImageViewer}
                                /> 
                            ))}
                        </div>)}
                    </div>
                    <div className="bottom">
                        <textarea placeholder="Type a message..." />
                        <div className="app-icon">
                            <SVG className="send-icon" src={Send} />
                        </div>
                    </div>

                </div>
            </div>
            
            );
}