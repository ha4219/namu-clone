import React from 'react';
import styled from '@emotion/styled';
import { Box, Breadcrumbs } from '@mui/material';

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
          <img src={url} />
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
          1999년 1월 (24세)
          <br />
          경기도
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>거주지</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">경기도 안성시</ProfileBoxContent>
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
          현일초등학교
          <br />
          안일중학교
          <br />
          동일공업고등학교
          <br />
          동아방송예술대학교
          <br />
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>별명</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">노게이</ProfileBoxContent>
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
`;
const ProfileBoxRow = styled.tr``;
const ProfileBoxContent = styled.td`
  padding: 0;

  padding: 5px 10px;
`;

export default ProfileBox;
