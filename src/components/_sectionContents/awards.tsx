import {Entry} from '../Entry'
import {EntryItem} from '../EntryItem'
import {InfoList} from '../InfoList'

export function AwardsContent() {
	return (
		<>
			<Entry
				title="International Astronomy & Astrophysics Competition"
				image="/images/awards/iaac.png"
			>
				<EntryItem title="2x Gold Honor" date="2021, 2023">
					<InfoList list={['Awarded for performing in the <<top 5%>>.']} />
				</EntryItem>

				<EntryItem title="Silver Honor" date="2020">
					<InfoList list={['Awarded for performing in the <<top 10%>>.']} />
				</EntryItem>

				<EntryItem
					title="Ambassador Awards for Excellent Encouragement"
					date="2020"
				>
					<InfoList
						list={['Awarded for recruiting the most participants in Brazil.']}
					/>
				</EntryItem>
			</Entry>

			<Entry
				title="International Youth Math Challenge"
				image="/images/awards/iymc.png"
			>
				<EntryItem title="Silver Honor" date="2021">
					<InfoList list={['Awarded for performing in the <<top 10%>>.']} />
				</EntryItem>

				<EntryItem title="Bronze Honor" date="2020">
					<InfoList list={['Awarded for performing in the <<top 20%>>.']} />
				</EntryItem>
			</Entry>

			<Entry
				title="International Astronomical Search Collaboration"
				image="/images/awards/iasc.png"
			>
				<EntryItem title="Provisional Discovery of an Asteroid" date="2021">
					<InfoList
						list={[
							'Contributed to Pan-STARRS and NASA by observing near-Earth objects and Main Belt asteroids.'
						]}
					/>
				</EntryItem>
			</Entry>
		</>
	)
}
