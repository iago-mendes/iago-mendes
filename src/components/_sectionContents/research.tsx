import {Entry} from '../Entry'
import {EntryItem} from '../EntryItem'
import {InfoList} from '../InfoList'

export function ResearchContent() {
	return (
		<Entry
			title="Isometric Embedding of Black Hole Horizons in Euclidean Space"
			image="/images/research/embedding.jpg"
		>
			<EntryItem
				title="Robert Owen’s Lab, Oberlin College & SXS Collaboration"
				date="Fall 2021 – Present"
			>
				<InfoList
					list={[
						'Implemented method in a <<finite-difference code>> (bit.ly/FDEmbed) & in the <<Spectral Einstein Code>>.',
						'Ran and studied binary black hole merger <<simulations>> in a high-performance <<>>.',
						'Presented at the <<APS April Meeting>> (2023) and at Oberlin’s <<Research Symposium>> (2022, 2023).',
						'Invited for Oberlin’s Physics <<Honors Program>> and selected as an Oberlin’s <<Featured Researcher>>.'
					]}
				/>
			</EntryItem>
		</Entry>
	)
}
