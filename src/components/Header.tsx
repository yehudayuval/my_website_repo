'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/cranes/ceiling', label: 'מעלית אליט' },
  { href: '/cranes/pneumatic', label: 'מעלית פנאומטית' },
  { href: '/#reviews', label: 'המלצות לקוחות' },
  { href: '/contact-us', label: 'צרו קשר' },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  const isAdmin = pathname?.startsWith('/admin/dashboard');
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-6 lg:px-10 py-3 relative z-50 bg-white">
        <Link href="/" className="flex items-center gap-4 text-[#111618]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#111618] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">פתרונות מעליות</h2>
        </Link>

        {
          isAdmin ?
            (
              <div className="flex items-center gap-3 pr-4">
                <button onClick={handleLogout} className="text-sm text-[#617c89] hover:underline">Logout</button>
              </div>
            )
            :
            <>

              {/* Desktop nav */}
              <div className="flex flex-1 justify-end gap-3 lg:me-10 sm:gap-8">
                <nav className="hidden md:flex items-center gap-6 lg:gap-9">
                  {navLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="text-[#111618] text-sm font-medium leading-normal">
                      {l.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile toggle */}
                <button
                  type="button"
                  aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#111618] hover:bg-[#f0f3f4] focus:outline-none"
                  onClick={() => setIsMenuOpen((v) => !v)}
                >
                  {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
                    </svg>
                  )}
                </button>
              </div>
            </>
        }
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-0 z-20 transition-transform duration-200
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        pointer-events-none`}
      >
        <nav className="pointer-events-auto flex flex-col mt-17 gap-4 px-4 py-4 max-h-80 overflow-auto bg-white border-b border-solid border-b-[#f0f3f4] shadow-md">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[#111618] text-sm font-medium leading-normal ${i < navLinks.length - 1 ? 'border-b border-solid border-b-[#f0f3f4] pb-3' : ''}`}
              onClick={closeMenu}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;