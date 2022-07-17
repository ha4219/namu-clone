import styled from '@emotion/styled';
import { Link } from '@mui/material';
import React from 'react';

const TopTagLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinkWrapper color="secondary" underline="hover" pr={0.5}>
      {children}
    </LinkWrapper>
  );
};

const LinkWrapper = styled(Link)`
  white-space: nowrap;
  font-size: 1em;
  vertical-align: bottom;
  cursor: pointer;
  word-break: break-all;
  line-height: 1.5;
`;
export default TopTagLink;
