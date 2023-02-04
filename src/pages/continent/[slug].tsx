import { Content } from '@/components/Content'
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
        <title>World Trip - {continent?.title ?? 'Viagem'}</title>
      </Head>
      <Header />

      {continent && (
        <ContinentBanner continent={continent.title} image={continent.image} />
      )}

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        {continent && (
          <Content
            bio={continent.bio}
            countries={continent.countries}
            cities={continent.cities}
            languages={continent.languages}
          />
        )}
      </Flex>
    </Flex>
  )
}
