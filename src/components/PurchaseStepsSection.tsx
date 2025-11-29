import { Fragment } from 'react';
import { IconType } from 'react-icons';

type PurchaseStep = {
  icon: IconType;
  title: string;
  description: string;
  showTopLine?: boolean;
  showBottomLine?: boolean;
  bottomLineGrow?: boolean;
  wrapperClassName?: string;
};

type PurchaseStepsSectionProps = {
  title: string;
  steps: PurchaseStep[];
  about?: string;
};

export function PurchaseStepsSection({ title, steps, about = 'purchase-steps-section' }: PurchaseStepsSectionProps) {
  return (
    <>
      <h2 className="text-[#111618] text-[1.25rem] sm:text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <section className="grid grid-cols-[40px_1fr] gap-x-2 px-4" about={about}>
        {steps.map(({ icon: Icon, title: stepTitle, description, showTopLine, showBottomLine, bottomLineGrow, wrapperClassName }) => (
          <Fragment key={stepTitle}>
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
              <p className="text-[#111618] text-base font-medium leading-normal">{stepTitle}</p>
              <p className="text-[#617c89] text-base font-normal leading-normal">{description}</p>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
}