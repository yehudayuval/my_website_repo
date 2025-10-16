'use client';

import { AdminTabKey } from '@/types';

type Review = {
  id: string;
  name?: string | null;
  content: string;
  rating: number;
  image_filename?: string | null;
  created_at?: string;
};

type Props = {
  reviews: Review[];
  onDelete: (id: string) => void;
};

// TODO: exchange it to server component and fetch real data
// and correct styles. made the table mutch the mobile screens
export function ReviewsTable({ reviews, onDelete }: Props) {
  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        All Reviews
      </h2>
      <div className="px-4 sm:px-6 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#dbe2e6] bg-white">
          <table className="flex-1" dir="ltr">
            <thead>
              <tr className="bg-white">
                <th className="table-col-120 px-4 py-3 text-left text-[#111618] w-[400px] text-sm font-medium leading-normal">Name</th>
                <th className="table-col-240 px-4 py-3 text-left text-[#111618] w-[400px] text-sm font-medium leading-normal">Review</th>
                <th className="table-col-360 px-4 py-3 text-left text-[#111618] w-60 text-sm font-medium leading-normal">Rating</th>
                <th className="table-col-480 px-4 py-3 text-left text-[#111618] w-60 text-sm font-medium leading-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r) => (
                <tr key={r.id} className="border-t border-t-[#dbe2e6]">
                  <td className="table-col-120 h-[72px] px-4 py-2 w-[400px] text-[#111618] text-sm font-normal leading-normal">
                    {r.name || 'Anonymous'}
                  </td>
                  <td className="table-col-240 h-[72px] px-4 py-2 w-[400px] text-[#617c89] text-sm font-normal leading-normal">
                    {r.content}
                  </td>
                  <td className="table-col-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-medium leading-normal w-full">
                      <span className="truncate">{r.rating} Stars</span>
                    </button>
                  </td>
                  <td className="table-col-480 h-[72px] px-4 py-2 w-60 text-[#617c89] text-sm font-bold leading-normal tracking-[0.015em]">
                    <button onClick={() => onDelete(r.id)} className="text-[#111618] hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {reviews.length === 0 && (
                <tr className="border-t border-t-[#dbe2e6]">
                  <td colSpan={4} className="px-4 py-6 text-sm text-[#617c89]">
                    No reviews yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <style>{`
          @container(max-width:120px){.table-col-120{display: none;}}
          @container(max-width:240px){.table-col-240{display: none;}}
          @container(max-width:360px){.table-col-360{display: none;}}
          @container(max-width:480px){.table-col-480{display: none;}}
        `}</style>
      </div>
    </section>
  );
}