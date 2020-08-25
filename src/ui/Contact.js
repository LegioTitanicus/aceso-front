import React from "react";
import { Toolbar, Box, Container } from "@material-ui/core";

const Contact = (props) => {
  return (
    <React.Fragment>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          {[...new Array(100)]
            .map(
              () => `CONTACT Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
