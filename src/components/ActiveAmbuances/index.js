
import { computeHeadingLevel } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './styles.sass';

const socket = io.connect("http://192.168.100.26:5051");


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
    <div className='active__'>ActiveAmbulances
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Socket</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Eliminar</th>
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
              }}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      Active users
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>username</th>
            <th>SocketId</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Eliminar</th>
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
              }}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      Active rooms
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Ambulance</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Eliminar</th>
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
              }}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}