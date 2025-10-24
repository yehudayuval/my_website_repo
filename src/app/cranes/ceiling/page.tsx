'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  PiCaretDownBold,
  PiPhone,
  PiRuler,
  PiWrench,
  PiGraduationCap,
  PiShieldCheck,
  PiSpeakerHigh,
} from 'react-icons/pi';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

type GalleryImageName = 'primary' | 'side' | 'cabin';

type GalleryImage = {
  name: GalleryImageName;
  classes: string;
  src: string;
  alt: string;
};

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
  const [imageLoaded, setImageLoaded] = useState<Record<GalleryImageName, boolean>>({
    primary: false,
    side: false,
    cabin: false,
  });
  const [videoLoaded, setVideoLoaded] = useState(false);

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
          <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden">
            {galleryImages.map(({ name, classes, src, alt }) => (
              <div key={name} className={classes}>
                {!imageLoaded[name] && (
                  <div className="animate-pulse absolute inset-0 rounded-[inherit] bg-[#d6dde1]" />
                )}
                <Image
                  src={src}
                  alt={alt}
                  // TODO: read about fill
                  fill
                  priority={name === 'primary'}
                  onLoad={(event) => {
                    setImageLoaded((prev) => ({ ...prev, [name]: true }));
                    event.currentTarget.classList.add('opacity-100');
                  }}
                  className="transition-opacity duration-700 opacity-0 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="p-4" about="video-section">
          <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9]">
            {!videoLoaded && (
              <div className="absolute inset-0 bg-[#d6dde1] animate-pulse" />
            )}
            <MediaPlayer
              src="/1761047054525.mov"
              className="h-full w-full rounded-lg"
              playsInline
              preload="metadata"
              dir="ltr"
              load="visible"
              posterLoad="visible"
              onLoadedMetadata={() => setVideoLoaded(true)}
            >
              <Poster src="/poster-ceiling.png" className="vds-poster" />
              {/* TODO: decide if add thumbnails */}
              <DefaultVideoLayout icons={defaultLayoutIcons} />
              <MediaProvider />
            </MediaPlayer>
          </div>
        </section>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          מפרט טכני
        </h2>
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2" about="specifications-section">
          {specificationEntries.map(([label, value], index) => (
            <div
              key={label}
              className={`flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 ${
                index % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="text-[#617c89] text-sm font-normal leading-normal">{label}</p>
                <p className="text-[#111618] text-sm font-normal leading-normal">{value}</p>
              </motion.div>
            </div>
          ))}
        </section>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          יתרונות מרכזיים
        </h2>
        <section className="flex flex-col" about="benefits-section">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
                <Icon size={24} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">{title}</p>
                <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">{description}</p>
              </div>
            </div>
          ))}
        </section>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          תהליך רכישה וייעוץ
        </h2>
        <section className="grid grid-cols-[40px_1fr] gap-x-2 px-4" about="purchase-steps-section">
          {purchaseSteps.map(
            ({ icon: Icon, title, description, showTopLine, showBottomLine, bottomLineGrow, wrapperClassName }) => (
              <Fragment key={title}>
                <div className={`flex flex-col items-center gap-1 ${wrapperClassName ?? ''}`}>
                  {showTopLine && <div className="w-[1.5px] h-2 bg-[#dbe2e6]" />}
                  <div className="text-[#13a4ec]">
                    <Icon size={24} />
                  </div>
                  {showBottomLine && (
                    <div className={`w-[1.5px] bg-[#dbe2e6] ${bottomLineGrow ? 'h-2 grow' : 'h-2'}`} />
                  )}
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#111618] text-base font-medium leading-normal">{title}</p>
                  <p className="text-[#617c89] text-base font-normal leading-normal">{description}</p>
                </div>
              </Fragment>
            ),
          )}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex px-4 py-3 mt-5 justify-center"
        >
          <Link
            href="/contact-us"
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </Link>
        </motion.div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          שאלות נפוצות
        </h2>
        <section className="flex flex-col p-4 gap-3" about="faqs-section">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="details flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#111618] text-sm font-medium leading-normal">{question}</p>
                <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                  <PiCaretDownBold size={20} />
                </div>
              </summary>
              <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">{answer}</p>
            </details>
          ))}
        </section>
      </div>
    </div>
  );
}