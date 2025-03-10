import type { ComponentProps } from 'react';
import { clsx } from 'clsx';

/**
 * A loading placeholder.
 *
 * @param props - A set of `span` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Skeleton({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={clsx(
        className,
        'skeleton inline-block h-[1em] w-20 rounded-[0.2em] align-middle'
      )}
      {...props}
    />
  );
}
