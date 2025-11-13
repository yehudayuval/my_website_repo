export default async function BrochureSection() {
    const label = process.env.NEXT_PUBLIC_HOME_BROCHURE_BUTTON_LABEL ?? 'הורדת מסמך';
    return (
        <section className="py-6">
            <a
                href="/אישור הלכתי.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-40 items-center justify-center text-[#13a4ec] px-5 py-3 bg-white text-lg font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-200 "
            >
                {label}
            </a>
        </section>
    );
}