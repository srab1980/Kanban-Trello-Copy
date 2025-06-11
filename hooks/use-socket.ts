/**
 * Connect to a Socket.io server when the component mounts and
 * disconnect when it unmounts.
 *
 * @param url URL of the Socket.io server
 */
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

/**
 * Create and return a Socket.io client instance.
 */
export function useSocket(url: string) {
  useEffect(() => {
    socket = io(url);
    return () => {
      socket?.disconnect();
    };
  }, [url]);
  return socket;
}
