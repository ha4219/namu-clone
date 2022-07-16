import { Button, Container, Link, Typography } from '@mui/material';
import * as React from 'react';
import LinkG from 'gatsby';

const IndexPage = () => {
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => {}}>
        123
      </Button>
      testtest
      <Typography variant="content">
        12312312313
        <Link color="secondary" underline="none" component="a" href="/">
          11111
        </Link>
      </Typography>
    </Container>
  );
};

export default IndexPage;
