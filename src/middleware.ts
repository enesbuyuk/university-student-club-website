import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/(tr|en)/:path*',
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};