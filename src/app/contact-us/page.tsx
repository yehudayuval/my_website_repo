'use client';

import { useForm } from 'react-hook-form';
import { FiLoader } from 'react-icons/fi';

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

// TODO: decide if want this page
export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    console.log('contact form submitted', values);
    reset();
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[32px] font-bold leading-tight">צור קשר</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              אנחנו כאן בשבילך. השאירו פרטים לכל שאלה או הבהרה ונחזור אליכם בהקדם.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal pb-2">שם מלא</p>
              <input
                placeholder="הקלידו את שמכם"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                {...register('fullName', { required: 'שדה חובה' })}
              />
              {errors.fullName && <span className="text-xs text-red-500 pt-1">{errors.fullName.message}</span>}
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal pb-2">אימייל</p>
              <input
                placeholder="הקלידו כתובת אימייל"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                {...register('email', {
                  required: 'שדה חובה',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'אימייל לא תקין' },
                })}
              />
              {errors.email && <span className="text-xs text-red-500 pt-1">{errors.email.message}</span>}
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal pb-2">טלפון</p>
              <input
                placeholder="הקלידו מספר טלפון"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                {...register('phone', {
                  required: 'שדה חובה',
                  pattern: { value: /^0\d{1,2}-?\d{7}$/, message: 'טלפון לא תקין' },
                })}
              />
              {errors.phone && <span className="text-xs text-red-500 pt-1">{errors.phone.message}</span>}
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal pb-2">נושא הפנייה</p>
              <input
                placeholder="הקלידו את נושא הפנייה"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                {...register('subject', { required: 'שדה חובה' })}
              />
              {errors.subject && <span className="text-xs text-red-500 pt-1">{errors.subject.message}</span>}
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal pb-2">תוכן ההודעה</p>
              <textarea
                placeholder="כתבו כאן את הודעתכם"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] min-h-36 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
                {...register('message', { required: 'שדה חובה', minLength: { value: 10, message: 'לפחות 10 תווים' } })}
              />
              {errors.message && <span className="text-xs text-red-500 pt-1">{errors.message.message}</span>}
            </label>
          </div>

          <div className="flex px-4 py-3 justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-60"
            >
              <span className="truncate">{isSubmitting ? 'שולח… ' : 'שליחת ההודעה'}</span>
              {isSubmitting && <FiLoader className="w-4 h-4 animate-spin" aria-hidden="true" />}
            </button>
          </div>
        </form>

        <h3 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          פרטי התקשרות
        </h3>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">טלפון: 03-555-1234</p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">אימייל: info@lift-solutions.co.il</p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">כתובת: רחוב הראשונים 12, תל אביב</p>
        {/* TODO: check if whanted to add map */}
        <div className="flex px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIoQ5-IFElmquXJeTcB1wHMnNLQ5jOV00NgPVqoxmMlHodAp7NvffsnYnLYJ4CG-jLge3DmItb37zAvhTLAj-GOAS6gY_w8H6d8bCWhQP0P9nkxYd89RXX3QTce7feFP8uD6k-uMQ5ZiQnLK45nSfRmU9yTuL5VXcS_5ckbzLCDZGoZ4EW08ppg8qERTEVWFAUU--dzennQ1vV81OhEIdFb6_b18vUDdoYqM61WzUSTiZb2DAk_V60HxPdnkNESl7q-SeeUYSckq9H")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
