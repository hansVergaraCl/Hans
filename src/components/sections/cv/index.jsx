import "./style.css";
import {
  Grid,
  Card,
  Text,
  Capacity,
  Spacer,
  Collapse,
  Description,
  Button,
} from "@geist-ui/react";

import { skills } from "./skills";
import { experience } from "./experience";
import { courses } from "./courses";
import { curriculumB64 } from "./files";

const Cv = () => {
  const downloadCV = () => {
    var a = document.createElement("a"); //Create <a>
    a.href = curriculumB64;
    a.download = "HansVergaraCV.pdf"; //File name Here
    a.click();
  };
  return (
    <section>
      <Grid.Container gap={2}>
        <Grid xs={24} sm={15} justify="center">
          <Card shadow width="100%" style={{ textAlign: "left" }}>
            <Text h4>Experiencia</Text>
            <Spacer h={1} />
            <Collapse.Group>
              {experience.map((exp) => (
                <Collapse
                  title={exp.empresa}
                  subtitle={exp.periodo}
                  initialVisible={exp.open}
                  key={Math.random()}
                >
                  <Text>{exp.descripcion}</Text>
                </Collapse>
              ))}
            </Collapse.Group>
            <Spacer h={1} />
            <div align="end">
              <Button auto type="secondary-light" onClick={() => downloadCV()}>
                {" "}
                <strong>Descargar CV</strong>
              </Button>
            </div>
          </Card>
        </Grid>

        <Grid xs={24} sm={9}  justify="center">
          <Card shadow width="100%" style={{ textAlign: "left" }}>
            <Text h4>Skills</Text>
            <Spacer />
            <Grid.Container gap={2} justify="left">
              {skills.map((skill) => (
                <Grid key={Math.random()} xs={12}>
                  <div>
                    <Capacity value={skill.experience} />
                    <Text span>{skill.title}</Text>
                  </div>
                </Grid>
              ))}
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer h={2} />
      <Grid.Container gap={2}>
        <Grid xs={24} sm={9}  justify="center">
          <Card shadow width="100%" style={{ textAlign: "left" }}>
            <Text h4>Cursos / Certificaciones</Text>
            <Spacer h={1} />
            {courses.map((course) => (
              <div key={Math.random()}>
                <Description title={course.date} content={course.title} />
                <Spacer h={1} />
              </div>
            ))}
          </Card>
        </Grid>

        <Grid xs={24} sm={15}  justify="center">
          <Card shadow width="100%" style={{ textAlign: "left" }}>
            <Text h4>Portafolio</Text>
            <Spacer />
          </Card>
        </Grid>
      </Grid.Container>
    </section>
  );
};

export default Cv;
