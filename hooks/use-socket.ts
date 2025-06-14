/**
 * Connect to a Socket.io server when the component mounts and
 * disconnect when it unmounts.
 *
 * @param url URL of the Socket.io server
 */
import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

/**
 * Create and return a Socket.io client instance.
 */
export function useSocket(url: string) {
  const socketRef = useRef<Socket | null>(null);
  useEffect(() => {
    socketRef.current = io(url);
    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, [url]);
  return socketRef.current;
}
