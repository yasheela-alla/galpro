// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

import type { Metadata } from 'next';

// Define a generic PageProps type for Next.js app router
export type PageProps<T extends Record<string, string> = {}> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
};
