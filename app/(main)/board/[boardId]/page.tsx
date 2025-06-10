import { notFound } from 'next/navigation';
interface BoardPageProps {
  params: { boardId: string };
}

export default function BoardPage({ params }: BoardPageProps) {
  const { boardId } = params;
  if (!boardId) return notFound();
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Board {boardId}</h2>
      {/* Lists and cards will be displayed here */}
    </div>
  );
}
