import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function useSocket(url: string) {
  useEffect(() => {
    socket = io(url);
    return () => {
      socket?.disconnect();
    };
  }, [url]);
  return socket;
}
