import React from 'react'
import SVG from 'react-inlinesvg'
import '../assets/svgs/chat.svg'

export default function InfoContainer ({ user, setChat }) {
  return (
    <div className='info-wrapper'>
      <div className='infos'>
        <SVG className='chat-icon' src={user?.avatar} />
      </div>
    </div>
  )
}
