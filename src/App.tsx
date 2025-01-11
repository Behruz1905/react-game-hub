import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside">Aside</GridItem>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
