import { initSocket } from '@/lib/socket';

export async function GET(req: Request) {
  const anyReq = req as any;
  if (!anyReq.socket?.server.io) {
    initSocket(anyReq.socket.server);
  }
  return new Response(null, { status: 200 });
}
