import { Flex, Heading, Text } from '@chakra-ui/react'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

type CaroulselItemProps = {
  image: string
  title: string
  description: string
}

type CarouselProps = {
  data: Array<CaroulselItemProps>
}

export function Carousel({ data }: CarouselProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <Flex
              w="full"
              h="full"
              align="center"
              justify="center"
              direction="column"
              bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('${item.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
            >
              <Heading
                fontSize={['3xl', '4xl', '5xl']}
                color="gray.100"
                fontWeight="bold"
              >
                {item.title}
              </Heading>
              <Text
                fontWeight="bold"
                color="gray.300"
                fontSize={['0.8rem', '1xl', '2xl']}
                mt={['2', '4']}
              >
                {item.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
