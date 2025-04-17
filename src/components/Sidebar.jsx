import '../assets/css/sidebar.css'
import Avatar from './Avatar.jsx'
import Search from '../assets/svgs/search.svg'
import Plus from '../assets/svgs/plus-lg.svg'
import SVG from 'react-inlinesvg'
import ContactItem from './ContactItem.jsx'
import ChatItem from './ChatItem.jsx'
import power from '../assets/svgs/power.svg'
import React from 'react'

export default function Sidebar ({ setChat }) {
  const [newChat, setNewChat] = React.useState(false)

  return (
    <div className='sidebar'>
      <div className='wrapper'>
        <div className='top'>
          <Avatar width={45} height={45} />
          {newChat && <span className='heading'>Add Conversation</span>}
          <div className='app-icon' onClick={() => setNewChat(prev => !prev)}>
            <SVG
              className={newChat ? 'plus-icon active' : 'plus-icon'}
              src={Plus}
            />
          </div>
        </div>
        <div className='center'>
          <div className='search-wrapper'>
            <div className='input-wrapper'>
              <SVG className='search-icon' src={Search} />
              <input
                type='text'
                placeholder={newChat ? 'Search a user' : 'Search a thread'}
              />
            </div>
          </div>
          <div className='center-wrapper'>
            {newChat ? (
              <div className='items-wrapper'>
                {[...Array(50)].map((contact, index) => (
                  <ContactItem key={index} />
                ))}
              </div>
            ) : (
              <div className='items-wrapper'>
                {[...Array(50)].map((chat, index) => (
                  <ChatItem setChat={setChat} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='bottom'>
          <button className='logout-btn'>
            <SVG src={power} className='logout-icon' />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}
