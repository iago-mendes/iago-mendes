import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import Link from 'next/link'

import ExternalLink from '../ExternalLink'
import {Container} from './styles'

export function Footer() {
	return (
		<Container>
			<div className="links">
				<Link href="/#about">About</Link>
				<Link href="/#resume">Resume</Link>
				<Link href="/#education">Education</Link>
				<Link href="/#research">Research</Link>
				<Link href="/#experience">Experience</Link>
				<Link href="/#projects">Projects</Link>
				<Link href="/#awards">Awards</Link>
			</div>
			<div className="links social">
				<div>
					<HiMail />
					<span>ibrazmen@oberlin.edu</span>
					<ExternalLink url="mailto:ibrazmen@oberlin.edu" />
				</div>
				<div>
					<FaGithub />
					<span>iago-mendes</span>
					<ExternalLink url="https://github.com/iago-mendes" />
				</div>
				<div>
					<FaLinkedinIn />
					<span>mendes-iago</span>
					<ExternalLink url="https://www.linkedin.com/in/mendes-iago" />
				</div>
			</div>
		</Container>
	)
}
