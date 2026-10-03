import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

/**
 * Consistent section heading: small gold eyebrow label, serif title,
 * optional description. Used across pages for visual rhythm.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignCls}`}>
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 justify-center">
          <span
            aria-hidden="true"
            className={`h-px w-8 ${dark ? 'bg-amber-400/70' : 'bg-amber-600/70'}`}
          />
          <span
            className={`text-xs font-semibold tracking-[0.22em] uppercase ${
              dark ? 'text-amber-300' : 'text-amber-700'
            }`}
          >
            {eyebrow}
          </span>
          <span
            aria-hidden="true"
            className={`h-px w-8 ${dark ? 'bg-amber-400/70' : 'bg-amber-600/70'}`}
          />
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
