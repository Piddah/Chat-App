import React from "react";
import Xicon from "../assets/svgs/plus-lg.svg";
import SVG from "react-inlinesvg";
import Edit from "../assets/svgs/edit.svg";
import Avatar from "./Avatar.jsx";
import "../assets/css/profile.css";
import { useState } from "react";
import Camera from "../assets/svgs/camera.svg";

export default function Profile({ open, setOpen }) {
  const [onEdit, setOnEdit] = useState(false);

  return (
    <div className={open ? "profile active" : "profile"}>
      <div className="profile-wrapper">
        <div className="profile-topbar">
          <span className="heading">Profile</span>
          <div className="app-icon" onClick={() => setOpen(false)}>
            <SVG className="close-icon" src={Xicon} />
          </div>
        </div>
        {onEdit ? (
          <div className="profile-infos">
            <div className="avatar-wrapper">
              <Avatar height={150} width={150} />
              <SVG className="photo-icon" width={25} src={Camera} />
            </div>
            <form action={() => {}} className="profile-form">
              <input type="text" placeholder="Username" />
              <textarea
                type="text"
                placeholder="Write something about yourself."
              ></textarea>
              <div className="profile-btns">
                <button
                  onClick={() => setOnEdit(false)}
                  className="cancel-btn"
                  src={Edit}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="profile-infos">
            <div className="avatar-wrapper">
              <Avatar height={150} width={150} />
              <SVG className="photo-icon" width={25} src={Camera} />
            </div>
            <span className="username">John Doe</span>
            <span className="email">johndoe@email.com</span>
            <span className="status">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </span>

            <button onClick={() => setOnEdit(true)} className="edit-btn">
              <SVG className="edit-icon" width={20} src={Edit} />
              <span>Profile</span>
            </button>
          </div>
        )}
        ;
      </div>
    </div>
  );
}
