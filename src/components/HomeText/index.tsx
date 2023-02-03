import { Divider, Heading } from '@chakra-ui/react'

export function HomeText() {
  return (
    <>
      <Divider
        w={['60px', '90px']}
        bg="gray.700"
        h="2px"
        mx="auto"
        my={['9', '20']}
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </>
  )
}
