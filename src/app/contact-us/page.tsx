export const metadata = {
  title: 'צור קשר',
};

export default function ContactUsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[60rem]">
        <h3 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-14">
          פרטי התקשרות
        </h3>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">
          טלפון:{' '}
          <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="text-[#13a4ec] underline hover:no-underline">
            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
          </a>
        </p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">
          אימייל:{' '}
          <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-[#13a4ec] underline hover:no-underline">
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>
        </p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">כתובת: רחוב הראשונים 12, תל אביב</p>
      </div>
    </div>
  );
}
