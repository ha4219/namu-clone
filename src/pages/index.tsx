import {
  Container,
  Typography,
  useTheme,
  Collapse,
  Grid,
  Box,
} from '@mui/material';
import * as React from 'react';
import CustomLink from '../components/CustomLink';
import TopTagLink from '../components/TopTagLink';
import CenterTagLink from '../components/CenterTagLink';
import TagLink from '../components/TagLink';
import ProfileBox from '../components/profile/ProfileBox';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const IndexPage = ({ data }) => {
  console.log(data);

  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.background.paper, paddingY: 5 }}
      maxWidth="md"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomIndexWrapper></CustomIndexWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileBox url={`${data.file.publicURL}`} />
        </Grid>
      </Grid>
      <Typography variant="title">
        <TagLink href="#1">1.</TagLink>
        개요
      </Typography>
      <Collapse in={true}>
        <Typography variant="content">
          놀자놀자 원탑, 노상철 그는 사람인가?
        </Typography>
      </Collapse>
      <Typography variant="title" sx={{ marginBottom: 0 }}>
        <TagLink href="#2">2.</TagLink>
        사건 사고
      </Typography>
      <Collapse in={true}>
        <Typography variant="titleSub">
          <TagLink href="#2.1">2.1.</TagLink>
          게이설
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">
            2015년 중학교 2학년 시절 영어 교과서에서 지문으로 텐징
            노르상철이라고 실림.
          </Typography>
        </Collapse>
        <Typography variant="titleSub">
          <TagLink href="#2.2">2.2.</TagLink>
          일본 여행 중 실종
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">
            여행 중 컨디션이 좋지 않다고 놀자놀자 친구들을 속인 뒤 금일 낮에
            홍등가에서 유흥을 즐겼다는 것으로 추측
          </Typography>
        </Collapse>
        <Typography variant="titleSub">
          <TagLink href="#2.3">2.3.</TagLink>별 보러 갈래?
        </Typography>
        <Collapse in={true}>
          <Typography variant="content">
            2021년 10월 14일, 김경빈과 같이 게임을 하기로 약속했지만, 뒤에
            여자친구가 별 보러 가자는 소리에 헐레벌떡 뛰어나가 놀자놀자 친구들을
            버리고 야스하러 감.
          </Typography>
        </Collapse>
      </Collapse>
      <Typography variant="title">
        <TagLink href="#3">3.</TagLink>
        여담
      </Typography>
      <Collapse in={true}>
        <Typography variant="content">
          <Box py={0.5}>
            <CenterTagLink>[1]</CenterTagLink>
            노상철 게이
          </Box>
          <Box py={0.5}>
            <CenterTagLink>[2]</CenterTagLink>
            노상철 게이
          </Box>
          <Box py={0.5}>
            <CenterTagLink>[3]</CenterTagLink>
            노상철 게이
          </Box>
          <Box py={0.5}>
            <CenterTagLink>[4]</CenterTagLink>
            노상철 게이
          </Box>
          <Box py={0.5}>
            <CenterTagLink>[5]</CenterTagLink>
            노상철 게이
          </Box>
          <Box py={0.5}>
            <CenterTagLink>[6]</CenterTagLink>
            노상철 게이
          </Box>
        </Typography>
      </Collapse>
    </Container>
  );
};

const CustomIndexWrapper = styled(Box)``;

export const data = graphql`
  query {
    file(relativePath: { eq: "snowmiz.jpg" }) {
      id
      publicURL
    }
  }
`;

export default IndexPage;
