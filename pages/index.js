import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Root() {
	const router = useRouter()

	useEffect(() => {
		router.push("/indonesia")
	})

	return null
}