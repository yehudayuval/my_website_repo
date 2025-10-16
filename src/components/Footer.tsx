'use client';

const Footer = () => {
  return (
    <footer className="flex justify-center">
        <div className="flex w-full max-w-[960px] flex-col">
          <footer className="flex flex-col gap-6 px-4 sm:px-5 py-8 sm:py-10 text-center">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:justify-around gap-4 sm:gap-6">
              <a className="text-[#617c89] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              <a className="text-[#617c89] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              <a className="text-[#617c89] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
            </div>
            <p className="text-[#617c89] text-base font-normal leading-normal">@2024 Ascend Home Lifts. All rights reserved.</p>
          </footer>
        </div>
      </footer>
  );
};

export default Footer;