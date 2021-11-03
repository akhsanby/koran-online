import { useRouter } from 'next/router'

export const newsTagName = () => {
  const router = useRouter()
  if(router.pathname == '/') return 'Indonesia'
  if(router.pathname == '/programming') return 'Programming'
  if(router.pathname == '/covid19') return 'Covid 19'
  if(router.pathname == '/search') return router.query.keyword
}