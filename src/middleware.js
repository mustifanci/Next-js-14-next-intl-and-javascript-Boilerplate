import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // Ensure this path is correct

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|tr)/:path*'], // Ensure these match your intended routes
};
