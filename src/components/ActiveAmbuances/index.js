
import { computeHeadingLevel } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './styles.sass';


const socket = io.connect("https://lifeline-socket.herokuapp.com/");



export const ActiveAmbulances = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    socket.emit("get__all__ambulances")
    socket.emit("get__all__users")
    socket.emit("get__all__rooms")	
  }, [])
  useEffect(() => {
    socket.on("all__ambulances", (data) => {
      setAmbulances(data)
    })
    socket.on("all__users", (data) => {
      setUsers(data)
      console.log(data)
    })
    socket.on("all__rooms", (data) => {
      setRooms(data)
      console.log(data)
    })
    return () => {
      socket.off("all__ambulances")
      socket.off("all__users")
      socket.off("all__rooms")
    }
  }, [])

  return (
    
    <div className='active__'>
      <span>
        {socket.connected ? "Connected to server" : "Not connected to server"}
      </span>
      <p>
      Active ambulances
      </p> 
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Socket</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ambulances.map((ambulance) => (
            <tr key={ambulance?.id}>
              <td>{ambulance?.id}</td>
              <td>{ambulance?.socketId}</td>
              <td>{ambulance?.location?.latitude}</td>
              <td>{ambulance?.location?.longitude}</td>
              <td><button onClick={() => {
                socket.emit("delete__ambulance", ambulance?.socketId)
              }}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
      Active users
      </p>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>username</th>
            <th>SocketId</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.username}</td>
              <td>{user?.socketId}</td>
              <td>{user?.location  ? user?.location?.latitude : "No location"}</td>
              <td>{user?.location ? user?.location?.longitude : "No location"}</td> 
              <td><button onClick={() => {
                socket.emit("delete__user", user?.socketId)
              }}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
      Active rooms
      </p>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Ambulance</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room?.key}>
              <td>{room?.room}</td>
              <td>{room?.ambulance?.socketId}</td>
              <td>{room?.patient?.socketId}</td>
              <td>{room?.status}</td>
              <td><button onClick={() => {
                socket.emit("delete__room", room?.room)
              }}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
