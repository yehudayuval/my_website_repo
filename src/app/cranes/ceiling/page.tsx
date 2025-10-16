'use client';

export default function CeilingCranePage() {
  const specifications = {
    'קיבולת הרמה': '1-50 טון',
    'גובה הרמה': 'עד 30 מטר',
    'רוחב המנוף': '5-35 מטר',
    'מהירות הרמה': '0.8-8 מ/דקה',
    'מהירות נסיעה': '2-20 מ/דקה',
    'מקור חשמל': '380V/50Hz',
    'דירוג הגנה': 'IP54',
    'תקן בטיחות': 'ISO 9001:2015'
  };

  const features = [
    'מערכת בקרה מתקדמת עם פאנל דיגיטלי',
    'מנגנון בלימה כפול לבטיחות מירבית',
    'חיישני עומס ומיקום מדויקים',
    'מערכת התרעה קולית וויזואלית',
    'עמידות בתנאי מזג אוויר קיצוניים',
    'תחזוקה נוחה עם גישה קלה לרכיבים',
    'ציוד בטיחות מתקדם לעובדים',
    'אפשרות לשליטה מרחוק'
  ];
  // TODO: replace all texts and images
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">Elite Lift</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              The Elite Lift offers a permanent ceiling solution, ideal for small spaces and multiple transfers, ensuring seamless mobility within your home.
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
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs_f2tL2fH57uEeoUBTLABaC3IghwmUsyoaNwr5epLdWYsFSwjt4nZplhleApJZkjOlHlCC-3tAYpP0UxibC-1mYJm2jioOU7WPnEeiP4HlBHZ4UAcq_AIP_-iECXZs1V_umUXWq6zZv-AE-DPIO883yLanv5gU34qQLHVxRa1quHwfhXSLYG0GyESuqh2BP4WJ4KoHgn51Y2tXtlPvYPpNanKNSe2Kb6efkQKjr_zMk5KOzpRpDXR8r1_ZlcvrS5ldR32uKJrbcvM")',
            }}
          >
            <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white">
              <div className="text-inherit" data-icon="Play" data-size="24px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Technical Specifications
        </h2>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Load Capacity</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">150 kg</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Dimensions</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Customizable to fit ceiling height and room size</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Operation Type</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Electric with remote control</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Materials</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Aluminum and steel</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pr-0 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Control</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Wireless remote control</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 pl-0 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Safety Features</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Emergency stop button, overload protection</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Advantages and Benefits
        </h2>
        <div className="px-4">
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">Enhances independence and mobility at home</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">Reduces the risk of falls and injuries</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">Customizable to fit various room sizes and ceiling heights</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">Quiet and smooth operation</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe2e6] border-2 bg-transparent text-[#13a4ec] checked:bg-[#13a4ec] checked:border-[#13a4ec] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe2e6] focus:outline-none"
            />
            <p className="text-[#111618] text-base font-normal leading-normal">Professional installation and training included</p>
          </label>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Purchase and Consultation Process
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#111618]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Call</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Schedule a call to discuss your needs</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Custom Fitting</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Our team will assess your home and provide a custom fitting plan</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Installation</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Professional installation by certified technicians</p>
          </div>

          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Training</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Comprehensive training on lift operation and safety</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button
            className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Schedule a Free Consultation and Demonstration</span>
          </button>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">What is the cost of the Elite Lift?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of the Elite Lift varies depending on customization and installation requirements. Please schedule a free consultation for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">Are there any funding options available?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of the Elite Lift varies depending on customization and installation requirements. Please schedule a free consultation for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">How long does the installation process take?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of the Elite Lift varies depending on customization and installation requirements. Please schedule a free consultation for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">What is the warranty on the Elite Lift?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of the Elite Lift varies depending on customization and installation requirements. Please schedule a free consultation for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">What maintenance is required?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of the Elite Lift varies depending on customization and installation requirements. Please schedule a free consultation for a personalized quote.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}