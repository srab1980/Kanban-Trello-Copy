import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { boardSchema } from '@/lib/zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json([], { status: 401 });
  const boards = await db.board.findMany({
    where: {
      members: { some: { user: { email: session.user.email } } }
    }
  });
  return NextResponse.json(boards);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const parse = boardSchema.safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const board = await db.board.create({
    data: {
      title: parse.data.title,
      imageUrl: parse.data.imageUrl,
      members: {
        create: { user: { connect: { email: session.user.email } } }
      }
    }
  });
  return NextResponse.json(board, { status: 201 });
}
