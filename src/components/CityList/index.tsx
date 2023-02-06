import { Grid, Heading } from '@chakra-ui/react'
import { CityCard } from './CityCard'

type City = {
  name: string
  image: string
  countryName: string
  countryFlag: string
}

type CityListProps = {
  data?: City[]
}

export function CityList({ data = [] }: CityListProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['0']}
      >
        {data.map((city, index) => (
          <CityCard
            key={index}
            name={city.name}
            country={city.countryName}
            flag={city.countryFlag}
            image={city.image}
          />
        ))}
      </Grid>
    </>
  )
}
