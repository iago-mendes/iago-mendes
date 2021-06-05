import { FaCalendar, FaGithub, FaHome, FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { RiWhatsappFill } from 'react-icons/ri'

import Container from '../styles/components/ResumeHeader'
import ExternalLink from './ExternalLink'

type ResumeHeaderProps =
{
	title?: string
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({title}) =>
{
	return (
		<Container>
			<div className='me'>
				<h1>
					Iago Mendes
				</h1>
				{title && (
					<h2>
						{title}
					</h2>
				)}
			</div>

			<ul className='info'>
				<div className='field'>
					<FaCalendar />
					<span>
						19 years old
					</span>
				</div>

				<div className='field'>
					<FaHome />
					<span>
						Brazil
					</span>
				</div>

				<div className='field'>
					<HiMail />
					<ExternalLink url='mailto:contact@iago-mendes.me' text='contact@iago-mendes.me' />
				</div>

				<div className='field'>
					<FaLinkedinIn />
					<ExternalLink url='https://www.linkedin.com/in/iago-b-mendes' text='/in/iago-b-mendes' />
				</div>

				<div className='field'>
					<FaGithub />
					<ExternalLink url='https://github.com/iago-mendes' text='iago-mendes' />
				</div>

				<div className='field'>
					<FaPhone />
					<RiWhatsappFill />
					<ExternalLink url='https://wa.me/5528984043111' text='+55 (38) 9 8404-3111' />
				</div>
			</ul>
		</Container>
	)
}

export default ResumeHeader