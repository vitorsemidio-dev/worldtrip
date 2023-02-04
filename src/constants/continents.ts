type Continent = {
  image: string
  title: string
  description: string
  slug: string
  bio: string
  countries: number
  cities: number
  languages: number
}

export const continents: Continent[] = [
  {
    image: '/africa.jpg',
    title: 'África',
    description: 'O continente mais quente.',
    slug: 'africa',
    bio: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes.',
    countries: 55,
    cities: 5,
    languages: 7,
  },
  {
    image: '/america.jpg',
    title: 'América',
    description: 'O continente mais emocionante.',
    slug: 'america',
    bio: 'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. É o segundo maior continente em área.',
    countries: 35,
    cities: 25,
    languages: 4,
  },
  {
    image: '/asia.jpg',
    title: 'Ásia',
    description: 'O continente mais cultural.',
    slug: 'asia',
    bio: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    countries: 48,
    cities: 35,
    languages: 10,
  },
  {
    image: '/australia.jpg',
    title: 'Austrália',
    description: 'O continente mais novo.',
    slug: 'australia',
    bio: "Austrália, também chamado de Oceania ou Oceânia, é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
    countries: 14,
    cities: 5,
    languages: 1,
  },
  {
    image: '/europe.jpg',
    title: 'Europa',
    description: 'O continente mais antigo.',
    slug: 'europa',
    bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste. A Europa é limitada pelo oceano Glacial Ártico e outros corpos de água no norte, pelo oceano Atlântico a oeste, pelo mar Mediterrâneo ao sul, e pelo mar Negro e por vias navegáveis interligadas ao sudeste.',
    countries: 44,
    cities: 30,
    languages: 24,
  },
]
