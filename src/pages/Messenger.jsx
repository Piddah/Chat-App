import '../assets/css/messenger.css'
import Sidebar from '../components/Sidebar.jsx'
import Content from '../components/Content.jsx'
import { useState } from 'react'

export default function Messenger () {
  const [chat, setChat] = useState(false)

  return (
    <div className='messenger'>
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  )
}
