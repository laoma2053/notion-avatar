import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  
  return response
} 