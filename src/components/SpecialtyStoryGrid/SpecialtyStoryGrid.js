import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
overflow: hidden;

@media (${QUERIES.laptopAndUp}) {
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
`;

const MarketsSection = styled.section`
`;

const MarketCards = styled.div`;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(3, auto);
gap: 12px;

@media (${QUERIES.tabletAndUp}) {
  grid-template-columns: repeat(4, 1fr);
}

@media (${QUERIES.laptopAndUp}) {
  grid-template-columns: repeat(3, 1fr);
}
`
const SportsSection = styled.section`


`;

const SportsStories = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

@media (${QUERIES.tabletAndUp}) {
  grid-template-columns: 150px;
  grid-auto-flow: column;
  width: 150%;
}

@media (${QUERIES.laptopAndUp}) {
  width: 220%;
}
`;

export default SpecialtyStoryGrid;
