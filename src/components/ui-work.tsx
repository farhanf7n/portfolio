import Markdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from './icons';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface UiWorkProps {
  title: string;
  testimonial: string;
  worktype?: string;
  description: string;
  features: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string | null;
  video?: string;
  links?: {
    github?: string;
    live?: string;
    figma?: string;
  };
}

export const UiWork = ({
  title,
  worktype,
  description,
  features,
  dates,
  tags,
  link,
  image,
  video,
  links,
}: UiWorkProps) => {
  return (
    <Card
      className={
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
      }
    >
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      ) : (
        <Image
          src="/assets/projects/404.jpg"
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <Markdown className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-xs">
            {description}
          </Markdown>
          {features && (
            <>
              <h4 className="mb-1 mt-2 text-sm font-semibold">
                Cool features:
              </h4>
              <Markdown className="prose text-muted-foreground dark:prose-invert max-w-full text-pretty font-sans text-xs">
                {`- ${features
                  .split('.')
                  .filter(Boolean)
                  .map((feature) => feature.trim())
                  .join('\n- ')}`}
              </Markdown>
              <span className="text-muted-foreground text-pretty font-sans text-xs">
                and many more...
              </span>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && (
          <div className="mt-4 flex items-center gap-3">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="hover:text-[#e8ff85]"
              >
                <Icons.github className="size-5" />
              </Link>
            )}
            {links.figma && (
              <Link
                href={links.figma}
                target="_blank"
                className="hover:text-[#e8ff85]"
              >
                <Icons.figma className="size-5" />
              </Link>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {worktype && (
          <Badge className="ml-1 flex gap-2 px-2 py-1 text-[10px]">
            <Icons.setting className="size-4" />
            {worktype}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};
