import { Button, Container, Link, Typography, useTheme } from '@mui/material';
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
      <ProfileBox url={data.file.publicURL} />
      <Typography variant="title">
        <TagLink href="#1">1.</TagLink>
        개요
      </Typography>
      <Typography variant="content">
        12312312313
        <TagLink href="#">123123123</TagLink>
        <CustomLink href="/">11111</CustomLink>
      </Typography>
      <Typography variant="content">
        12312312313
        <CustomLink href="/">11111</CustomLink>
      </Typography>
      <Typography variant="content">
        12312312313
        <CustomLink href="/">11111</CustomLink>
      </Typography>
      <Typography variant="content">
        12312312313
        <CustomLink href="/">11111</CustomLink>
        <TopTagLink>[1]</TopTagLink>
      </Typography>

      <Typography variant="title">
        <TagLink href="#2">2.</TagLink>
        사건 사고
      </Typography>
      <Typography variant="content">
        12312312313
        <CustomLink href="/">11111</CustomLink>
        <TopTagLink>[1]</TopTagLink>
      </Typography>
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
