'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const SearchDialog = dynamic(() => import('@/components/search'), {
  ssr: false,
});

export function SearchRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog,
        hotKey: [
          {
            key: 'k',
            display: 'K',
          },
        ],
      }}
    >
      {children}
    </RootProvider>
  );
}
