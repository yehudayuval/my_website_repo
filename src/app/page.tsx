import { Suspense } from 'react';
import { PiShieldCheckFill, PiUsersThreeFill, PiClockFill } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';

import { FadeUp } from '@/components/effects/FadeUp';
import ReviewsSection from '@/components/home/ReviewsSection';
import ReviewsSkeleton from '@/components/ReviewsSkeleton';

const solutionCards = [
	{
		image: '/home-2.png',
		alt: 'מעלית אליט',
		title: 'מעלית אליט',
		description: 'נסיעה חלקה ושקטה עם אפשרויות התאמה אישית לעיצוב הבית שלכם.',
	},
	{
		image: '/home-3.png',
		alt: 'מעלית פנאומטית',
		title: 'מעלית פנאומטית',
		description: 'פתרון קומפקטי וחסכוני במקום המבוסס על לחץ אוויר — אידיאלי לחללים קטנים.',
	},
];

const valueHighlights = [
	{ icon: PiShieldCheckFill, label: 'אמינות' },
	{ icon: PiUsersThreeFill, label: 'שירות אישי' },
	{ icon: PiClockFill, label: 'התקנה מהירה' },
];

export default async function HomePage() {
	return (
		<div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
			<div className="layout-content-container flex flex-col w-full max-w-[960px]">
				<div>
					<div className="sm:p-4">
						<div className="relative flex min-h-[420px] sm:min-h-[480px] flex-col gap-6 sm:gap-8 rounded-lg items-center justify-center p-4 overflow-hidden">
							<Image
								src="/home-1.png"
								alt="מעלית ביתית"
								fill
								priority
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]" />
							<FadeUp classes="relative z-10 flex flex-col gap-3 justify-center items-center">
								<h1 className="relative z-10 text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-center">
									בטיחות ואיכות חיים בבית שלך!
								</h1>
								<Link
									href={"/contact-us"}
									className="relative z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
								>
									<span className="truncate">צרו קשר לייעוץ חינם</span>
								</Link>
							</FadeUp>
						</div>
					</div>
				</div>

				<h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					פתרונות המעלית שלנו
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
					{solutionCards.map(({ image, alt, title, description }) => (
						<div className="flex flex-col gap-3 pb-3" key={title}>
							<div className="relative w-full aspect-square rounded-lg overflow-hidden">
								<Image
									src={image}
									alt={alt}
									fill
									className="object-cover"
								/>
							</div>
							<FadeUp>
								<p className="text-[#111618] text-base font-medium leading-normal">{title}</p>
								<p className="text-[#617c89] text-sm font-normal leading-normal">{description}</p>
							</FadeUp>
						</div>
					))}
				</div>

				<h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					הערכים שלנו
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
					{valueHighlights.map(({ icon: Icon, label }) => (
						<div
							key={label}
							className="flex gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 items-center"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f6ff] text-[#13a4ec]">
								<Icon size={24} />
							</div>
							<h2 className="text-[#111618] text-base font-bold leading-tight">{label}</h2>
						</div>
					))}
				</div>

				<h2 className="text-[#111618] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					המלצות לקוחות
				</h2>
				<Suspense fallback={<ReviewsSkeleton />}>
					<ReviewsSection />
				</Suspense>

				<FadeUp>
					<div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
						<div className="flex flex-col gap-3 text-center">
							<h1 className="text-[#111618] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] max-w-[720px] mx-auto">
								מוכנים לשדרג את הבית שלכם?
							</h1>
							<p className="text-[#617c89] text-base sm:text-lg leading-relaxed max-w-[640px] mx-auto">
								נדאג לכל תהליך ההתקנה, משלב התכנון המותאם ועד השירות השוטף — כדי שתיהנו מהנוחות והביטחון.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href="/contact-us"
								className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#13a4ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto"
							>
								<span className="truncate">צרו קשר לייעוץ חינם</span>
							</Link>
						</div>
					</div>
				</FadeUp>
			</div>
		</div >

	);
}