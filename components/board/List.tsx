import { ReactNode } from 'react';

interface ListProps {
  title: string;
  children?: ReactNode;
}

export function List({ title, children }: ListProps) {
  return (
    <div className="bg-gray-100 rounded p-2 w-64">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
