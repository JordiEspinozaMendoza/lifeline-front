
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://192.168.100.26:5051");


export const ActiveAmbulances = () => {

    useEffect(() => {
        socket.emit("get__all__ambulances")
        socket.on("all__ambulances", (data) => {
            console.log(data)
        })
    },[])
  return (
    <div>ActiveAmbulances</div>
  )
}
