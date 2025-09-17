// middleware.ts
import { NextResponse } from 'next/server'


export function middleware(req)
{
    const url = req.nextUrl.clone()
    const { pathname } = url

    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.match(/\.(.*)$/)
    )
    {
        return NextResponse.next()
    }

    const role = req.cookies.get('role')?.value

    if (pathname === '/')
    {
        if (role === 'superadmin')
        {
            url.pathname = '/superadmin/dashboard'
        } else if (role === 'sale-representative')
        {
            url.pathname = '/sale-representative/dashboard'
        } else
        {
            url.pathname = '/login'
        }
        return NextResponse.redirect(url)
    }

    if (pathname.startsWith('/superadmin') && role !== 'superadmin')
    {
        return NextResponse.rewrite(new URL('/403', req.url))
    }
     if (pathname.startsWith('/franchise') && role !== 'franchise')
    //  if (pathname.startsWith('/sale-representative') && role !== 'sale-representative')
    {
        return NextResponse.rewrite(new URL('/403', req.url))
    }

    return NextResponse.next()
}
