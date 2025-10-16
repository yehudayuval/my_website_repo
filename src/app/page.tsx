'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { Review } from '@/types';
import { fakeReviews } from '@/data/fakeReviews';

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>(fakeReviews);
  const [loading, setLoading] = useState(true);

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
  // TODO: replace all texts and images
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div>
          <div className="sm:p-4">
            <div
              className="flex min-h-[420px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 rounded-lg items-center justify-center p-4"
              style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzCoyNW5jCa2JplnNbqCJCWhhSxK6Pmmkoo-CTAb5j-xn7uXCCWk9kjKYMM-Y_uBNht6VG0qKmsVzpOTq8Ee5gxQeSokmBIozrX8A5-DCdx9ejwCbq5-MYX7K-NLSBq4l6QPWLnZuQyP5fAuzSxfMGfcVd7eTZkSpffprCyRGshVtZqGALv5oDJIvWLsAzHzbihyhokN7cTGbQBtkGWqMLGt5erWI4BiA1FrKMNss8n__WG0WRxdhgxD0aBQQgWk64PrCcdwAH4q9f")' }}
            >
              <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-center">
                בטיחות ואיכות חיים, בבית שלך
              </h1>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">צרו קשר לייעוץ חינם</span>
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          פתרונות המעלית שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs7OcUWOmuLtVEL-xYHPe1F3A2RaW3zqwQGVXSnvP0kQKYVu4SkOTxKPRz7XmhY3mmmfH4OC-1K61fDZ0nV-ZHTBatp9UTUHnVBXeY-pXN8R5orpQik9pm9fIM28Sg5sW9uDAv1fvEHeT2au3blyKInuZTw2cQuRGAv_8pfFcpP7iZD6hNw9Rd9Cvxoibd2khPTfMmIufeiuu4vZlurvhGoUKY8y_eJ6s2I_raje9OZlNGD9XF7a9Nr1KLcMElrMR7SgsUJ-vqRXrA")' }}
            ></div>
            <div>
              <p className="text-[#111618] text-base font-medium leading-normal">מעלית אליט</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">נסיעה חלקה ושקטה עם אפשרויות התאמה אישית לעיצוב הבית שלכם.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbhxcuc_09OvifxZsdUymlHhiTm_mjZyjNt453UOrkoEefZOW10gOUQLaaH0VL120q_AQ8Mer4JykBtddDjSOmKg-wbuRTiCDNZQW0tz0z7PRFw-Zu-Uw9ReaXnJ_bvnmlfRU03xyhL5Ow1La4kym9FmG1xlEeZ5QS3hc-VRAQA1vxj_QuO59a05PUlPF3q3UKoVMomHn2Hkh5hyRmpYFn8OX1dmKoDQWYunvp-5ed1onJ0pSOiPcT3zmeu4UwRaZOKXjjqA-vvg4Y")' }}
            ></div>
            <div>
              <p className="text-[#111618] text-base font-medium leading-normal">מעלית פנאומטית</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">פתרון קומפקטי וחסכוני במקום המבוסס על לחץ אוויר — אידיאלי לחללים קטנים.</p>
            </div>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          הערכים שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="text-[#111618]">
              {/* Shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
              </svg>
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">אמינות</h2>
          </div>
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="text-[#111618]">
              {/* Users icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">שירות אישי</h2>
          </div>
          <div className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center">
            <div className="text-[#111618]">
              {/* Clock icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
            </div>
            <h2 className="text-[#111618] text-base font-bold leading-tight">התקנה מהירה</h2>
          </div>
        </div>

        <h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          המלצות לקוחות
        </h2>
        <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4" id='reviews'>
          <div className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgTDoqAuxOnxR2lOoCXmjTWeDWQbOMMclChMz5t8wiNIYLDSKKJ-GeXQsxfLriV09eboFcxrGQDx-M3sWlEAxJrIn5R0Vx5Bzya3AJ8jz1Q_IYnxeNqweWOyp2wuG3stui5kuuwukCyNqLzMDUBE5z6p-y9RkXDTENb9s80mMChuVPw8wTUMTXQjL-4mYnP4s7A6jkycP9Ba5sEeEA2ujzdHRbd8Gm_vdIR24ngepEh9XjhVyizb-GhqcxWDBh4E43-Ey3mop8-ki9")' }}
              ></div>
              <div className="flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal">סופיה קרטר</p>
                <p className="text-[#617c89] text-sm font-normal leading-normal">לפני חודשיים</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-[#111618]" data-icon="Star" data-size="20px" data-weight="fill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#111618] text-base font-normal leading-normal">
              המעלית שדרגה לנו את איכות החיים. ההתקנה הייתה מהירה והצוות מקצועי וסבלני. מומלץ בחום!
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkKvn0pJDL-TrsaJC43Y3hlFCGrfisHmR0gb08ogNnNphFLzYocM7zrM-9EIWruCmknfgqM5a6vpxbk5-C0Y99Rra4OGRUpaD1qGmaurRntMwmziK9A0UZsv4XHjK9-zc380K2Frggrez7njdzK7h2qzYDVyf-j2Fvvd-jCJfkSHqwnQ9nBSeJsr7ud6dUxPBhYdkvd50UZHdmjf2XcxOHl5Z6PJFvcyheA2-4tsGPizrbXkzllEL33_7hscjFGyEgo-pGUwGaEZZR")' }}
              ></div>
              <div className="flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal">אית'ן בנט</p>
                <p className="text-[#617c89] text-sm font-normal leading-normal">לפני ארבעה חודשים</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-[#111618]" data-icon="Star" data-size="20px" data-weight="fill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#111618] text-base font-normal leading-normal">
              פתרון מצוין לחלל קטן. שקט, חסכוני במקום ונראה נהדר. ממליץ מאוד!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111618] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-[720px] mx-auto">
                מוכנים לשדרג את הבית שלכם?
              </h1>
            </div>
            <div className="flex justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto"
              >
                <span className="truncate">צרו קשר לייעוץ חינם</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}