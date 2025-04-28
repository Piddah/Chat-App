import React from 'react'
import SVG from 'react-inlinesvg'
import Chat from '../assets/svgs/chat.svg'

export default function InfoContainer ({ user, setChat }) {
  return (
    <div className='info-wrapper'>
      <div className='infos'>
        <SVG className='chat-icon' src={Chat} />
        <h2>Messenger</h2>
        <p>Select a user to start a chat</p>
      </div>
    </div>
  )
}
