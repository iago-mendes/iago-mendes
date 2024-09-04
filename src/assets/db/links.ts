export type Link = {
	text: string
	url: string
	disabled?: boolean
}

export const embeddingLinks: Link[] = [
	{
		text: 'APS Talk Slides',
		url: 'https://iagomendes.com/docs/embedding-aps-talk.pdf'
	},
	{
		text: 'Embedding Videos',
		url: 'https://drive.google.com/drive/folders/1OafAkZbVLxPKOJXkLtLlfjG4FMhhfkKG?usp=sharing'
	},
	{
		text: 'FiDEC (open-source code)',
		url: 'https://github.com/iago-mendes/fidec'
	},
	{
		text: "Iago's Honors Thesis",
		url: 'https://iagomendes.com/docs/embedding-thesis.pdf'
	},
	{text: 'Paper (in preparation)', url: '', disabled: true}
]
