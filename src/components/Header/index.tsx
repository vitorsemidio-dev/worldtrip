import { Flex, Grid, Icon, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const showBackLink = asPath !== '/'

  return (
    <Flex
      w="full"
      as="header"
      px="1rem"
      justify="center"
      align="center"
      h={['50px', '100px']}
    >
      <Grid
        h="full"
        w="full"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {showBackLink && (
          <Link href="/">
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              _hover={{
                color: 'yellow.400',
              }}
            />
          </Link>
        )}
        <Image
          w={['100px', '180px']}
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca 'World Trip'World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}
