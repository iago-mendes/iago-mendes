type Link = {
	text: string
	url: string
	disabled?: boolean
}

export const embeddingLinks: Link[] = [
	{text: 'Paper (in preparation)', url: '', disabled: true},
	{
		text: "Iago's Honors Thesis",
		url: 'https://iagomendes.com/docs/embedding-thesis.pdf'
	},
	{
		text: 'FiDEC (open-source code)',
		url: 'https://github.com/iago-mendes/fidec'
	}
]
