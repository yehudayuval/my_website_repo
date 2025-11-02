import Link from 'next/link';
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

const specifications = {
  'קיבולת הרמה': '0.5-10 טון',
  'גובה הרמה': 'עד 20 מטר',
  'רוחב פעולה': '360 מעלות',
  'לחץ אוויר': '6-8 בר',
  'מהירות הרמה': '1-12 מ/דקה',
  'מהירות סיבוב': '0.5-3 סל"ד',
  'צריכת אוויר': '50-200 ל/דקה',
  'תקן בטיחות': 'ISO 9001:2015'
};

const features = [
  'מערכת בקרה פנאומטית מדויקת',
  'תפעול שקט וללא זעזועים',
  'עמידות בסביבות מאובקות ולחות',
  'מערכת בלימה אוטומטית',
  'חיישני לחץ ומיקום מתקדמים',
  'שליטה מדויקת במהירות ובכוח',
  'תחזוקה מינימלית נדרשת',
  'אפשרות לעבודה בחללים צרים'
];

const faqs = [
  {
    question: 'כמה עולה מעלית פנאומטית?',
    answer: 'המחיר משתנה לפי מספר הקומות, התאמות אישיות ומורכבות ההתקנה. צרו קשר לקבלת הצעת מחיר מותאמת.',
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
    question: 'מה האחריות על המעלית?',
    answer: 'אחריות יצרן מקיפה בהתאם לדגם ולהתקנה. נשמח לפרט בפגישה.',
  },
  {
    question: 'איזו תחזוקה נדרשת?',
    answer: 'תחזוקה בסיסית ובדיקות תקופתיות לשמירה על בטיחות וביצועים מיטביים.',
  },
];

const benefits = [
  {
    icon: PiHouse,
    title: 'חיסכון במקום',
    description:
      'מבנה עצמאי ללא צורך בבור או חדר מכונות – התקנה פשוטה ועלויות מופחתות.',
  },
  {
    icon: PiSpeakerHigh,
    title: 'פעולה שקטה וחלקה',
    description: 'מבטיחה חוויית שימוש נעימה ונוחה בבית.',
  },
  {
    icon: PiShieldCheck,
    title: 'עמידות ואמינות',
    description: 'חומרים איכותיים לביצועים לאורך זמן.',
  },
  {
    icon: PiShield,
    title: 'בטיחות מתקדמת',
    description: 'מאפייני בטיחות להגנה מקסימלית למשתמש.',
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
    description: 'נבחן את המבנה ונדגיש את הפתרון המתאים ביותר.',
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
    description: 'הדרכה מלאה על תפעול ובטיחות המעלית.',
    showTopLine: true,
    showBottomLine: false,
    bottomLineGrow: false,
    wrapperClassName: 'pb-3',
  },
];

const galleryImages: GalleryImage[] = [
  {
    name: 'primary',
    classes: 'relative h-56 sm:h-auto sm:col-span-2 sm:row-span-2',
    src: '/pneumatic-1.png',
    alt: 'מעלית פנאומטית - מבט קדמי',
  },
  {
    name: 'side',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/pneumatic-2.png',
    alt: 'מעלית פנאומטית - מבט צד',
  },
  {
    name: 'cabin',
    classes: 'relative h-40 sm:h-auto sm:col-span-1',
    src: '/pneumatic-3.png',
    alt: 'מעלית פנאומטית - תא פנימי',
  },
];

const specificationEntries = Object.entries(specifications);

export default function PneumaticCranePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">מעלית פנאומטית</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              מעלית פנאומטית היא פתרון חדשני לבתים עם מגבלת מקום. היא מציעה נסיעה חלקה ושקטה, עם מבנה עצמאי שאינו דורש בור או חדר מכונות –
              אידיאלית לשדרוג בתים קיימים ולבנייה חדשה.
            </p>
          </div>
        </div>

        <section className="flex w-full grow bg-white p-4" about="gallery-section">
          <ResponsiveGallery images={galleryImages} />
        </section>

        <section className="p-4" about="video-section">
            <VideoPlayer
              src="/1761047054525.mov"
              classes="relative w-full overflow-hidden rounded-lg aspect-[16/9]"
              poster="/poster-pneumatic.png"
            />
        </section>

        <SpecificationsSection title="מפרט טכני" entries={specificationEntries} />
        <BenefitsSection title="יתרונות עיקריים" benefits={benefits} />
        <PurchaseStepsSection title="תהליך רכישה וייעוץ" steps={purchaseSteps} />
        <FadeUp
          classes="flex px-4 py-3 justify-center mt-5"
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

