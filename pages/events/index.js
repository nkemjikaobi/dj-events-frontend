import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { BASE_URL } from '@/config/index';
export default function EventsPage({ events }) {
	return (
		<Layout>
			<h1>Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${BASE_URL}/api/events`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
