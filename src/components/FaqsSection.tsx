import { PiCaretDownBold } from 'react-icons/pi';

type Faq = {
  question: string;
  answer: string;
};

type FaqsSectionProps = {
  title: string;
  faqs: Faq[];
  about?: string;
};

export function FaqsSection({ title, faqs, about = 'faqs-section' }: FaqsSectionProps) {
  return (
    <>
      <h2 className="text-[#111618] text-[1.25rem] sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <section className="flex flex-col p-4 gap-3" about={about}>
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="details flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[1rem] py-[7px] group"
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
    </>
  );
}