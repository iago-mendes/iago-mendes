import {Entry} from '../Entry'
import {EntryItem} from '../EntryItem'
import {GridList} from '../GridList'
import {InfoList} from '../InfoList'

export function ExperienceContent() {
	return (
		<>
			<Entry
				title="Oberlin College – Oberlin, OH"
				image="/images/experiences/oberlin.jpg"
			>
				<EntryItem
					title="Resident Assistant, Underrepresented in STEM House"
					date="Fall 2021 – Present"
				></EntryItem>

				<EntryItem title="Teaching Assistant" date="Fall 2022 – Present">
					<InfoList list={['Courses:']} />
					<GridList
						list={[
							'Mechanics & Relativity',
							'Electromagnetism & Thermo.',
							'Programming Abstractions'
						]}
					/>
				</EntryItem>

				<EntryItem
					title="STEM Community Leader"
					date="Fall 2023 – Present"
				></EntryItem>
			</Entry>

			<Entry
				title="Google – Bay Area, CA"
				image="/images/experiences/google.jpg"
			>
				<EntryItem title="Software Engineer Intern, Wear OS" date="Summer 2023">
					<InfoList
						list={[
							'Used <<Java>> and <<C++>> to develop features on the <<Android>> operating system for smartwatches.',
							'Collaborated with my team and others, including managers, input engineers, and UX designers.'
						]}
					/>
				</EntryItem>

				<EntryItem
					title="Training Software Engineer Intern, Google Assistant"
					date="Summer 2022"
				>
					<InfoList
						list={[
							'Used <<Angular>> (<<TypeScript>>) to create reusable components for Google’s issue-tracking platform.',
							'Completed entire development process: design doc, implementation, documentation, and launch.'
						]}
					/>
				</EntryItem>
			</Entry>
		</>
	)
}
