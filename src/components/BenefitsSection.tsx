import { IconType } from 'react-icons';

type Benefit = {
  icon: IconType;
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  title: string;
  benefits: Benefit[];
  about?: string;
};

export function BenefitsSection({ title, benefits, about = 'benefits-section' }: BenefitsSectionProps) {
  return (
    <>
      <h2 className="text-[#111618] text-[1.25rem] sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <section className="flex flex-col" about={about}>
        {benefits.map(({ icon: Icon, title: benefitTitle, description }) => (
          <div key={benefitTitle} className="flex items-center gap-4 bg-white px-4 min-h-[4.5rem] py-2">
            <div className="text-[#13a4ec] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12">
              <Icon size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">{benefitTitle}</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">{description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}