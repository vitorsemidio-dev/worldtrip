import { Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Banner() {
  return (
    <Flex
      w="full"
      h={['164px', '250px', '250px', '335px']}
      bgImage="url('/bg-banner.png')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
      px={['4', '10', '15']}
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="full"
        maxW="1160px"
        mx="auto"
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
          >
            5 continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={['md', 'md', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src="/airplane.svg"
          alt="Avião amarelo"
          transform="translateY(48px) rotate(3deg)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}
