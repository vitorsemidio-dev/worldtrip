import { Header } from '@/components/Header'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Continent() {
  const { slug } = useRouter().query

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {slug}</title>
      </Head>
      <Header />
    </Flex>
  )
}
