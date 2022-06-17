
// import './App.css';
// import io from "socket.io-client"
// import { useState, useEffect} from "react"
// import Chat from './components/Chat';
// const socket = io.connect("http://localhost:3001")

// function App() {

//   const [room , setRoom] = useState("")
//   const [username, setUsername] = useState("")
//   const [showChat, setShowChat] = useState(false)
//   // const [recieved, setRecieved] = useState("")
//   const joinRoom = () => {
//     if(room !== "" && username !== ""){
//       setShowChat(true)
//     }
    
//     socket.emit("join_room", {room, username})
//   }

//   return (
//     <div >
//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
//       <input type="text" placeholder="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
//       <button onClick={joinRoom}>Join Room</button>
//       { showChat && <Chat room={room} username={username} socket={socket}/>}
      

//     </div>
// )

// }

// export default App;

import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
