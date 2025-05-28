'use client';

import { ReactNode } from 'react';

import {
  FloatingPanelBody,
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelForm,
  FloatingPanelLabel,
  FloatingPanelRoot,
  FloatingPanelTrigger,
} from '@/components/floating-panel';

interface CompanyPanelProps {
  logo: ReactNode;
  company: string;
  title: string;
  year: string;
  description?: string;
  achievements?: string[];
  bulletIcon?: ReactNode;
  className?: string;
}

export function CompanyPanel({
  logo,
  company,
  title,
  year,
  description,
  achievements,
  bulletIcon,
  className,
}: CompanyPanelProps) {
  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger className={className} title={company}>
        <span className="flex items-center gap-2 text-xs font-normal">
          {logo}
          {company}
        </span>
      </FloatingPanelTrigger>

      <FloatingPanelContent className="w-[440px]">
        <FloatingPanelForm>
          <FloatingPanelBody>
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2">
                {logo}
                <h3 className="font-semibold">{company}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {title}
              </p>
              <p className="text-xs text-gray-500">{year}</p>
            </div>
            {description && (
              <div className="mt-4">
                <FloatingPanelLabel htmlFor="">
                  About the Role
                </FloatingPanelLabel>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {description}
                </p>
                {achievements && achievements.length > 0 && (
                  <div className="mt-4">
                    <FloatingPanelLabel htmlFor="">
                      Key Achievements
                    </FloatingPanelLabel>
                    <ul className="mt-2 space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-1 shrink-0">{bulletIcon}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </FloatingPanelBody>
          <FloatingPanelFooter>
            <FloatingPanelCloseButton />
          </FloatingPanelFooter>
        </FloatingPanelForm>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  );
}
