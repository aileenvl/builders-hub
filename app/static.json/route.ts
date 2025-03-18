import { NextResponse } from 'next/server';
import { type OramaIndex } from 'fumadocs-core/search/orama-cloud';
import { academy, guide, integration } from '@/lib/source';

export const revalidate = false;

export function GET() {
  const results: OramaIndex[] = [];

  const sources = [ academy, guide, integration];

  for (const src of sources) {
    for (const page of src.getPages()) {
      results.push({
        id: page.url,
        url: page.url,
        title: page.data.title || '',
        content: page.data.description || '',
        tag: '',
        page_id: page.url,
        section: '',
        section_id: '',
      });
    }
  }

  return NextResponse.json(results);
}
