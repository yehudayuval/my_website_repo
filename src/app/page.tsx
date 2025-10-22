'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PiShieldCheckFill, PiUsersThreeFill, PiClockFill, PiStarFill } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';

import { fakeReviews } from '@/data/fakeReviews';
import { Review } from '@/types';


const formatReviewDate = (value?: string | null) => {
  if (!value) return '';
  // Already a readable label (e.g. “לפני חודש”)?
  if (value.length && /\d/.test(value) === false) return value;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('he-IL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};




export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>(fakeReviews);
  const [loading, setLoading] = useState(true);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div>
          <div className="sm:p-4">
            <div className="relative flex min-h-[420px] sm:min-h-[480px] flex-col gap-6 sm:gap-8 rounded-lg items-center justify-center p-4 overflow-hidden">
              <Image
                src="/home-1.png"
                alt="מעלית ביתית"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]" />
              <motion.div
                className="relative z-10 flex flex-col gap-3 justify-center items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="relative z-10 text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-center">
                  בטיחות ואיכות חיים בבית שלך!
                </h1>
                <Link href={"/contact-us"} className="relative z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">צרו קשר לייעוץ חינם</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          פתרונות המעלית שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/home-2.png"
                alt="מעלית אליט"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-[#111618] text-base font-medium leading-normal">מעלית אליט</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">נסיעה חלקה ושקטה עם אפשרויות התאמה אישית לעיצוב הבית שלכם.</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/home-3.png"
                alt="מעלית פנאומטית"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-[#111618] text-base font-medium leading-normal">מעלית פנאומטית</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">פתרון קומפקטי וחסכוני במקום המבוסס על לחץ אוויר — אידיאלי לחללים קטנים.</p>
            </motion.div>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          הערכים שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f6ff] text-[#13a4ec]">
              <PiShieldCheckFill size={24} />
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">אמינות</h2>
          </div>
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f6ff] text-[#13a4ec]">
              <PiUsersThreeFill size={24} />
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">שירות אישי</h2>
          </div>
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f6ff] text-[#13a4ec]">
              <PiClockFill size={24} />
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">התקנה מהירה</h2>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          המלצות לקוחות
        </h2>
        <div className="relative px-4">
          {/* TODO: decide with designer about gradients */}
          {!loading && (
            <>
              <div className="pointer-events-none z-10 absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-sm" />
              <div className="pointer-events-none z-10 absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-sm" />
            </>
          )}
          <div className="overflow-hidden rounded-xl bg-white px-4 py-6">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2 animate-pulse" aria-live="polite">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex flex-col gap-4 rounded-lg border border-[#dbe2e6] bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-full bg-[#eef2f4]" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-24 rounded bg-[#eef2f4]" />
                        <div className="h-2.5 w-16 rounded bg-[#eef2f4]" />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((__, starIdx) => (
                        <div key={starIdx} className="h-3 w-3 rounded bg-[#eef2f4]" />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-full rounded bg-[#eef2f4]" />
                      <div className="h-2.5 w-5/6 rounded bg-[#eef2f4]" />
                      <div className="h-2.5 w-2/3 rounded bg-[#eef2f4]" />
                    </div>
                  </div>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <p className="text-[#617c89] text-sm text-center">אין המלצות להצגה כעת.</p>
            ) : (
              <div
                className={`flex gap-6 reviews-marquee${isMarqueeHovered ? ' paused' : ''}`}
                onMouseEnter={() => setIsMarqueeHovered(true)}
                onMouseLeave={() => setIsMarqueeHovered(false)}
                onTouchStart={() => setIsMarqueeHovered(true)}
                onTouchEnd={() => setIsMarqueeHovered(false)}
              >
                {[...reviews, ...reviews].map((review, idx) => (
                  <article
                    key={`${review.id ?? review.name}-${idx}`}
                    className="flex min-w-[280px] max-w-[320px] shrink-0 flex-col gap-4 rounded-lg border border-[#dbe2e6] bg-white p-5 shadow-sm"
                  >
                    <header className="flex items-center gap-3">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                        style={{
                          backgroundImage: `url("${review.image_filename
                            ? `/${review.image_filename}`
                            : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgTDoqAuxOnxR2lOoCXmjTWeDWQbOMMclChMz5t8wiNIYLDSKKJ-GeXQsxfLriV09eboFcxrGQDx-M3sWlEAxJrIn5R0Vx5Bzya3AJ8jz1Q_IYnxeNqweWOyp2wuG3stui5kuuwukCyNqLzMDUBE5z6p-y9RkXDTENb9s80mMChuVPw8wTUMTXQjL-4mYnP4s7A6jkycP9Ba5sEeEA2ujzdHRbd8Gm_vdIR24ngepEh9XjhVyizb-GhqcxWDBh4E43-Ey3mop8-ki9'
                            }")`,
                        }}
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <p className="text-[#111618] text-base font-semibold leading-tight">
                          {review.name ?? 'לקוח מרוצה'}
                        </p>
                        <p className="text-[#617c89] text-xs font-normal leading-tight">
                          {formatReviewDate(review.created_at)}
                        </p>
                      </div>
                    </header>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <PiStarFill
                          key={i}
                          size={18}
                          className={i < (review.rating ?? 0) ? 'text-[#facc15]' : 'text-[#dbe2e6]'}
                        />
                      ))}
                    </div>
                    <p className="text-[#111618] text-sm leading-relaxed">
                      {review.content ?? ''}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-[#111618] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-[720px] mx-auto">
                מוכנים לשדרג את הבית שלכם?
              </h1>
              <p className="text-[#617c89] text-base sm:text-lg leading-relaxed max-w-[640px] mx-auto">
              נדאג לכל תהליך ההתקנה, משלב התכנון המותאם ועד השירות השוטף — כדי שתיהנו מהנוחות והביטחון.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto"
              >
                <span className="truncate">צרו קשר לייעוץ חינם</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes reviewsMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .reviews-marquee {
          animation: reviewsMarquee 45s linear infinite;
          will-change: transform;
        }
        .reviews-marquee.paused {
          animation-play-state: paused;
        }
         @keyframes skeletonShimmer {
           0% {
             background-position: 200% 0;
           }
           100% {
             background-position: -200% 0;
           }
         }
         .animate-pulse {
           animation: skeletonShimmer 1.5s infinite linear;
         }
       `}</style>
     </div>
   );
 }