import {format} from 'date-fns'

export function formatDate(stringedDate: string) {
	if (stringedDate === 'present') return 'Present'

	const date = new Date(
		stringedDate.length === 7 ? `${stringedDate}-15` : stringedDate
	)
	let formatedDate = format(date, 'MMMM y')
	formatedDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1)

	return formatedDate
}
