import {useEffect, useState} from 'react'

export function useDimensions() {
	const [width, setWidth] = useState(360)
	const [height, setHeight] = useState(640)

	const inMobile = width < 900
	const inDesktop = width >= 900

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions, {passive: true})

		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	function updateDimensions() {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	return {width, height, inMobile, inDesktop}
}
