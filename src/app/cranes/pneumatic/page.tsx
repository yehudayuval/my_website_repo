import Link from 'next/link';
import type { Metadata } from 'next';
import {
    PiPhone,
    PiRuler,
    PiWrench,
    PiGraduationCap,
    PiShieldCheck,
    PiShield,
    PiSpeakerHigh,
    PiHouse,
} from 'react-icons/pi';

import { VideoPlayer } from '@/components/VideoPlayer';
import { ResponsiveGallery } from '@/components/ResponsiveGallery';
import { SpecificationsSection } from '@/components/SpecificationsSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { PurchaseStepsSection } from '@/components/PurchaseStepsSection';
import { FaqsSection } from '@/components/FaqsSection';
import { GalleryImage } from '@/types';
import { FadeUp } from '@/components/effects/FadeUp';
import { MediaPlayer } from '@vidstack/react';

const {
    NEXT_PUBLIC_PNEUMATIC_META_TITLE = 'מעלית פנאומטית',
    NEXT_PUBLIC_PNEUMATIC_PAGE_HEADING = 'מעלית פנאומטית',
    NEXT_PUBLIC_PNEUMATIC_PAGE_DESCRIPTION = '',
    NEXT_PUBLIC_PNEUMATIC_GALLERY_PRIMARY_ALT = 'מעלית פנאומטית - מבט קדמי',
    NEXT_PUBLIC_PNEUMATIC_GALLERY_SIDE_ALT = 'מעלית פנאומטית - מבט צד',
    NEXT_PUBLIC_PNEUMATIC_GALLERY_CABIN_ALT = 'מעלית פנאומטית - תא פנימי',
    NEXT_PUBLIC_PNEUMATIC_SPECIFICATIONS_TITLE = 'מפרט טכני',
    NEXT_PUBLIC_PNEUMATIC_SPECIFICATIONS = '',
    NEXT_PUBLIC_PNEUMATIC_BENEFITS_TITLE = 'יתרונות עיקריים',
    NEXT_PUBLIC_PNEUMATIC_BENEFIT_TITLES = '',
    NEXT_PUBLIC_PNEUMATIC_BENEFIT_DESCRIPTIONS = '',
    NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEPS_TITLE = 'תהליך רכישה וייעוץ',
    NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEP_TITLES = '',
    NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEP_DESCRIPTIONS = '',
    NEXT_PUBLIC_PNEUMATIC_FAQS_TITLE = 'שאלות נפוצות',
    NEXT_PUBLIC_PNEUMATIC_FAQS_QUESTIONS = '',
    NEXT_PUBLIC_PNEUMATIC_FAQS_ANSWERS = '',
} = process.env;

const splitList = (value?: string) =>
    (value ?? '')
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean);

const splitPairs = (value?: string) =>
    splitList(value).map<[string, string]>((pair) => {
        const [label, val] = pair.split('::');
        return [(label ?? '').trim(), (val ?? '').trim()];
    }).filter(([label, val]) => !!label && !!val);

const defaultSpecificationEntries: [string, string][] = [
    ['קיבולת הרמה', '0.5-10 טון'],
    ['גובה הרמה', 'עד 20 מטר'],
    ['רוחב פעולה', '360 מעלות'],
    ['לחץ אוויר', '6-8 בר'],
    ['מהירות הרמה', '1-12 מ/דקה'],
    ['מהירות סיבוב', "0.5-3 סל\"ד"],
    ['צריכת אוויר', '50-200 ל/דקה'],
    ['תקן בטיחות', 'ISO 9001:2015'],
];

const parsedSpecificationEntries = splitPairs(NEXT_PUBLIC_PNEUMATIC_SPECIFICATIONS);
const specificationEntries = parsedSpecificationEntries.length ? parsedSpecificationEntries : defaultSpecificationEntries;

const benefitTitles = splitList(NEXT_PUBLIC_PNEUMATIC_BENEFIT_TITLES);
const benefitDescriptions = splitList(NEXT_PUBLIC_PNEUMATIC_BENEFIT_DESCRIPTIONS);
const benefitIconConfigs = [PiHouse, PiSpeakerHigh, PiShieldCheck, PiShield];

const benefits = benefitIconConfigs
    .map((Icon, idx) => ({
        icon: Icon,
        title: benefitTitles[idx] ?? defaultSpecificationEntries[idx]?.[0] ?? '',
        description:
            benefitDescriptions[idx] ??
            defaultSpecificationEntries[idx]?.[1] ??
            '',
    }))
    .filter((benefit) => benefit.title && benefit.description);

const purchaseStepTitles = splitList(NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEP_TITLES);
const purchaseStepDescriptions = splitList(NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEP_DESCRIPTIONS);

const baseSteps = [
    {
        icon: PiPhone,
        showTopLine: false,
        showBottomLine: true,
        bottomLineGrow: true,
        wrapperClassName: 'pt-3',
    },
    {
        icon: PiRuler,
        showTopLine: true,
        showBottomLine: true,
        bottomLineGrow: true,
    },
    {
        icon: PiWrench,
        showTopLine: true,
        showBottomLine: true,
        bottomLineGrow: true,
    },
    {
        icon: PiGraduationCap,
        showTopLine: true,
        showBottomLine: false,
        bottomLineGrow: false,
        wrapperClassName: 'pb-3',
    },
];

const purchaseSteps = baseSteps.map((step, idx) => ({
    ...step,
    title: purchaseStepTitles[idx] ?? '',
    description: purchaseStepDescriptions[idx] ?? '',
})).filter((step) => step.title && step.description);

const faqQuestions = splitList(NEXT_PUBLIC_PNEUMATIC_FAQS_QUESTIONS);
const faqAnswers = splitList(NEXT_PUBLIC_PNEUMATIC_FAQS_ANSWERS);

const faqs = faqQuestions
    .map((question, idx) => ({
        question,
        answer: faqAnswers[idx] ?? '',
    }))
    .filter((item) => item.question && item.answer);

const galleryImages: GalleryImage[] = [
    {
        name: 'primary',
        classes: 'relative h-56 sm:h-auto sm:col-span-2 sm:row-span-2',
        src: '/pneumatic-1.png',
        alt: NEXT_PUBLIC_PNEUMATIC_GALLERY_PRIMARY_ALT,
    },
    {
        name: 'side',
        classes: 'relative h-40 sm:h-auto sm:col-span-1',
        src: '/pneumatic-2.png',
        alt: NEXT_PUBLIC_PNEUMATIC_GALLERY_SIDE_ALT,
    },
    {
        name: 'cabin',
        classes: 'relative h-40 sm:h-auto sm:col-span-1',
        src: '/pneumatic-3.png',
        alt: NEXT_PUBLIC_PNEUMATIC_GALLERY_CABIN_ALT,
    },
];

export const metadata: Metadata = {
    title: NEXT_PUBLIC_PNEUMATIC_META_TITLE,
};

export default function PneumaticCranePage() {
    return (
        <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
            <div className="flex flex-col w-full max-w-[960px]">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">
                            {NEXT_PUBLIC_PNEUMATIC_PAGE_HEADING}
                        </p>
                        <p className="text-[#617c89] text-sm font-normal leading-normal">
                            {NEXT_PUBLIC_PNEUMATIC_PAGE_DESCRIPTION}
                        </p>
                    </div>
                </div>

                <section className="flex w-full grow bg-white p-4" about="gallery-section">
                    <ResponsiveGallery images={galleryImages} />
                </section>

                <section className="p-4" about="video-section">
                    <MediaPlayer>
                        <VideoPlayer
                            src="/pneumatic.mov"
                            classes="relative w-full overflow-hidden rounded-lg aspect-[16/9]"
                            poster="/poster-pneumatic.png"
                        />
                    </MediaPlayer>
                </section>

                <SpecificationsSection title={NEXT_PUBLIC_PNEUMATIC_SPECIFICATIONS_TITLE} entries={specificationEntries} />
                <BenefitsSection title={NEXT_PUBLIC_PNEUMATIC_BENEFITS_TITLE} benefits={benefits} />
                <PurchaseStepsSection title={NEXT_PUBLIC_PNEUMATIC_PURCHASE_STEPS_TITLE} steps={purchaseSteps} />
                <FadeUp classes="flex px-4 py-3 justify-center mt-5">
                    <Link
                        href="/contact-us"
                        className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
                    </Link>
                </FadeUp>
                <FaqsSection title={NEXT_PUBLIC_PNEUMATIC_FAQS_TITLE} faqs={faqs} />
            </div>
        </div>
    );
}

