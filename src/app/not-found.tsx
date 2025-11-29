'use client';

import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default function NotFound() {
    return (
        <>
            <h2 className="text-[#111618] tracking-light text-[1.75] font-bold leading-tight px-4 text-center pb-3 pt-15">
                הדף לא נמצא
            </h2>

            <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                מצטערים — הדף שחיפשת אינו זמין או הועבר. ניתן לחזור אחורה או לחזור לעמוד הבית.
            </p>

            <div className="flex px-4 py-3 justify-center gap-3">
                <BackButton
                    className="flex min-w-[7.5rem] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                />

                <Link
                    href="/"
                    className="flex min-w-[7.5rem] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">חזרה לעמוד הבית</span>
                </Link>
            </div>
        </>
    );
}