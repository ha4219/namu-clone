import React from 'react';
import styled from '@emotion/styled';
import { Box, Breadcrumbs } from '@mui/material';
import TagLink from '../TagLink';
import TopTagLink from '../TopTagLink';

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
          <img
            width={24}
            style={{ marginRight: 3, verticalAlign: 'middle' }}
            src="https://w.namu.la/s/948050864baba836bbc7384af3845adfc59df07821f315feb63201a03ff7d3e2e40cdf682e41fe81cde623d4e7b9e31275fe8cfeee3067b0ba3b4a7dd7d4f0959575a394bd070808bba94aebfe527e8ddbf6d47d3f7680f365093a30d0f67706"
          />
          <TagLink href="#">대한민국 육군</TagLink>
          <TagLink href="#">병장</TagLink>
          만기전역
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent className="label">
          <strong>학력</strong>
        </ProfileBoxContent>
        <ProfileBoxContent className="border">
          <TagLink href="https://namu.wiki/w/%ED%98%84%EC%9D%BC%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90">
            현일초등학교
          </TagLink>
          <br />
          <TagLink href="https://anil-m.goept.kr/anil-m/main.do">
            안일중학교
          </TagLink>
          <br />
          <TagLink href="https://namu.wiki/w/%EB%8F%99%EC%9D%BC%EA%B3%B5%EC%97%85%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90">
            동일공업고등학교
          </TagLink>
          <br />
          <TagLink href="https://namu.wiki/w/%EB%8F%99%EC%95%84%EB%B0%A9%EC%86%A1%EC%98%88%EC%88%A0%EB%8C%80%ED%95%99%EA%B5%90">
            동아방송예술대학교
          </TagLink>
          <TagLink href="https://namu.wiki/w/%EC%98%81%ED%99%94%EC%98%81%EC%83%81%ED%95%99%EA%B3%BC">
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
          노게이<TopTagLink>[1]</TopTagLink>
          <TopTagLink>[2]</TopTagLink>
          <TopTagLink>[3]</TopTagLink>
          <TopTagLink>[4]</TopTagLink>
          <TopTagLink>[5]</TopTagLink>
          <TopTagLink>[6]</TopTagLink>, 차은우, 박보검, 송강
        </ProfileBoxContent>
      </ProfileBoxRow>
      <ProfileBoxRow>
        <ProfileBoxContent colSpan={2} className="border">
          <Breadcrumbs
            separator="|"
            sx={{ display: 'flex', justifyContent: 'center', color: '#fff' }}
          >
            <Box
              component="a"
              href="https://www.youtube.com/channel/UCsyTehrT9OD_-s2jClbsoRw"
            >
              <img
                width={20}
                style={{ verticalAlign: 'middle' }}
                src="https://w.namu.la/s/0234a4424011b37bad371ec569978fc3fcbea877b1cdff4672890639045092ffe895ff91f17f48e847fe3664866675da272775b5939b11fae30ee70c594f4d63b63802ded06a7675271bc0426bed8c900c6989c70cc19603acc08ffad53f4c2c"
              />
            </Box>
            <Box component="a" href="https://www.instagram.com/nhs6040/?hl=en">
              <img
                width={20}
                style={{ verticalAlign: 'middle' }}
                src="https://w.namu.la/s/eef6347d4d73181f644798e66f41e8d401e6456cb6900dc18e2adea3063786d6899111f5402ce000614fd34a4f33f74bc100a3715644e98a3a16d523cc063882f0a431874886c9d1baaf22387efe30a3348f34836ea8c0c919c8ee73dc3e902b"
              />
            </Box>
          </Breadcrumbs>
        </ProfileBoxContent>
      </ProfileBoxRow>
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
