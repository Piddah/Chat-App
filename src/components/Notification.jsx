import { useState, useEffect } from 'react'
import * as signalR from '@microsoft/signalr'

export default function Notification () {
  const [notification, setNotification] = useState('')

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7228/messagehub')
      .build()

    connection.start()

    connection.on('ReceiveMessage', (user, message) => {
      setNotification(message)
    })

    return () => {
      connection.stop()
    }
  }, [])

  return (
    <div>
      <p>{notification}</p>
    </div>
  )
}
