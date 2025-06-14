import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getLatestSongs } from './get-latest-songs';

/**
 * A Route Handler fetching the latest songs I listened to from Last.fm.
 *
 * @param request - The incoming request.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = searchParams.has('limit')
    ? Number(searchParams.get('limit'))
    : 10; // Default limit value

  const songs = await getLatestSongs(limit);

  return songs
    ? NextResponse.json(songs)
    : new Response(undefined, { status: 500 });
}
