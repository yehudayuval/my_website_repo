'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FiLoader } from 'react-icons/fi';

type LoginForm = {
  email: string;
  password: string;
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onTouched' });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (res?.success) {
        router.push('/admin/dashboard');
      } else {
        toast.error(res?.error || 'שגיאה בהתחברות');
      }
    } catch {
      toast.error('שגיאה בחיבור לשרת');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <main className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[30rem] mx-auto bg-white"
        noValidate
      >
        <h2 className="text-[#111618] text-2xl sm:text-[1.75rem] font-bold leading-tight text-center pb-2">כניסת מנהל</h2>

        <div className="flex flex-col gap-1 px-0 sm:px-1 py-3">
          <label htmlFor="email" className="text-[#111618] text-sm font-medium leading-normal">אימייל</label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="username"
            style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
            placeholder="name@company.com"
            className="form-input w-full rounded-lg text-[#111618] border border-[#dbe2e6] bg-white h-12 px-4 placeholder:text-[#617c89] focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30 text-left placeholder:text-left"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email', {
              required: 'אימייל הוא שדה חובה',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'אימייל לא תקין',
              },
            })}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 px-0 sm:px-1 py-3">
          <label htmlFor="password" className="text-[#111618] text-sm font-medium leading-normal">סיסמה</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
            placeholder="••••••••"
            className="form-input w-full rounded-lg text-[#111618] border border-[#dbe2e6] bg-white h-12 px-4 placeholder:text-[#617c89] focus:outline-none focus:ring-2 focus:ring-[#13a4ec]/30 text-left! placeholder:text-left"
            aria-invalid={!!errors.password || undefined}
            aria-describedby={errors.password ? 'password-error' : undefined}
            {...register('password', {
              required: 'סיסמה היא שדה חובה',
              minLength: { value: 6, message: 'סיסמה חייבת להכיל לפחות 6 תווים' },
            })}
          />
          {errors.password && (
            <p id="password-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.password.message as string}
            </p>
          )}
        </div>

        <div className="flex px-0 sm:px-1 py-4 justify-center">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="flex w-full sm:w-auto min-w-[7.5rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#13a4ec] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="flex items-center gap-2">
              <span className="truncate">{loading ? 'מתחבר ' : 'התחברות'}</span>
              {loading && <FiLoader className="w-4 h-4 animate-spin" aria-hidden="true" />}
            </span>
          </button>
        </div>
      </form>
    </main>
  );
}