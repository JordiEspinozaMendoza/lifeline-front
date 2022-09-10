import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://192.168.100.16:5051");

export const Prueba = () => {
    
  return (
    <div>prueba</div>
  )
}
