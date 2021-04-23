import { useEffect, useState } from 'react';
import './App.css';
import './Sidebar';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/api/v1/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  }, [])

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('b2bf068d1d65c8766938', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
      // console.log(JSON.stringify(data));
    });

    // return () => {
    //   channel.unbind_all();
    //   channel.unsubscribe()
    // }

  }, [messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
