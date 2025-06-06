import type { ComponentProps, CSSProperties } from 'react';
import { useMemo } from 'react';
import { clsx } from 'clsx';

export interface CharactersProps
  extends Omit<ComponentProps<'span'>, 'children'> {
  /**
   * A string of characters to split.
   */
  children?: string;
}

/**
 * A split set of characters.
 *
 * @param props - A set of `span` props applied to each character.
 * @param [props.children] - A string of characters to split.
 * @param [props.className] - A list of one or more classes.
 */
export function Characters({
  children = '',
  className,
  ...props
}: CharactersProps) {
  const characters = useMemo(
    () => (typeof children === 'string' ? children.split('') : []),
    [children]
  );

  return (
    <span
      aria-label={children}
      className={clsx(className, 'whitespace-nowrap')}
      role="text"
      {...props}
    >
      {characters.map((character, index) => (
        <span
          aria-hidden
          data-character
          key={`${character}-${index}`}
          style={{ '--character': index } as CSSProperties}
        >
          {character}
        </span>
      ))}
    </span>
  );
}
