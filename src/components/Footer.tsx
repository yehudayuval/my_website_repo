'use client';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex w-full max-w-[960px] flex-col">
        <footer className="flex flex-col gap-6 px-4 sm:px-5 py-8 sm:py-10 text-center">
          <p className="text-[#617c89] text-base font-normal leading-normal">
            &copy; {new Date().getFullYear()} Developed by{' '}
            <a
              className="font-bold underline"
              href="http://www.linkedin.com/in/netanel-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netanel Nagar
            </a>
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;