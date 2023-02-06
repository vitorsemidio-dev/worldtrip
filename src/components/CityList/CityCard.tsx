import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

type CityCardProps = {
  name: string
  country: string
  flag: string
  image: string
}

export function CityCard({ name, country, flag, image }: CityCardProps) {
  return (
    <Flex direction="column" borderRadius="4px" overflow="hidden">
      <Image
        src={image}
        alt={`${name}, ${country}`}
        w="full"
        h="170px"
        objectFit={'cover'}
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Box
          borderWidth={1}
          borderColor="yellow.200"
          borderRadius="50%"
          w="30px"
          h="30px"
          overflow="hidden"
        >
          <Image
            src={flag}
            w="full"
            h="full"
            alt={`Bandeira do país ${country}`}
            objectFit={'cover'}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
