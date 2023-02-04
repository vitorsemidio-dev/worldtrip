import { Flex, Heading } from '@chakra-ui/react'

type ContinentBannerProps = {
  continent: string
  image: string
}

export function ContinentBanner({ continent, image }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '96']}
      bgImage={`url('${image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['1.75rem', '5xl']}
        color="gray.100"
        fontWeight="500"
        textShadow={['2px 2px 4px rgba(0, 0, 0, 0.4)']}
      >
        {continent}
      </Heading>
    </Flex>
  )
}
