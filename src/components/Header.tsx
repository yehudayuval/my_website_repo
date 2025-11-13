'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReviewsExistence } from '@/lib/queries/reviews';
import { PiListBold, PiXBold } from 'react-icons/pi';
import logoImg from '../../public/logo.png';
import Image from 'next/image';

const {
  NEXT_PUBLIC_NAV_COMPANY_NAME = 'פתרונות מעליות',
  NEXT_PUBLIC_NAV_LINK_CEILING_LABEL = 'מעלית אליט',
  NEXT_PUBLIC_NAV_LINK_PNEUMATIC_LABEL = 'מעלית פנאומטית',
  NEXT_PUBLIC_NAV_LINK_REVIEWS_LABEL = 'המלצות לקוחות',
} = process.env;

const navLinks = [
  { href: '/cranes/ceiling', label: NEXT_PUBLIC_NAV_LINK_CEILING_LABEL },
  { href: '/cranes/pneumatic', label: NEXT_PUBLIC_NAV_LINK_PNEUMATIC_LABEL },
  { href: '/#reviews', label: NEXT_PUBLIC_NAV_LINK_REVIEWS_LABEL },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    data: hasReviewsData,
    refetch: refetchReviewsExistence,
  } = useQuery<boolean>({
    queryKey: ['reviews', 'exists'],
    queryFn: fetchReviewsExistence,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    !pathname.startsWith('/#reviews') && refetchReviewsExistence();
  }, [pathname, refetchReviewsExistence]);

  const hasReviews = hasReviewsData ?? null;

  const visibleNavLinks = useMemo(
    () => navLinks.filter((link) => link.href !== '/#reviews' || hasReviews !== false),
    [hasReviews],
  );

  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    setIsMenuOpen(false);
  };

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


  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.stopPropagation();

    if (href !== '/#reviews') return;

    pathname === '/' && event.preventDefault();

    document?.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  };

  return (
    <>
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50  flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-6 lg:px-10 py-3">
        <Link href="/" className="flex items-center gap-4 text-[#111618]">
          <Image src={logoImg} alt="logo" className="size-8" />
          <h2 className="text-[#111618] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
            {NEXT_PUBLIC_NAV_COMPANY_NAME}
          </h2>
        </Link>

        {
          isAdmin ?
            (
              <div className="flex items-center gap-3 pr-4">
                <button onClick={handleLogout} className="text-sm text-[#617c89] hover:underline">התנתק</button>
              </div>
            )
            :
            <>

              {/* Desktop nav */}
              <div className="flex flex-1 justify-end gap-3 lg:me-10 sm:gap-8">
                <nav className="hidden md:flex items-center gap-6 lg:gap-9">
                  {visibleNavLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-[#111618] text-sm font-medium leading-normal"
                      onClick={(event) => handleNavClick(event, l.href)}
                    >
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
                  {isMenuOpen ? <PiXBold className="h-6 w-6" /> : <PiListBold className="h-6 w-6" />}
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
          {visibleNavLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[#111618] text-sm font-medium leading-normal ${i < visibleNavLinks.length - 1 ? 'border-b border-solid border-b-[#f0f3f4] pb-3' : ''
                }`}
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