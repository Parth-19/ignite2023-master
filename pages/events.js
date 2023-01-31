import PageContainer from 'components/PageContainer'
import NavContainer from 'components/NavContainer'
import NavLink from 'components/NavLink'
import EventContainer from 'components/EventContainer'
import EventCard from 'components/EventCard'
import Navbar from 'components/Navbar'
import withTransition from 'HOC/withTransition'

function Events() {
	const container = {
		hidden: {
			opacity: 0.1,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 2,
			},
		},
	}

	return (
		<>
			<Navbar />
			<div className='h-full flex flex-row'>
				<NavContainer>
					<NavLink page='home' edge='left' />
					<NavLink page='about' edge='' />
					<NavLink page='events' edge='right' />
				</NavContainer>

				<PageContainer title='Events'>
					<EventContainer>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Sparkathon is a fun get together with your family where you sit together and try to light a fire.'
							bgCol='bg-pink-400'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
						<EventCard
							img='/illustrations/bulb.webp'
							title='Sparkathon'
							summary='Race your mind against time to break the encryption'
						/>
					</EventContainer>
				</PageContainer>

				<NavContainer>
					<NavLink page='sponsors' edge='left' />
					<NavLink page='contact' edge='right' />
				</NavContainer>
			</div>
		</>
	)
}

export default withTransition(Events)
