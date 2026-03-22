import { cn } from 'drupal-canvas';
import type { HTMLAttributes, ReactNode } from 'react';

export interface GridProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'content'
> {
  content?: ReactNode;
}

function Grid({ className, content, ...props }: GridProps) {
  return (
    <div
      className={cn(
        'grid w-full min-w-sm grid-cols-1 gap-6 md:grid-cols-3 md:gap-8',
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}

export { Grid };
export default Grid;
