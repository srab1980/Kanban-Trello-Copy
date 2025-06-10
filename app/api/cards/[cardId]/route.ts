import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cardSchema } from '@/lib/zod';

interface Context { params: { cardId: string } }

export async function GET(_req: Request, ctx: Context) {
  const card = await db.card.findUnique({
    where: { id: ctx.params.cardId },
    include: { comments: true, activities: true }
  });
  if (!card) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(card);
}

export async function PATCH(req: Request, ctx: Context) {
  const body = await req.json();
  const parse = cardSchema.partial().safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const card = await db.card.update({ where: { id: ctx.params.cardId }, data: parse.data });
  return NextResponse.json(card);
}

export async function DELETE(_req: Request, ctx: Context) {
  await db.card.delete({ where: { id: ctx.params.cardId } });
  return NextResponse.json({});
}
