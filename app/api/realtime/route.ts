import { NextRequest } from 'next/server';
import { initSocket } from '@/lib/socket';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  if (!req.socket?.server.io) {
    initSocket(req.socket.server);
  }
  return new Response(null, { status: 200 });
}
