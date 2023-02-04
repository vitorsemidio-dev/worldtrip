import { ContinentBanner } from '@/components/ContinentBanner'
import { Header } from '@/components/Header'
import { continents } from '@/constants/continents'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Continent() {
  const { slug } = useRouter().query

  const continent = continents.find((continent) => continent.slug === slug)

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent?.title || 'Viagem'}</title>
      </Head>
      <Header />

      {continent && (
        <ContinentBanner continent={continent.title} image={continent.image} />
      )}
    </Flex>
  )
}
