'use client';

import {
  PiPlayFill,
  PiCaretDownBold,
  PiPhone,
  PiRuler,
  PiWrench,
  PiGraduationCap,
} from 'react-icons/pi';

export default function CeilingCranePage() {
  const specifications = {
    'קיבולת הרמה': '1-50 טון',
    'גובה הרמה': 'עד 30 מטר',
    'רוחב המנוף': '5-35 מטר',
    'מהירות הרמה': '0.8-8 מ/דקה',
    'מהירות נסיעה': '2-20 מ/דקה',
    'מקור חשמל': '380V/50Hz',
    'דירוג הגנה': 'IP54',
    'תקן בטיחות': 'ISO 9001:2015',
  };

  const features = [
    'מערכת בקרה מתקדמת עם פאנל דיגיטלי',
    'מנגנון בלימה כפול לבטיחות מירבית',
    'חיישני עומס ומיקום מדויקים',
    'מערכת התרעה קולית וויזואלית',
    'עמידות בתנאי מזג אוויר קיצוניים',
    'תחזוקה נוחה עם גישה קלה לרכיבים',
    'ציוד בטיחות מתקדם לעובדים',
    'אפשרות לשליטה מרחוק',
  ];

  // TODO: replace images

  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">מנוף תקרה</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              מנוף תקרה קבוע המיועד לחללים קטנים ולהרמות תכופות, ומספק עבודה חלקה ובטוחה בסביבת הבית או העסק.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="w-full grid gap-2 sm:gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-56 sm:h-auto sm:col-span-2 sm:row-span-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCak-vzbx1Tig-gX0Xi6BkQTbexebeRvRWYVgAOisshct9vFj3B1U42wn4eC7PsbABf_NY6xeox4IBPzW1lsZeW5UtXXnvXJ0oimHY7wATSa7iBEUhrbzm4NCEMfU1VZqhfUJbXkQC0-TATWEdh2gU76OnYSypaplcVAIYZ0cEkuk_o4EFSn9v5_yg14kHN9zsBca5W5Yc5050n9CtbO4q0FRKarVcpCA7OOXcn7alAABAp9_662rtMinjnIIcokiZ3o1WCzaQJDblF")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCak-vzbx1Tig-gX0Xi6BkQTbexebeRvRWYVgAOisshct9vFj3B1U42wn4eC7PsbABf_NY6xeox4IBPzW1lsZeW5UtXXnvXJ0oimHY7wATSa7iBEUhrbzm4NCEMfU1VZqhfUJbXkQC0-TATWEdh2gU76OnYSypaplcVAIYZ0cEkuk_o4EFSn9v5_yg14kHN9zsBca5W5Yc5050n9CtbO4q0FRKarVcpCA7OOXcn7alAABAp9_662rtMinjnIIcokiZ3o1WCzaQJDblF")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUc5ZNbEwjBhMmKr1x8jHk60gIFIZI2s1KYdrT_0zoeVIGrtrEJNQO7bC3vzyg3vIYCKuDxtHovJlsYkHZl-nYa3H_kcMX3qwe1NjAjmTjXRX1kghbC24ciC9Foo2GaVokjX-1n2Da3_WE4UPorKZiEX8HkscV2dcZAwovAyPsWxcYLyS32H6lqytpL1uej1L_OzzRnDC5YwYCG-H4dxEggwKi_J60Nvau0GwvzcwsbZVL_sar0p2boqhkskdZ5CZVmpY47w8wpZzl")',
              }}
            ></div>
          </div>
        </div>

        <div className="p-4">
          <div
            className="relative flex items-center justify-center bg-[#111618] bg-cover bg-center aspect-video rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs_f2tL2fH57uEeoUBTLABaC3IghwmUsyoaNwr5epLdWYsFSwjt4nZplhleApJZkjOlHlCC-3tAYpP0UxibC-1mYJm2jioOU7WPnEeiP4HlBHZ4UAcq_AIP_-iECXZs1V_umUXWq6zZv-AE-DPIO883yLanv5gU34qQLHVxRa1quHwfhXSLYG0GyESuqh2BP4WJ4KoHgn51Y2tXtlPvYPpNanKNSe2Kb6efkQKjr_zMk5KOzpRpDXR8ר1_ZlcvrS5ldR32uKJrbcvM")',
            }}
          >
            <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white" aria-label="נגן וידאו">
              <PiPlayFill size={24} />
            </button>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          מפרט טכני
        </h2>
        {/* TODO: use icons like pneumatic page */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">קיבולת הרמה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">150 ק״ג</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">מידות</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">מותאם אישית לגובה התקרה וגודל החדר</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">סוג הפעלה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">חשמלית עם שלט רחוק</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">חומרים</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">אלומיניום ופלדה</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">בקרה</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">שלט רחוק אלחוטי</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">מאפייני בטיחות</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">כפתור עצירת חירום, הגנת עומס יתר</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          יתרונות מרכזיים
        </h2>
        <div className="px-4">
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">משפר עצמאות וניידות בבית</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">מפחית סיכון לנפילות ופגיעות</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">ניתן להתאמה למידות חדר וגובה תקרה שונים</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">פעולה שקטה וחלקה</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">כולל התקנה מקצועית והדרכה</p>
          </label>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          תהליך רכישה וייעוץ
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#111618]">
              <PiPhone size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">צרו קשר</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">דברו איתנו לתיאום והתאמת פתרון מדויק לצרכים שלכם.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiRuler size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">התאמה אישית</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">הצוות שלנו יבחן את המקום ויגבש תוכנית התאמה אישית.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiWrench size={24} />
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">התקנה</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">התקנה מקצועית ע״י צוות טכנאים מוסמך.</p>
          </div>

          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <PiGraduationCap size={24} />
            </div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">הדרכה</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">הדרכה מלאה על תפעול ובטיחות המערכת.</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">תיאום ייעוץ והדגמה בחינם</span>
          </button>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          שאלות נפוצות
        </h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">כמה עולה המנוף?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              המחיר משתנה לפי התאמות אישיות ומורכבות ההתקנה. צרו קשר לקבלת הצעת מחיר מותאמת.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">האם קיימות אפשרויות מימון?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              כן. נוכל להציע פתרונות מימון בהתאם לצורך ולתנאים המותאמים לכל לקוח.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">כמה זמן לוקחת ההתקנה?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              לרוב מספר ימים עד שבועות, בהתאם להכנות ולמאפייני המבנה.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">מה האחריות?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              אחריות יצרן מקיפה בהתאם לדגם ולהתקנה. נשמח לפרט בפגישה.
            </p>
          </details>

          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">איזו תחזוקה נדרשת?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <PiCaretDownBold size={20} />
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              תחזוקה בסיסית ובדיקות תקופתיות לשמירה על בטיחות וביצועים מיטביים.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}