import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: 1fr;
    align-items: start;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr auto;
    gap: 32px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-column: 2/3;
  grid-row: 1/3;

  @media (${QUERIES.tabletAndUp}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-column: 2/3;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
