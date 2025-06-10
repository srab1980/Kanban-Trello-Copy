import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { listSchema } from '@/lib/zod';

interface Context { params: { boardId: string } }

export async function POST(req: Request, ctx: Context) {
  const body = await req.json();
  const parse = listSchema.safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const list = await db.list.create({
    data: { ...parse.data, boardId: ctx.params.boardId }
  });
  return NextResponse.json(list, { status: 201 });
}
