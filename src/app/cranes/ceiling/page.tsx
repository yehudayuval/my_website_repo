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


const specifications: Record<string, string> = {
  'קיבולת הרמה': '1-50 טון',
  'גובה הרמה': 'עד 30 מטר',
  'רוחב המנוף': '5-35 מטר',
  'מהירות הרמה': '0.8-8 מ/דקה',
  'מהירות נסיעה': '2-20 מ/דקה',
  'מקור חשמל': '380V/50Hz',
  'דירוג הגנה': 'IP54',
  'תקן בטיחות': 'ISO 9001:2015',
};

const benefits = [
  {
    icon: PiShieldCheck,
    title: 'משפר עצמאות וניידות בבית',
    description: 'מאפשר תנועה עצמאית ובטוחה בין קומות ללא מאמץ פיזי.',
  },
  {
    icon: PiShieldCheck,
    title: 'מפחית סיכון לנפילות ופגיעות',
    description: 'מערכת בטיחות מתקדמת למניעת תאונות ומתן שקט נפשי.',
  },
  {
    icon: PiRuler,
    title: 'התאמה אישית למידות החדר',
    description: 'ניתן להתאמה לגובה תקרה וגודל חדר שונים ללא צורך בשינויים מבניים.',
  },
  {
    icon: PiSpeakerHigh,
    title: 'פעולה שקטה וחלקה',
    description: 'מנוע שקט ותנועה חלקה ללא רעש או זעזועים.',
  },
  {
    icon: PiWrench,
    title: 'התקנה מקצועית והדרכה',
    description: 'התקנה על ידי צוות מקצועי כולל הדרכה מלאה על השימוש.',
  },
];

const purchaseSteps = [
  {
    icon: PiPhone,
    title: 'צרו קשר',
    description: 'דברו איתנו לתיאום והתאמת פתרון מדויק לצרכים שלכם.',
    showTopLine: false,
    showBottomLine: true,
    bottomLineGrow: true,
    wrapperClassName: 'pt-3',
  },
  {
    icon: PiRuler,
    title: 'התאמה אישית',
    description: 'הצוות שלנו יבחן את המקום ויגבש תוכנית התאמה אישית.',
    showTopLine: true,
    showBottomLine: true,
    bottomLineGrow: true,
  },
  {
    icon: PiWrench,
    title: 'התקנה',
    description: 'התקנה מקצועית ע״י צוות טכנאים מוסמך.',
    showTopLine: true,
    showBottomLine: true,
    bottomLineGrow: true,
  },
  {
    icon: PiGraduationCap,
    title: 'הדרכה',
    description: 'הדרכה מלאה על תפעול ובטיחות המערכת.',
    showTopLine: true,
    showBottomLine: false,
    bottomLineGrow: false,
    wrapperClassName: 'pb-3',
  },
];

const faqs = [
  {
    question: 'כמה עולה המנוף?',
    answer:
    'המחיר משתנה לפי התאמות אישיות ומורכבות ההתקנה. צרו קשר לקבלת הצעת מחיר מותאמת.',
  },
  {
    question: 'האם קיימות אפשרויות מימון?',
    answer: 'כן. נוכל להציע פתרונות מימון בהתאם לצורך ולתנאים המותאמים לכל לקוח.',
  },
  {
    question: 'כמה זמן לוקחת ההתקנה?',
    answer: 'לרוב מספר ימים עד שבועות, בהתאם להכנות ולמאפייני המבנה.',
  },
  {
    question: 'מה האחריות?',
    answer: 'אחריות יצרן מקיפה בהתאם לדגם ולהתקנה. נשמח לפרט בפגישה.',
  },
  {
    question: 'איזו תחזוקה נדרשת?',
    answer: 'תחזוקה בסיסית ובדיקות תקופתיות לשמירה על בטיחות וביצועים מיטביים.',
  },
];

const galleryImages: GalleryImage[] = [
  {
    name: 'primary',
    classes: 'relative h-56 sm:h-auto sm:col-span-2 sm:row-span-2',
    src: '/ceiling-1.png',
    alt: 'מנוף תקרה - מבט קדמי',
  },
  {
    name: 'side',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/ceiling-2.png',
    alt: 'מנוף תקרה - מבט צד',
  },
  {
    name: 'cabin',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/ceiling-3.png',
    alt: 'מנוף תקרה - מנגנון פעולה',
  },
];

const specificationEntries = Object.entries(specifications);

export default function CeilingCranePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">
              מנוף תקרה
            </p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              מנוף תקרה קבוע המיועד לחללים קטנים ולהרמות תכופות, ומספק עבודה חלקה ובטוחה בסביבת הבית או העסק.
            </p>
          </div>
        </div>

        <section className="flex w-full grow bg-white p-4" about="gallery-section">
          <ResponsiveGallery images={galleryImages} />
        </section>

        <section className="p-4" about="video-section">
          <VideoPlayer
            src="/1761047054525.mov"
            poster="/poster-ceiling.png"
            classes="w-full rounded-lg aspect-[16/9]"
          />
        </section>

        <SpecificationsSection title="מפרט טכני" entries={specificationEntries} />
        <BenefitsSection title="יתרונות מרכזיים" benefits={benefits} />
        <PurchaseStepsSection title="תהליך רכישה וייעוץ" steps={purchaseSteps} />
        <FadeUp
          classes="flex px-4 py-3 mt-5 justify-center"
        >
          <Link
            href="/contact-us"
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </Link>
        </FadeUp>
        <FaqsSection title="שאלות נפוצות" faqs={faqs} />
      </div>
    </div>
  );
}