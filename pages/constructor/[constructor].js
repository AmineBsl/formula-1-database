import { useRouter } from 'next/router'

const Constructor = () => {
  const router = useRouter()
  const { constructor } = router.query

  return <p>Post: {constructor}</p>
}

export default Constructor