import React from 'react';
import { Link } from '@mui/material';

const TagLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link color="secondary" underline="hover" component="a" href={href} px={1}>
    {children}
  </Link>
);

export default TagLink;
