









import React from 'react'
import { useState, useEffect } from 'react'
function Chat({ socket, username, room}) {
    const[currentMessage, setCurrentMessage] = useState("")
    const [recieved, setRecieved] = useState("")
    const handleMessage = async () => {
      if(currentMessage !== ""){
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }
        await socket.emit("send_message", messageData)
      }
      
    }
    useEffect(() => {
      socket.on("recieve_message", (data) => {
        console.log(data)
      })
    },[socket])

  return (
    <div>
        <div className='header'><p>Chat app</p></div>
        <div className='chatBody'>
          <h2>{recieved}</h2>
        </div>
        <div className='footer'>
            <input type="text" placeholder='message' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)}/>
            <button onClick={handleMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat