import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { BASE_URL } from '@/config/index';
import Link from 'next/link';
export default function Home({ events }) {

	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events && events.map(evt => (
				<EventItem key={evt.id} evt={evt}/>
			))}
			{events.length > 0 && (
				<Link href="/events" className="btn-secondary">
					View All Events 
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${BASE_URL}/events?_sort=date:ASC&_limit=3`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
