import { Flex, Grid, Heading, Text } from '@chakra-ui/react'

type ContentProps = {
  bio: string
  countries: number
  languages: number
  cities: number
}

export function Content({ bio, cities, countries, languages }: ContentProps) {
  const stats = [
    { label: 'países', value: countries },
    { label: 'línguas', value: languages },
    { label: 'cidades +100', value: cities },
  ]

  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        {bio}
      </Text>

      <Flex alignItems="center" justifyContent="space-between">
        {stats.map((stat) => (
          <Flex
            key={stat.label}
            direction="column"
            justify="center"
            align={['flex-start', 'flex-start', 'center']}
          >
            <Heading
              fontSize={['2xl', '5xl']}
              color="yellow.400"
              fontWeight="500"
            >
              {stat.value}
            </Heading>
            <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
              {stat.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Grid>
  )
}
