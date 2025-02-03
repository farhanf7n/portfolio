import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 w-full max-w-xl text-sm">
      <div className="flex items-center justify-center">
        <span className="text-12 md:text-14 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 72 72"
            className="-mr-3 size-16"
          >
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M27.25 27.25h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5zm-6 3h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5z"
            />
            <path
              fill="#FF8D69"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M24.25 36.25h2.5v2.5h-2.5zm3 3h2.5v2.5h-2.5z"
            />
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M30.25 39.25h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5z"
            />
            <path
              fill="#E64C19"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M39.25 39.25h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5z"
            />
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M30.25 42.25h2.5v2.5h-2.5z"
            />
            <path
              fill="#E64C19"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M33.25 42.25h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5zm-6 3h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5z"
            />
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M27.25 30.25h2.5v2.5h-2.5z"
            />
            <path
              fill="#FF8D69"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M27.25 33.25h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm3-6h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm3-6h2.5v2.5h-2.5zm3 0h2.5v2.5h-2.5zm-3 3h2.5v2.5h-2.5z"
            />
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M33.25 36.25h2.5v2.5h-2.5zm3-3h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5z"
            />
            <path
              fill="#FF8D69"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M39.25 27.25h2.5v2.5h-2.5z"
            />
            <path
              fill="#E26136"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M39.25 30.25h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm3-9h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5z"
            />
            <path
              fill="#E64C19"
              stroke="#090A0C"
              strokeWidth=".5"
              d="M42.25 33.25h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm3-6h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5zm0 3h2.5v2.5h-2.5z"
            />
            <mask
              id="heart_svg__c"
              width="24"
              height="21"
              x="24"
              y="27"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path
                fill="#E26136"
                d="M27 27h3v3h-3zm3 0h3v3h-3zm-6 3h3v3h-3zm0 3h3v3h-3z"
              />
              <path fill="#FF8964" d="M24 36h3v3h-3zm3 3h3v3h-3z" />
              <path fill="#E26136" d="M30 39h3v3h-3zm3 0h3v3h-3zm3 0h3v3h-3z" />
              <path fill="#E64C19" d="M39 39h3v3h-3zm3 0h3v3h-3z" />
              <path fill="#E26136" d="M30 42h3v3h-3z" />
              <path
                fill="#E64C19"
                d="M33 42h3v3h-3zm3 0h3v3h-3zm3 0h3v3h-3zm-6 3h3v3h-3zm3 0h3v3h-3z"
              />
              <path fill="#E26136" d="M27 30h3v3h-3z" />
              <path
                fill="#FF8964"
                d="M27 33h3v3h-3zm0 3h3v3h-3zm3-6h3v3h-3zm0 3h3v3h-3zm0 3h3v3h-3zm3-6h3v3h-3zm3 0h3v3h-3zm-3 3h3v3h-3z"
              />
              <path fill="#E26136" d="M33 36h3v3h-3zm3-3h3v3h-3zm0 3h3v3h-3z" />
              <path fill="#FF8964" d="M39 27h3v3h-3z" />
              <path
                fill="#E26136"
                d="M39 30h3v3h-3zm0 3h3v3h-3zm0 3h3v3h-3zm3-9h3v3h-3zm0 3h3v3h-3z"
              />
              <path
                fill="#E64C19"
                d="M42 33h3v3h-3zm0 3h3v3h-3zm3-6h3v3h-3zm0 3h3v3h-3zm0 3h3v3h-3z"
              />
            </mask>
            <g
              filter="url(#heart_svg__a)"
              mask="url(#heart_svg__c)"
              style={{ mixBlendMode: 'plus-lighter' }}
            >
              <circle cx="49" cy="42" r="14" fill="#FFC061" />
            </g>
            <g
              filter="url(#heart_svg__d)"
              opacity=".3"
              style={{ mixBlendMode: 'plus-lighter' }}
            >
              <circle cx="36" cy="36" r="14" fill="#E26136" />
            </g>
            <defs>
              <filter
                id="heart_svg__a"
                width="72"
                height="72"
                x="13"
                y="6"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood strokeWidth="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_3162_4515"
                  stdDeviation="11"
                />
              </filter>
              <filter
                id="heart_svg__d"
                width="72"
                height="72"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood strokeWidth="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_3162_4515"
                  stdDeviation="11"
                />
              </filter>
            </defs>
          </svg>
          Designed and built by&nbsp;
          <Link
            className="underline"
            href="https://www.linkedin.com/in/farhanf7n/"
            target="_blank"
          >
            Farhan Ahmed
          </Link>
        </span>
      </div>
    </footer>
  );
};
