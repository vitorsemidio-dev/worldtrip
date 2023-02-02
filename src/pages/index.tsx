import { Header } from '@/components/Header'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <Flex direction="column">
        <Header />
      </Flex>
    </>
  )
}
