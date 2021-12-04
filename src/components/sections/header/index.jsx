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
              <strong> Full Stack Developer</strong>
            </Badge>
            <Text p style={{ color: "#585858" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              modi fugiat fugit minus ut quod! Minus dolorum fuga ullam itaque
              aliquam, explicabo illum, corrupti est sint quaerat consequuntur
              blanditiis quis!
            </Text>
          </Card>
        </Grid>
      </Grid.Container>
    </header>
  );
};

export default Header;
