'use client';

export function SharedCustomerReviews() {
  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[1.375rem] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        Shared Customer Reviews
      </h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4 sm:px-6">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAroi_AA4TAAzfWdCOw1RX5k41GebXI-jRUNXBHf1rgO6ZAYse_C5DOO6LU6qkXZdx0GxAEwRFZCMl2ucjcPWF-tbakllEjrUypBWw1DfOkJaFAKkC-YpSZyErzUUqtm91PJGkhUw93b6P8LadqS6pOd9zY-Miydcpfs2ExZ3u414aX-Hj_FiC0Dkmub9YS1v98nwDSY4ggZhS2VMBmVVr9kKcjcgjZTphIqvxGl-rbuUZvd9IvdHUkr2gCPTBGjMNy3bPH4zErA2q-")' }}
            />
            <div className="flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal">Liam Harper</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">2 weeks ago</p>
            </div>
          </div>
          <div className="flex gap-0.5" aria-label="5 stars">{'★★★★★'.split('').map((s, i) => <span key={i}>⭐</span>)}</div>
          <p className="text-[#111618] text-base font-normal leading-normal">
            The home lift has been a game-changer for my family. It's safe, reliable, and fits perfectly in our home.
          </p>
          <div className="flex gap-9 text-[#617c89]">
            <button className="flex items-center gap-2"><span>👍</span><p className="text-inherit">12</p></button>
            <button className="flex items-center gap-2"><span>👎</span><p className="text-inherit">2</p></button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRJeLYLlSSqhftn0DRCqc_TWLk3qPYZsGhI-ir1mNSFCZKA0pkxVdctGsphqJZUlDWQ7hJyJQLObBR6smb6tbowQNnzs0S6-BSj861jdpJ7PdheT_-gneZGvYvlCxJsCMBEMMrgOcf5rZC4ev5IKA3YLXgMnDEunGb5-sRyvvCbNLazV0D0rLjEIGy1rZivx7FO5XN9-wcv9L0O6KqtEg_6GuVZL8VWgS4cGi48DbojCjkWafI2w54yiXcfVsSWpd_NeuJUdWVjDBx")' }}
            />
            <div className="flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal">Chloe Foster</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">1 month ago</p>
            </div>
          </div>
          <div className="flex gap-0.5" aria-label="5 stars">{'★★★★★'.split('').map((s, i) => <span key={i}>⭐</span>)}</div>
          <p className="text-[#111618] text-base font-normal leading-normal">
            We are very happy with our new home lift. The installation team was professional and efficient.
          </p>
          <div className="flex gap-9 text-[#617c89]">
            <button className="flex items-center gap-2"><span>👍</span><p className="text-inherit">8</p></button>
            <button className="flex items-center gap-2"><span>👎</span><p className="text-inherit">1</p></button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmMv031ZKNXRBjcvl-LPOVnaacNFnaDcyHysfHkOF_gDIj1cwiiM04Hi9zncayvu02qp5jPX-ag-jUHrYpO5OSaRe3RkrXPFSh7pvrqjtRXReIEhddYvTfuQjZtKMm91248zuxLjZZ7ypCjT3Ebv3cwR8c_Xrpvxb7FgX2IRV_Yuqt2oeub2YnRwdB_QMfNQ03CLgPy8Q6ugNMIDMKQQGRRU_xVbDnJEBirUXGoUk0eL8I94CFZtqpCohb9KnN4jug7w-5eqrNTFbU")' }}
            />
            <div className="flex-1">
              <p className="text-[#111618] text-base font-medium leading-normal">Owen Hayes</p>
              <p className="text-[#617c89] text-sm font-normal leading-normal">2 months ago</p>
            </div>
          </div>
          <div className="flex gap-0.5" aria-label="5 stars">{'★★★★★'.split('').map((s, i) => <span key={i}>⭐</span>)}</div>
          <p className="text-[#111618] text-base font-normal leading-normal">
            The lift has exceeded our expectations. It's quiet, smooth, and adds a touch of elegance to our home.
          </p>
          <div className="flex gap-9 text-[#617c89]">
            <button className="flex items-center gap-2"><span>👍</span><p className="text-inherit">15</p></button>
            <button className="flex items-center gap-2"><span>👎</span><p className="text-inherit">3</p></button>
          </div>
        </div>
      </div>
    </section>
  );
}