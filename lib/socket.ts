import { Server } from 'socket.io';
import type { Server as HTTPServer } from 'http';

/**
 * Hold a single Socket.io instance so API routes can
 * share connections without creating new servers.
 */

let io: Server | null = null;

/**
 * Initialise Socket.io if needed.
 * @param server HTTP server from a Next.js request
 */
export function initSocket(server: HTTPServer) {
  if (!io) {
    io = new Server(server);
  }
  return io;
}

/**
 * Retrieve the shared Socket.io instance.
 */
export function getIO() {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
}
