import {Entry} from '../Entry'
import {EntryItem} from '../EntryItem'
import {GridList} from '../GridList'
import {InfoList} from '../InfoList'

export function EducationContent() {
	return (
		<Entry title="Bachelor's Degree, Oberlin College">
			<EntryItem
				title="Robert Owen's Lab, Oberlin College & SXS Collaboration"
				date="Fall 2021 – Present"
			>
				<InfoList
					list={[
						'Overall GPA: <<4.01>> / 4.00. Major GPA: <<4.03>> / 4.00.',
						'STRONG (Science and Technology Research Opportunities for a New Generation) Scholar',
						'John F. Oberlin Scholarship Recipient',
						'Relevant Coursework:'
					]}
				/>
				<GridList
					list={[
						'Modern Physics',
						'Waves & Optics',
						'Computational Physics (<<Python>>)',
						'Classical Mechanics',
						'Quantum Mechanics',
						'Electomagnetism & Thermo.',
						'Astrophysics I: Stars & Planets',
						'Algorithms',
						'Systems Programming (<<C>>)',
						'Data Structures (<<Java>>)',
						'Theory of Computation',
						'Computer Architecture (<<Assembly>>)'
					]}
				/>
			</EntryItem>
		</Entry>
	)
}
