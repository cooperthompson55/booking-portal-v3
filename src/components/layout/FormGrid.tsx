import React from 'react';
import { cn } from '../../utils/cn';

export interface FormGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const columns = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export const FormGrid: React.FC<FormGridProps> = ({
  children,
  className,
  columns: cols = 2,
}) => {
  return (
    <div
      className={cn(
        'grid gap-4',
        columns[cols],
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormGrid; 