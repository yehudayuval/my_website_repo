'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h2 className="text-[#111618] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        אופס! משהו השתבש
      </h2>
      <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        נתקלנו בתקלה בלתי צפויה. נסו שוב מאוחר יותר או חזרו לעמוד הבית.
      </p>
      <div className="flex px-4 py-3 justify-center gap-3">
        <button
          className="flex min-w-[120px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          onClick={reset}
        >
          <span className="truncate">נסה שוב</span>
        </button>
        <Link
          href="/"
          className="flex min-w-[120px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">חזרה לעמוד הבית</span>
        </Link>
      </div>
    </>
  )
}