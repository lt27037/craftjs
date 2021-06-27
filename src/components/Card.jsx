import React  from "react";
import Text from "./Text";
import Button from "./Button";
import Container from "./Container";

import { Element} from "@craftjs/core";

export const Card = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
      <Element is={Container} id="text-xdd" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element is={Container} id="buttons-xd" canvas>
        <Button size="small" text="Learn more" variant="contained" color="primary" />
      </Element>
    </Container>
  )
}
