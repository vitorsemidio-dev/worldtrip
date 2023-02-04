type Continent = {
  image: string
  title: string
  description: string
  slug: string
}

export const continents: Continent[] = [
  {
    image: '/africa.jpg',
    title: 'África',
    description: 'O continente mais quente.',
    slug: 'africa',
  },
  {
    image: '/america.jpg',
    title: 'América',
    description: 'O continente mais emocionante.',
    slug: 'america',
  },
  {
    image: '/asia.jpg',
    title: 'Ásia',
    description: 'O continente mais cultural.',
    slug: 'asia',
  },
  {
    image: '/australia.jpg',
    title: 'Austrália',
    description: 'O continente mais novo.',
    slug: 'australia',
  },
  {
    image: '/europe.jpg',
    title: 'Europa',
    description: 'O continente mais antigo.',
    slug: 'europa',
  },
]
