import React from 'react';
import styled from '@emotion/styled';
import { Box, Breadcrumbs } from '@mui/material';
import TagLink from '../TagLink';

const ProfileBox = ({ url }) => {
  return (
    <ProfileBoxWrapper>
      <ProfileBoxRow>
        <ProfileBoxContent colSpan={2} className="center bg">
          <strong style={{ 'font-size': '1.25em' }}>노상철</strong>
          <br />
          <strong>no sang chul</strong>
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent colSpan={2} style={{ padding: 0 }}>
          <img src={`/namu-clone${url}`} className="img" />
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>본명</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">노상철</ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>출생</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          <TagLink href="https://namu.wiki/w/1999">1999년</TagLink>
          <TagLink href="https://namu.wiki/w/1%EC%9B%94%2018%EC%9D%BC">
            1월 18일
          </TagLink>
          (24세)
          <br />
          <TagLink href="https://namu.wiki/w/%EA%B2%BD%EA%B8%B0%EB%8F%84">
            경기도
          </TagLink>
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>거주지</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          <TagLink href="https://namu.wiki/w/%EA%B2%BD%EA%B8%B0%EB%8F%84">
            경기도
          </TagLink>
          <TagLink href="https://namu.wiki/w/%EC%95%88%EC%84%B1%EC%8B%9C">
            안성시
          </TagLink>
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>병역</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          대한민국 육군 병장 만기전역
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>학력</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          <TagLink href="https://hyunil-e.goept.kr/hyunil-e/main.do">
            현일초등학교
          </TagLink>
          <br />
          <TagLink href="https://anil-m.goept.kr/anil-m/main.do">
            안일중학교
          </TagLink>
          <br />
          <TagLink href="http://www.di.hs.kr/">동일공업고등학교</TagLink>
          <br />
          <TagLink href="http://www.dima.ac.kr/">동아방송예술대학교</TagLink>
          <TagLink href="http://www.dima.ac.kr/sub_03/sub_03_06.aspx">
            영상제작과
          </TagLink>

          <br />
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>MBTI</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          <TagLink href="https://namu.wiki/w/INFP">INFP</TagLink>
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>별명</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          노게이, 차은우, 박보검, 송강
        </ProfileBoxContent>
      </ProfileBoxRow>
      {/* <ProfileBoxRow>
        <ProfileBoxContent colSpan={2} className="border">
          <Breadcrumbs>
            <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
          </Breadcrumbs>
        </ProfileBoxContent>
      </ProfileBoxRow> */}
    </ProfileBoxWrapper>
  );
};

const ProfileBoxWrapper = styled.table`
  border-spacing: 0;
  color: #ffffff;
  width: 100%;
  border: ${({ theme }) => `2px solid ${theme.palette.third.main}`};

  & .center {
    text-align: center;
    border-left: 0;
  }

  & .bg {
    background-color: ${({ theme }) => theme.palette.third.main};
  }

  & .border {
    border: 1px solid #383b40;
  }

  & .label {
    text-align: center;
    border-left: 0;
    border-top: 1px solid #383b40;
    background-color: ${({ theme }) => theme.palette.third.main};
  }

  & .img {
    width: 100%;
    object-fit: cover;
  }
`;
const ProfileBoxRow = styled.tr`
  border-color: ${({ theme }) => theme.palette.third.main};
`;
const ProfileBoxContent = styled.td`
  padding: 0;
  border-color: ${({ theme }) => theme.palette.third.main};

  padding: 5px 10px;
`;

export default ProfileBox;
