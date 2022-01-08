import "./style.css";
import { Grid, Card, Text, Image, Badge } from "@geist-ui/react";
import Yo from "../../../assets/yo.jpeg";
const Header = () => {
  return (
    <header>
      <Grid.Container gap={1}>
        <Grid xs={24} justify="center">
          <Card width="100%" style={{ textAlign: "center" }}>
            <Image src={Yo} className="image-circle" />
            <Text h1>Hans Vergara Chamorro</Text>
            <Badge type="default">
              <strong> Ingeniero en Informática</strong>
            </Badge>
            <Text p style={{ color: "#585858" }}>
              Full Stack Developer, apasionado por la programación y
              autodidacta, me fascina todo lo que tenga que ver con nuevas
              tecnologías y trabajar en proyectos complejos
            </Text>
          </Card>
        </Grid>
      </Grid.Container>
    </header>
  );
};

export default Header;
