import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cardSchema } from '@/lib/zod';

interface Context { params: { listId: string } }

export async function POST(req: Request, ctx: Context) {
  const body = await req.json();
  const parse = cardSchema.safeParse(body);
  if (!parse.success) return NextResponse.json(parse.error, { status: 400 });
  const card = await db.card.create({ data: { ...parse.data, listId: ctx.params.listId } });
  return NextResponse.json(card, { status: 201 });
}
