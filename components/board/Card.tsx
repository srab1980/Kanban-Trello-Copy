interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-2 mb-2">
      {title}
    </div>
  );
}
