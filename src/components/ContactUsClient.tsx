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
export default function ContactUsClient() {
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
        <>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111618] tracking-light text-[2rem] font-bold leading-tight">צור קשר</p>
                    <p className="text-[#617c89] text-sm font-normal leading-normal">
                        אנחנו כאן בשבילך. השאירו פרטים לכל שאלה או הבהרה ונחזור אליכם בהקדם.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#111618] text-base font-medium leading-normal pb-2">שם מלא</p>
                        <input
                            placeholder="הקלידו את שמכם"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
                            {...register('fullName', { required: 'שדה חובה' })}
                        />
                        {errors.fullName && <span className="text-xs text-red-500 pt-1">{errors.fullName.message}</span>}
                    </label>
                </div>

                <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#111618] text-base font-medium leading-normal pb-2">אימייל</p>
                        <input
                            placeholder="הקלידו כתובת אימייל"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
                            {...register('email', {
                                required: 'שדה חובה',
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'אימייל לא תקין' },
                            })}
                        />
                        {errors.email && <span className="text-xs text-red-500 pt-1">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#111618] text-base font-medium leading-normal pb-2">טלפון</p>
                        <input
                            placeholder="הקלידו מספר טלפון"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
                            {...register('phone', {
                                required: 'שדה חובה',
                                pattern: { value: /^0\d{1,2}-?\d{7}$/, message: 'טלפון לא תקין' },
                            })}
                        />
                        {errors.phone && <span className="text-xs text-red-500 pt-1">{errors.phone.message}</span>}
                    </label>
                </div>

                <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#111618] text-base font-medium leading-normal pb-2">נושא הפנייה</p>
                        <input
                            placeholder="הקלידו את נושא הפנייה"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
                            {...register('subject', { required: 'שדה חובה' })}
                        />
                        {errors.subject && <span className="text-xs text-red-500 pt-1">{errors.subject.message}</span>}
                    </label>
                </div>

                <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#111618] text-base font-medium leading-normal pb-2">תוכן ההודעה</p>
                        <textarea
                            placeholder="כתבו כאן את הודעתכם"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] min-h-36 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
                            {...register('message', { required: 'שדה חובה', minLength: { value: 10, message: 'לפחות 10 תווים' } })}
                        />
                        {errors.message && <span className="text-xs text-red-500 pt-1">{errors.message.message}</span>}
                    </label>
                </div>

                <div className="flex px-4 py-3 justify-start">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-60"
                    >
                        <span className="truncate">{isSubmitting ? 'שולח… ' : 'שליחת ההודעה'}</span>
                        {isSubmitting && <FiLoader className="w-4 h-4 animate-spin" aria-hidden="true" />}
                    </button>
                </div>
            </form>
        </>
    );
}
