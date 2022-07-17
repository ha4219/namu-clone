import React from 'react';
import { Link } from '@mui/material';

const TagLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link color="secondary" underline="hover" component="a" href={href} pr={0.5}>
    {children}
  </Link>
);

export default TagLink;
