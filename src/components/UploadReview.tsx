'use client';

import { ReviewForm } from '@/types';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FiUpload, FiFileText } from 'react-icons/fi';

type UploadReviewProps = {
  setFlagForAddedOrDeletedReview: Dispatch<SetStateAction<boolean>>;
};
export default function UploadReview({ setFlagForAddedOrDeletedReview }: UploadReviewProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewForm>({ mode: 'onTouched' });

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const onSubmit = async (data: ReviewForm) => {
    const t = toast.loading('מוסיף ביקורת…');
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('rating', data.rating.toString());
      formData.append('content', data.content);
      data.image && formData.append('image', data.image[0]);
        
      const res = await fetch('/api/admin/reviews', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });
      const json = await res.json();
      if (!res.ok || !json?.success) throw new Error(json?.error || 'Failed');
      reset();
      toast.success('הביקורת נוספה בהצלחה', { id: t });
      setFlagForAddedOrDeletedReview((prev) => !prev);
    } catch (error) {
      console.error(error);
      toast.error('שגיאה בהוספת הביקורת', { id: t });
    }
  };
       
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col  max-w-[32rem] py-5 md:max-w-[60rem] flex-1"
      >
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111618] tracking-light text-[2rem] font-bold leading-tight min-w-72">שתפו את החוויה שלכם</p>
        </div>

        <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">שם מלא</p>
            <input
              placeholder="הכניסו את שמכם"
              autoComplete="name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
              {...register('name', { required: 'שם הוא שדה חובה' })}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </label>
        </div>

        <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">חוות דעת</p>
            <textarea
              placeholder="כתבו כאן את חוות הדעת"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] min-h-36 placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
              {...register('content', {
                required: 'תוכן הוא שדה חובה',
                minLength: { value: 10, message: 'לפחות 10 תווים' },
              })}
            ></textarea>
            {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content.message}</p>}
          </label>
        </div>

        <div className="flex max-w-[30rem] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">דירוג</p>
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 bg-[image:--select-button-svg] placeholder:text-[#617c89] p-[1rem] text-base font-normal leading-normal"
              defaultValue=""
              {...register('rating', {
                required: 'דירוג נדרש',
                valueAsNumber: true,
                validate: (v) => (v >= 1 && v <= 5) || 'דירוג בין 1 ל-5',
              })}
            >
              <option value="" disabled>בחר דירוג</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            {errors.rating && <p className="text-red-600 text-sm mt-1">{errors.rating.message as string}</p>}
          </label>
        </div>

        <div className="flex max-w-[30rem] flex-col gap-2 px-4 py-3">
          <p className="text-[#111618] text-base font-medium leading-normal">העלאת תמונה (אופציונלי)</p>
          <label className="inline-flex items-center gap-2 w-fit cursor-pointer rounded-lg bg-[#f0f3f4] h-11 px-4 text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]">
            <FiUpload className="w-4 h-4" aria-hidden="true" />
            בחר קובץ
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const files = e.target.files;
                setSelectedFiles(files);
                setValue('image', files);
              }}
            />
          </label>

          {selectedFiles && selectedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 rounded-lg border border-[#dbe2e6] bg-[#f8fbfc] px-3 py-2">
              {Array.from(selectedFiles).map((file) => (
                <div key={file.name} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-sm">
                  <FiFileText className="w-4 h-4 text-[#13a4ec]" aria-hidden="true" />
                  <span className="text-sm text-[#111618] max-w-[12.5rem] truncate" title={file.name}>
                    {file.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex px-4 py-6 justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="flex items-center gap-2">
              <span className="truncate">{isSubmitting ? 'שולח' : 'שליחת חוות דעת'}</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
