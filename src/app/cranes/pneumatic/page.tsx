'use client';

export default function PneumaticCranePage() {
  const specifications = {
    'קיבולת הרמה': '0.5-10 טון',
    'גובה הרמה': 'עד 20 מטר',
    'רוחב פעולה': '360 מעלות',
    'לחץ אוויר': '6-8 בר',
    'מהירות הרמה': '1-12 מ/דקה',
    'מהירות סיבוב': '0.5-3 סל"ד',
    'צריכת אוויר': '50-200 ל/דקה',
    'תקן בטיחות': 'ISO 9001:2015'
  };

  const features = [
    'מערכת בקרה פנאומטית מדויקת',
    'תפעול שקט וללא זעזועים',
    'עמידות בסביבות מאבקות ולחות',
    'מערכת בלימה אוטומטית',
    'חיישני לחץ ומיקום מתקדמים',
    'שליטה מדויקת במהירות ובכוח',
    'תחזוקה מינימלית נדרשת',
    'אפשרות לעבודה בחללים צרים'
  ];
  // TODO: replace all texts and images
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">Pneumatic Lift</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">
              The Pneumatic Lift is an innovative solution for homes with limited space, offering a smooth and quiet ride. Its self-supporting structure requires no pit or
              machine room, making it ideal for retrofits and new constructions alike.
            </p>
          </div>
        </div>

        <div className="flex w-full grow bg-white p-4">
          <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-56 sm:h-auto sm:col-span-2 sm:row-span-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3GrXOj9rVP6qLbK4TZE2NdKQvXeUzgmH9Yh9bg7QznyKyeNF54weThkfBxs0-f8o5vWy9slBPLIFwpqNw8LfbUEGOyV9ZT0eooLtCipfXoEnlhP-J0CKFtpiBQDnmrX2LOI6dVc_QefgffW1cQ_nHiRVLPIwVgRnONbJUxZ5oP3IGEkwWYlofDxM6fSv3sJp_7lS80aKMfyD5GH4MuSqsz6hmaCXUDUD8mKXop7oJsO3NzA15YlZpoSsMeSJM7eQkex4zQbRVtwMh")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqtYV2HPpNFK9OnLkl0Tlsl2sSwM2NfmeV0Qd8yZehoJq7ZDKnFK_LvIIEFPkP1r06a7euBVTl5T5s5Sb-mpYZeRXChAHnHotZtlMZ3rCDdzIQ-_d5d97fNWJd7ut9xjP46a2mu_zJF9xVh2rj2dnAvxmgn74M5PXsBGBOF1984vblaOHRZtJErLWWDCMf7NHDk9kNXgs6WYhXHvtIBEGCYRKMHCd4y5eAaldg2MPf1DrxT7K5EE81kGoK4WW6Hmerd1jDjOQZfA_g")',
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-none h-40 sm:h-auto sm:col-span-1"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgk3idrgqjgrRk8Ego8FIPHrBC_6pVDHfMZwqsveYo__qQJZ9Ils8bhYryx9G35ce-171q0j7pWUifzUajOtqQC2iWEhQ82QouE3nFMFezrXK4FwmbJEVUuJbG7obMmx0ENAHm0S72DNcGecZ0Z_BorY1CLFEDlehM4pFg6BECuHO6ANtdPRn3hVt4FeEwlGl1vT-t54TQw7V4HATxuvgqchzoHnLGHyn57XK-VTNhAT2xyidsStnoSUujItiKYxbH6kZ88qAZb0bo")',
              }}
            ></div>
          </div>
        </div>

        <div className="p-4">
          <div
            className="relative flex items-center justify-center bg-[#111618] bg-cover bg-center aspect-video rounded-lg p-4"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOI1iJr23pkHi78UFZqrYivv9qwhGsKHt9xcqONJk8deZyOkdMdHRd2ev83t8yXgN4pv8qPpg7N8Uj_CqXRPjeOWvf5HZ_9RoDQ2znOXi2WGBLCMnruv7D4XSv7fakGfsIjZ9xerS5fNpNA9iigl2Lyf7s9k0J3F2v8KY9BWyT4ibVp9bKxSHhBe4nddpO08c4wtAx2zrRVystaX9LlvT33Lu3gyiNhTrvQ3KZGG2y9078cWH3oVw_z7Yq4eGeyKE3X4-MQzMo5Nev")',
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
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Load Capacity</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">250 kg (550 lbs)</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Dimensions</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Outer Diameter: 1000 mm (39.4 in), Inner Diameter: 850 mm (33.5 in)</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Operation Type</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Pneumatic (Air-Driven)</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Materials</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">Aluminum and Polycarbonate</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pr-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Travel Speed</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">0.15 m/s (0.5 ft/s)</p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe2e6] py-4 sm:pl-2">
            <p className="text-[#617c89] text-sm font-normal leading-normal">Power Supply</p>
            <p className="text-[#111618] text-sm font-normal leading-normal">220V, 50Hz</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Key Advantages
        </h2>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12" data-icon="House" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">Space-Saving Design</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">
              The lift's self-supporting design eliminates the need for a pit or machine room, simplifying installation and reducing costs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12" data-icon="SpeakerHigh" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">Quiet and Smooth Operation</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">Operates quietly and smoothly, ensuring a comfortable experience for users.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">Durable and Reliable</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">Constructed with durable materials for long-lasting performance and reliability.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="text-[#111618] flex items-center justify-center rounded-lg bg-[#f0f3f4] shrink-0 size-12" data-icon="Shield" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56l160,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111618] text-base font-medium leading-normal line-clamp-1">Enhanced Safety Features</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal line-clamp-2">Designed with safety features to ensure user protection during operation.</p>
          </div>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Purchase and Consultation Process
        </h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#111618]" data-icon="Phone" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Call Us</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Contact us to discuss your needs and schedule a consultation.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]" data-icon="Ruler" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Custom Fitting</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Our team will assess your home and recommend the best lift solution.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]" data-icon="Wrench" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#dbe2e6] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Installation</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">Professional installation by our certified technicians.</p>
          </div>

          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1.5px] bg-[#dbe2e6] h-2"></div>
            <div className="text-[#111618]" data-icon="GraduationCap" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-[#111618] text-base font-medium leading-normal">Training</p>
            <p className="text-[#617c89] text-base font-normal leading-normal">We provide comprehensive training on lift operation and safety.</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#13a4ec] text-white text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Schedule a Free Consultation and Demonstration</span>
          </button>
        </div>

        <h2 className="text-[#111618] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col p-4 gap-3">
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">How much does a Pneumatic Lift cost?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of a Pneumatic Lift varies depending on the number of floors, customization options, and installation complexity. Contact us for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">Are there funding options available?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of a Pneumatic Lift varies depending on the number of floors, customization options, and installation complexity. Contact us for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">How long does installation take?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of a Pneumatic Lift varies depending on the number of floors, customization options, and installation complexity. Contact us for a personalized quote.
            </p>
          </details>
          <details className="flex flex-col rounded-lg border border-[#dbe2e6] bg-white px-[15px] py-[7px] group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#111618] text-sm font-medium leading-normal">What is the warranty on the Pneumatic Lift?</p>
              <div className="text-[#111618] group-open:rotate-180" data-size="20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </summary>
            <p className="text-[#617c89] text-sm font-normal leading-normal pb-2">
              The cost of a Pneumatic Lift varies depending on the number of floors, customization options, and installation complexity. Contact us for a personalized quote.
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
              The cost of a Pneumatic Lift varies depending on the number of floors, customization options, and installation complexity. Contact us for a personalized quote.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}