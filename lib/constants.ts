// lib/constants.ts

export type EventItem = {
	image: string;
	title: string;
	slug: string;
	location: string;
	date: string; // e.g., "2025-11-07"
	time: string; // e.g., "09:00 AM"
};

// Curated list of upcoming/popular developer events.
// Image assets live under public/images and can be used directly with next/image
// via paths like "/images/event1.png".
export const events: EventItem[] = [
	{
		image: '/images/event1.png',
		title: 'React Summit US 2025',
		slug: 'react-summit-us-2025',
		location: 'San Francisco, CA, USA',
		date: '2025-11-07',
		time: '09:00 AM',
	},
	{
		image: '/images/event2.png',
		title: 'Next.js Conf 2025',
		slug: 'nextjs-conf-2025',
		location: 'Los Angeles, CA, USA',
		date: '2025-10-15',
		time: '10:00 AM',
	},
	{
		image: '/images/event3.png',
		title: 'Hack The Future 2025',
		slug: 'hack-the-future-2025',
		location: 'Austin, TX, USA',
		date: '2025-09-20',
		time: '08:30 AM',
	},
	{
		image: '/images/event4.png',
		title: 'AI & Web Dev Summit 2025',
		slug: 'ai-webdev-summit-2025',
		location: 'London, UK',
		date: '2025-08-12',
		time: '09:15 AM',
	},
	{
		image: '/images/event5.png',
		title: 'Open Source Fest 2025',
		slug: 'open-source-fest-2025',
		location: 'Berlin, Germany',
		date: '2025-06-22',
		time: '10:00 AM',
	},
	{
		image: '/images/event6.png',
		title: 'Cloud Builders Meetup 2025',
		slug: 'cloud-builders-meetup-2025',
		location: 'Toronto, Canada',
		date: '2025-05-14',
		time: '06:00 PM',
	},
];
