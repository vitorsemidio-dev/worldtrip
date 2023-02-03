import { Grid, GridItem } from '@chakra-ui/layout'
import CardTravelType from '@/components/TravelType/CardTravelType'

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <CardTravelType
          icon="cocktail"
          text="vida noturna"
          alt="Copo de bebida com canudo e limão"
        />
      </GridItem>
      <GridItem>
        <CardTravelType
          icon="surf"
          text="praia"
          alt="Prancha de suft e um Sol no fundo"
        />
      </GridItem>
      <GridItem>
        <CardTravelType icon="building" text="moderno" alt="Prédio" />
      </GridItem>
      <GridItem>
        <CardTravelType icon="museum" text="clássico" alt="Museu" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <CardTravelType icon="earth" text="e mais..." alt="Globo terrestre" />
      </GridItem>
    </Grid>
  )
}
