import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { listSchema } from '@/lib/zod';

interface Context { params: { listId: string } }

export async function PATCH(req: Request, ctx: Context) {
  const body = await req.json();
  const parse = listSchema.partial().safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const list = await db.list.update({ where: { id: ctx.params.listId }, data: parse.data });
  return NextResponse.json(list);
}

export async function DELETE(_req: Request, ctx: Context) {
  await db.list.delete({ where: { id: ctx.params.listId } });
  return NextResponse.json({});
}
