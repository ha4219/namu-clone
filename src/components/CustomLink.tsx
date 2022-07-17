import React from 'react';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

const CustomLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <LinkWrapper color="green" underline="hover" component="a" href={href}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <title>Link</title>
      <path
        d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="64"
      />
    </svg>
    {children}
  </LinkWrapper>
);

const LinkWrapper = styled(Link)`
  & .ionicon {
    width: 1rem;
    height: 1rem;
    background: green;
    color: #fff;
    padding: 0 0.15em;
    vertical-align: middle;
  }
  :visited {
    color: green;
  }
`;

export default CustomLink;
