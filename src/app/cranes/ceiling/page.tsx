import Link from 'next/link';
import {
  PiPhone,
  PiRuler,
  PiWrench,
  PiGraduationCap,
  PiShieldCheck,
  PiSpeakerHigh,
} from 'react-icons/pi';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ResponsiveGallery } from '@/components/ResponsiveGallery';
import { SpecificationsSection } from '@/components/SpecificationsSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { PurchaseStepsSection } from '@/components/PurchaseStepsSection';
import { FaqsSection } from '@/components/FaqsSection';
import { GalleryImage } from '@/types';
import { FadeUp } from '@/components/effects/FadeUp';
import { Metadata } from 'next';
import { MediaPlayer } from '@vidstack/react';

const {
  NEXT_PUBLIC_CEILING_META_TITLE = 'מנוף תקרה',
  NEXT_PUBLIC_CEILING_PAGE_HEADING = 'מנוף תקרה',
  NEXT_PUBLIC_CEILING_PAGE_DESCRIPTION = '',
  NEXT_PUBLIC_CEILING_GALLERY_PRIMARY_ALT = 'מנוף תקרה - מבט קדמי',
  NEXT_PUBLIC_CEILING_GALLERY_SIDE_ALT = 'מנוף תקרה - מבט צד',
  NEXT_PUBLIC_CEILING_GALLERY_CABIN_ALT = 'מנוף תקרה - מנגנון פעולה',
  NEXT_PUBLIC_CEILING_SPECIFICATIONS_TITLE = 'מפרט טכני',
  NEXT_PUBLIC_CEILING_SPECIFICATIONS = '',
  NEXT_PUBLIC_CEILING_BENEFITS_TITLE = 'יתרונות מרכזיים',
  NEXT_PUBLIC_CEILING_BENEFIT_TITLES = '',
  NEXT_PUBLIC_CEILING_BENEFIT_DESCRIPTIONS = '',
  NEXT_PUBLIC_CEILING_PURCHASE_STEPS_TITLE = 'תהליך רכישה וייעוץ',
  NEXT_PUBLIC_CEILING_PURCHASE_STEP_TITLES = '',
  NEXT_PUBLIC_CEILING_PURCHASE_STEP_DESCRIPTIONS = '',
  NEXT_PUBLIC_CEILING_FAQS_TITLE = 'שאלות נפוצות',
  NEXT_PUBLIC_CEILING_FAQS_QUESTIONS = '',
  NEXT_PUBLIC_CEILING_FAQS_ANSWERS = '',
} = process.env;

const splitList = (value?: string) =>
  (value ?? '')
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);

const splitPairs = (value?: string) =>
  splitList(value)
    .map<[string, string]>((pair) => {
      const [label, val] = pair.split('::');
      return [(label ?? '').trim(), (val ?? '').trim()];
    })
    .filter(([label, val]) => label && val);

const defaultSpecifications: [string, string][] = [
  ['קיבולת הרמה', '1-50 טון'],
  ['גובה הרמה', 'עד 30 מטר'],
  ['רוחב המנוף', '5-35 מטר'],
  ['מהירות הרמה', '0.8-8 מ/דקה'],
  ['מהירות נסיעה', '2-20 מ/דקה'],
  ['מקור חשמל', '380V/50Hz'],
  ['דירוג הגנה', 'IP54'],
  ['תקן בטיחות', 'ISO 9001:2015'],
];

const specificationEntries = (() => {
  const parsed = splitPairs(NEXT_PUBLIC_CEILING_SPECIFICATIONS);
  return parsed.length ? parsed : defaultSpecifications;
})();

const benefitTitles = splitList(NEXT_PUBLIC_CEILING_BENEFIT_TITLES);
const benefitDescriptions = splitList(NEXT_PUBLIC_CEILING_BENEFIT_DESCRIPTIONS);
const benefitIcons = [PiShieldCheck, PiShieldCheck, PiRuler, PiSpeakerHigh, PiWrench];

const benefits = benefitIcons
  .map((Icon, idx) => ({
    icon: Icon,
    title: benefitTitles[idx] ?? '',
    description: benefitDescriptions[idx] ?? '',
  }))
  .filter((item) => item.title && item.description);

const stepTitles = splitList(NEXT_PUBLIC_CEILING_PURCHASE_STEP_TITLES);
const stepDescriptions = splitList(NEXT_PUBLIC_CEILING_PURCHASE_STEP_DESCRIPTIONS);

const purchaseSteps = [
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
]
  .map((step, idx) => ({
    ...step,
    title: stepTitles[idx] ?? '',
    description: stepDescriptions[idx] ?? '',
  }))
  .filter((step) => step.title && step.description);

const faqQuestions = splitList(NEXT_PUBLIC_CEILING_FAQS_QUESTIONS);
const faqAnswers = splitList(NEXT_PUBLIC_CEILING_FAQS_ANSWERS);

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
    src: '/ceiling-1.png',
    alt: NEXT_PUBLIC_CEILING_GALLERY_PRIMARY_ALT,
  },
  {
    name: 'side',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/ceiling-2.png',
    alt: NEXT_PUBLIC_CEILING_GALLERY_SIDE_ALT,
  },
  {
    name: 'cabin',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/ceiling-3.png',
    alt: NEXT_PUBLIC_CEILING_GALLERY_CABIN_ALT,
  },
];

export const metadata: Metadata = {
  title: NEXT_PUBLIC_CEILING_META_TITLE,
};

export default function CeilingCranePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[60rem]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[1.75rem] sm:text-[2rem] font-bold leading-tight">
              {NEXT_PUBLIC_CEILING_PAGE_HEADING}
            </p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              {NEXT_PUBLIC_CEILING_PAGE_DESCRIPTION}
            </p>
          </div>
        </div>

        <section className="flex w-full grow bg-white p-4" about="gallery-section">
          <ResponsiveGallery images={galleryImages} />
        </section>

        <section className="p-4" about="video-section">
          <MediaPlayer>
            <VideoPlayer
              src="/elit.mov"
              poster="/poster-ceiling.png"
              classes="w-full rounded-lg aspect-[16/9]"
            />
          </MediaPlayer>
        </section>

        <SpecificationsSection title={NEXT_PUBLIC_CEILING_SPECIFICATIONS_TITLE} entries={specificationEntries} />
        <BenefitsSection title={NEXT_PUBLIC_CEILING_BENEFITS_TITLE} benefits={benefits} />
        <PurchaseStepsSection title={NEXT_PUBLIC_CEILING_PURCHASE_STEPS_TITLE} steps={purchaseSteps} />
        <FadeUp classes="flex px-4 py-3 mt-5 justify-center">
          <Link
            href="/contact-us"
            className="flex min-w-[5.25rem] max-w-[30rem] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </Link>
        </FadeUp>
        <FaqsSection title={NEXT_PUBLIC_CEILING_FAQS_TITLE} faqs={faqs} />
      </div>
    </div>
  );
}