


import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Login from './Login';

const io = require("socket.io-client");
const socket = io("http://localhost:11111/")

const Dashboard = () => {


    const [user, setUser] = useState([]);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const [messages, setMessages] = useState([]);
    const [hiServer, setHiServer] = useState([]);
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('join', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);
    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));


    }, [socket, messages]);

    const sendPing = () => {
        socket.emit('message', { text: "hi server from client labro " })
        setHiServer("already send hi at ")
    }

    // useEffect(() => {
    //     fetch('http://localhost:33333/user/', {
    //         method: 'GET',
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson)
    //             setUser(responseJson)

    //         })

    // }, [])
    return (

        <div style={{ marginTop: "20px" }} >
            {/* {user.map((detail, index) => (
                <div key={index} style={{ marginTop: "10px" }}>

                    <div>uuid  {detail.uuid}
                    </div>
                    <div>username
                        {detail.username}</div>
                    <div>email
                        {detail.email}
                    </div>
                </div>
            ))}
            <div>
                <p>Connected: {'' + isConnected}</p>
                <p>Last pong: {lastPong || '-'}</p>
                <button onClick={sendPing}>Send ping</button>
                <div>
                    <p>message to server : {hiServer}</p>
                </div>

                <div>
                    <p>server to message : {messages}</p>
                </div>
                
            </div> */}
            <Login></Login>
        </div>

    );


}

export default Dashboard;