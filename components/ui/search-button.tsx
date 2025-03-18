'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SearchButton({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleSearch = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true
    });
    document.dispatchEvent(event);
  };

  return (
    <button
      onClick={toggleSearch}
      data-search
      className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
      aria-label="Search documentation"
    >
      <Search className="h-5 w-5" />
      <span className="sr-only">Search</span>
    </button>
  );
}

declare global {
  interface Window {
    __oramaSearchBox?: {
      setOpen: (open: boolean) => void;
    };
  }
}
