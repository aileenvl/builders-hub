'use client';
import { OramaSearchBox } from "@orama/react-components";
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import { useEffect, useRef, useState } from 'react';

export default function SearchDialog(props: SharedProps) {
  const searchBoxRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (searchBoxRef.current) {
      (window as any).__oramaSearchBox = searchBoxRef.current;
    }

    const handleSearchButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('button[data-search-full]') || target.closest('button[data-search]')) {
        event.preventDefault();
        toggleSearch();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        toggleSearch();
      }
    };

    const toggleSearch = () => {
      if (searchBoxRef.current) {
        if (typeof (searchBoxRef.current as any).setOpen === 'function') {
          (searchBoxRef.current as any).setOpen(true);
          return;
        }
      }

      const searchBoxElement = document.querySelector('orama-search-box') || document.querySelector('[data-orama-search]');
      
      if (searchBoxElement) {
        if ('open' in searchBoxElement) {
          (searchBoxElement as any).open = !(searchBoxElement as any).open;
        }
      } else {
        console.warn('Search box element not found in DOM');
      }
    };

    document.addEventListener('click', handleSearchButtonClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleSearchButtonClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const apiKey = "4YgR30FufOTlSib9tydfNrcwpSHnnLkf";

  if (!mounted) {
    return null;
  }

  return (
    <OramaSearchBox
      ref={searchBoxRef}
      suggestions={[
        "What is Avalanche?",
        "How to add C-Chain to Wallet?",
        "How to use the Avalanche CLI?"
      ]}
      colorScheme="dark"
      index={{
        endpoint: "https://cloud.orama.run/v1/indexes/documentation-yc5b3a",
        api_key: apiKey,
      }}
      resultMap={{
        title: "title",
        description: "content",
        path: "url"
        
      }}
    />
  );
}