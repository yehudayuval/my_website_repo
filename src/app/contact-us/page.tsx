
export default function ContactUs() {
  return (

    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111618] tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
            <p className="text-[#617c89] text-sm font-normal leading-normal">We're here to help. Reach out to us with any questions or inquiries.</p>
          </div>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">Name</p>
            <input
              placeholder="Enter your name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">Email</p>
            <input
              placeholder="Enter your email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">Phone Number</p>
            <input
              placeholder="Enter your phone number"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">Subject</p>
            <input
              placeholder="Enter the subject"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111618] text-base font-medium leading-normal pb-2">Message</p>
            <textarea
              placeholder="Enter your message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] min-h-36 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-start">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Submit</span>
          </button>
        </div>
        <h3 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Our Contact Information</h3>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">Phone: (555) 123-4567</p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">Email: info@liftsolutions.com</p>
        <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4">Address: 123 Main Street, Anytown, USA</p>
        <div className="flex px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIoQ5-IFElmquXJeTcB1wHMnNLQ5jOV00NgPVqoxmMlHodAp7NvffsnYnLYJ4CG-jLge3DmItb37zAvhTLAj-GOAS6gY_w8H6d8bCWhQP0P9nkxYd89RXX3QTce7feFP8uD6k-uMQ5ZiQnLK45nSfRmU9yTuL5VXcS_5ckbzLCDZGoZ4EW08ppg8qERTEVWFAUU--dzennQ1vV81OhEIdFb6_b18vUDdoYqM61WzUSTiZb2DAk_V60HxPdnkNESl7q-SeeUYSckq9H")' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
