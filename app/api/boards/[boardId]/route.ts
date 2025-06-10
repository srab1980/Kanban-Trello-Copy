import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { boardSchema } from '@/lib/zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface Context {
  params: { boardId: string };
}

export async function GET(_req: Request, ctx: Context) {
  const board = await db.board.findUnique({
    where: { id: ctx.params.boardId },
    include: { lists: true }
  });
  if (!board) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(board);
}

export async function PATCH(req: Request, ctx: Context) {
  const body = await req.json();
  const parse = boardSchema.partial().safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const board = await db.board.update({
    where: { id: ctx.params.boardId },
    data: parse.data
  });
  return NextResponse.json(board);
}

export async function DELETE(_req: Request, ctx: Context) {
  await db.board.delete({ where: { id: ctx.params.boardId } });
  return NextResponse.json({});
}
