import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';

function AuthorItem({ name, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" to={`/authors/${slug.current}`}>
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.alt}
        className="profileImage"
      />
      {/* <Button ></Button> */}
      <Title >{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;