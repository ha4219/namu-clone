import { Container, Typography, useTheme, Collapse, Grid } from '@mui/material';
import * as React from 'react';
import CustomLink from '../components/CustomLink';
import TopTagLink from '../components/TopTagLink';
import TagLink from '../components/TagLink';
import ProfileBox from '../components/profile/ProfileBox';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);

  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.background.paper, paddingY: 5 }}
      maxWidth="md"
    >
      <Grid container>
        <Grid item xs={12}>
          <ProfileBox url={`${data.file.publicURL}`} />
        </Grid>
      </Grid>
      <Typography variant="title">
        <TagLink href="#1">1.</TagLink>
        개요
      </Typography>
      <Collapse in={true}>
        <Typography variant="content"></Typography>
      </Collapse>
      <Typography variant="title">
        <TagLink href="#2">2.</TagLink>
        사건 사고
      </Typography>
      <Collapse in={true}>
        <Typography variant="titleSub">
          <TagLink href="#2.1">2.1.</TagLink>
          게이설
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">123123</Typography>
        </Collapse>
        <Typography variant="titleSub">
          <TagLink href="#2.2">2.2.</TagLink>
          여성설
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">123123</Typography>
        </Collapse>
        <Typography variant="titleSub">
          <TagLink href="#2.3">2.3.</TagLink>
          하남자설
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">123123</Typography>
        </Collapse>
      </Collapse>
      <Typography variant="title">
        <TagLink href="#3">3.</TagLink>
        여담
      </Typography>
      <Collapse in={true}>
        <Typography variant="content"></Typography>
      </Collapse>
    </Container>
  );
};

export const data = graphql`
  query {
    file(relativePath: { eq: "snowmiz.jpg" }) {
      id
      publicURL
    }
  }
`;

export default IndexPage;
