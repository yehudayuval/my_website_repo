import { Suspense } from 'react';
import { PiShieldCheckFill, PiUsersThreeFill, PiClockFill } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
import home2 from '../../public/home-2.png';
import home3 from '../../public/home-3.png';

import { FadeUp } from '@/components/effects/FadeUp';
import ReviewsSection from '@/components/home/ReviewsSection';
import ReviewsSkeleton from '@/components/ReviewsSkeleton';
import BrochureSection from '@/components/home/BrochureSection';

const {
    NEXT_PUBLIC_HOME_HERO_HEADLINE = '',
    NEXT_PUBLIC_HOME_SOLUTIONS_HEADING = '',
    NEXT_PUBLIC_HOME_SOLUTIONS_CARD1_TITLE = '',
    NEXT_PUBLIC_HOME_SOLUTIONS_CARD1_DESCRIPTION = '',
    NEXT_PUBLIC_HOME_SOLUTIONS_CARD2_TITLE = '',
    NEXT_PUBLIC_HOME_SOLUTIONS_CARD2_DESCRIPTION = '',
    NEXT_PUBLIC_HOME_VALUES_HEADING = '',
    NEXT_PUBLIC_HOME_VALUES_ITEM1_LABEL = '',
    NEXT_PUBLIC_HOME_VALUES_ITEM2_LABEL = '',
    NEXT_PUBLIC_HOME_VALUES_ITEM3_LABEL = '',
    NEXT_PUBLIC_HOME_REVIEWS_HEADING = '',
    NEXT_PUBLIC_HOME_CTA_HEADING = '',
    NEXT_PUBLIC_HOME_CTA_TEXT = '',
} = process.env;

const solutionCards = [
    {
        image: home2,
        alt: NEXT_PUBLIC_HOME_SOLUTIONS_CARD1_TITLE,
        title: NEXT_PUBLIC_HOME_SOLUTIONS_CARD1_TITLE,
        description: NEXT_PUBLIC_HOME_SOLUTIONS_CARD1_DESCRIPTION,
    },
    {
        image: home3,
        alt: NEXT_PUBLIC_HOME_SOLUTIONS_CARD2_TITLE,
        title: NEXT_PUBLIC_HOME_SOLUTIONS_CARD2_TITLE,
        description: NEXT_PUBLIC_HOME_SOLUTIONS_CARD2_DESCRIPTION,
    },
];

const valueHighlights = [
    { icon: PiShieldCheckFill, label: NEXT_PUBLIC_HOME_VALUES_ITEM1_LABEL },
    { icon: PiUsersThreeFill, label: NEXT_PUBLIC_HOME_VALUES_ITEM2_LABEL },
    { icon: PiClockFill, label: NEXT_PUBLIC_HOME_VALUES_ITEM3_LABEL },
];

export default function HomePage() {
    return (
        <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-7 md:py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[60rem]">
                <div>
                    <div className="sm:p-4">
                        <div className="relative flex min-h-[26.25rem] sm:min-h-[30rem] flex-col gap-6 sm:gap-8 rounded-lg items-center justify-center p-4 overflow-hidden">
                            <Image
                                src="/home-1.png"
                                alt={NEXT_PUBLIC_HOME_HERO_HEADLINE}
                                fill
                                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]" />
                            <FadeUp classes="relative z-10 flex flex-col gap-3 justify-center items-center">
                                <h1 className="relative z-10 text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-center">
                                    {NEXT_PUBLIC_HOME_HERO_HEADLINE}
                                </h1>
                                <Link
                                    href="/contact-us"
                                    className="relative z-10 flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
                                >
                                    <span className="truncate">צרו קשר לייעוץ חינם</span>
                                </Link>
                            </FadeUp>
                        </div>
                    </div>
                </div>

                <h2 className="text-[#111618] text-xl sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    {NEXT_PUBLIC_HOME_SOLUTIONS_HEADING}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                    {solutionCards.map(({ image, alt, title, description }) => (
                        <div className="flex flex-col gap-3 pb-3" key={title}>
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    placeholder="blur"
                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <FadeUp>
                                <p className="text-[#111618] text-base font-medium leading-normal">{title}</p>
                                <p className="text-[#617c89] text-sm font-normal leading-normal">{description}</p>
                            </FadeUp>
                        </div>
                    ))}
                </div>

                <h2 className="text-[#111618] text-xl sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                    {NEXT_PUBLIC_HOME_VALUES_HEADING}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
                    {valueHighlights.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f6ff] text-[#13a4ec]">
                                <Icon size={24} />
                            </div>
                            <h2 className="text-[#111618] text-base font-bold leading-tight">{label}</h2>
                        </div>
                    ))}
                </div>

                <h2
                    id="reviews"
                    className="text-[#111618] text-xl sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                    {NEXT_PUBLIC_HOME_REVIEWS_HEADING}
                </h2>
                <Suspense fallback={<ReviewsSkeleton />}>
                    <ReviewsSection />
                </Suspense>

                <BrochureSection />

                <FadeUp>
                    <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
                        <div className="flex flex-col gap-3 text-center">
                            <h1 className="text-[#111618] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-[45rem] mx-auto">
                                {NEXT_PUBLIC_HOME_CTA_HEADING}
                            </h1>
                            <p className="text-[#617c89] text-base sm:text-lg leading-relaxed max-w-[40rem] mx-auto">
                                {NEXT_PUBLIC_HOME_CTA_TEXT}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact-us"
                                className="flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto"
                            >
                                <span className="truncate">צרו קשר לייעוץ חינם</span>
                            </Link>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </div>
    );
}