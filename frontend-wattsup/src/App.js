import React, { useEffect,useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';


function App() {

  //responsible for fetching all of the initial info

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    })
  }, []);





  useEffect(() => {
    const pusher = new Pusher('bafcdbc62fbb2129e69a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages ,newMessage])

      return ()=>{
        channel.unbind_all();
        channel.unsubscribe();
      }

    });
  }, [messages]);

  console.log(messages);



  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>


    </div>
  );
}

export default App;
