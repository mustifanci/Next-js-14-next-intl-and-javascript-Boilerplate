"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale(); // Get current locale
  const router = useRouter(); // Get router instance

  // Function to change language
  const changeLanguage = (lang) => {
    const currentPath = window.location.pathname; // Use window.location to get current path
    const newPath = currentPath.replace(`/${locale}`, `/${lang}`); // Replace the locale in the path
    router.push(newPath); // Navigate to the new language route
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <span>Change Language: </span>
      <button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
        English
      </button>
      <button onClick={() => changeLanguage('tr')} disabled={locale === 'tr'}>
        Türkçe
      </button>
    </div>
  );
}
