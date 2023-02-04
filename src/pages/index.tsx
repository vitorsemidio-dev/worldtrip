import Banner from '@/components/Banner'
import { Carousel } from '@/components/Carousel'
import { Header } from '@/components/Header'
import { HomeText } from '@/components/HomeText'
import TravelType from '@/components/TravelType'
import { continents } from '@/constants/continents'
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
        <Banner />
        <TravelType />
        <HomeText />
        <Carousel data={continents} />
      </Flex>
    </>
  )
}
