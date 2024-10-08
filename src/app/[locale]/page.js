// src/app/[locale]/page.js
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/app/components/LanguageSwitcher'; // Import the LanguageSwitcher component
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>

      {/* Language Switcher Component */}
      <LanguageSwitcher />
    </div>
  );
}
