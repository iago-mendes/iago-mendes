import {PageContainer} from '../components/PageContainer'
import {Container} from '../styles/pages/general-relativity-exco'
import {AnimatedLinks} from '../components/AnimatedLinks'
import {SEOHead} from '../components/SEOHead'

const title = 'General Relativity: The Science of Interstellar'
const description =
	'In the early twentieth century, Einstein revolutionized the ' +
	'study of gravity by connecting spacetime geometry with ' +
	'physical dynamics. As John Wheeler says, “Spacetime tells ' +
	'matter how to move; matter tells spacetime how to curve”. ' +
	'This started the branch of physics currently known as ' +
	'General Relativity. Despite being a very complex theory, ' +
	'it leads to many intriguing results that are especially ' +
	'highlighted by the famous Christopher Nolan movie ' +
	'“Interstellar”. In this course, I aim to use these results ' +
	'to discuss General Relativity in a beginner-friendly ' +
	'manner.'

function Embedding() {
	return (
		<PageContainer>
			<SEOHead
				title={title}
				description={description}
				url="https://iagomendes.com/general-relativity-exco"
			/>
			<Container>
				<div className="header">
					<span className="title">{title}</span>
					<span className="subtitle">ExCo 321, Fall 2024</span>
					<span className="subtitle">Oberlin College</span>
					<span className="subtitle">Iago Mendes</span>
				</div>
				<div className="section">
					<span className="title">Course Overview</span>
					<p>{description}</p>
					<AnimatedLinks
						links={[
							{
								text: 'Syllabus',
								url: 'https://iago-mendes.github.io/exco-general-relativity/syllabus/main.pdf'
							}
						]}
					/>
				</div>
				<div className="section">
					<span className="title">Lecture notes</span>
					<AnimatedLinks
						links={[
							{
								text: 'Week 1 (09/04)',
								url: 'https://iago-mendes.github.io/exco-general-relativity/lecture-notes-01/main.pdf'
							},
							{
								text: 'Week 2 (09/11)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 3 (09/18)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 4 (09/25)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 5 (10/02)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 6 (10/09)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 8 (10/30)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 9 (11/06)',
								url: '',
								disabled: true
							},
							{
								text: 'Week 10 (11/13)',
								url: '',
								disabled: true
							}
						]}
					/>
				</div>
				<div className="section">
					<span className="title">Quizzes</span>
					<AnimatedLinks
						links={[
							{
								text: 'Quiz 1',
								url: '',
								disabled: true
							},
							{
								text: 'Solutions to Quiz 1',
								url: '',
								disabled: true
							},
							{
								text: 'Quiz 2',
								url: '',
								disabled: true
							},
							{
								text: 'Solutions to Quiz 2',
								url: '',
								disabled: true
							}
						]}
					/>
				</div>
			</Container>
		</PageContainer>
	)
}

export default Embedding
