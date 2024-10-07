import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              <SecondaryStory key={story.id} {...story} />
              {index < 2 && <LineBreak />}
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              <OpinionStory key={story.id} {...story} />
              <LineBreak />
            </>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const LineBreak = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-gray-300);
  margin: 12px 0;

  @media (${QUERIES.tabletAndUp}) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
  'advertisement'
    'opinion-stories';
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

@media (${QUERIES.laptopAndUp}) {
  grid-template-areas:
  'main-story secondary-stories opinion-stories'
  'main-story advertisement advertisement';
}
  align-items: start;
`;

const MainStorySection = styled.section`
  grid-area: main-story;

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media (${QUERIES.tabletAndUp}) {
    grid-column: 2/3;
  }
`;

const StoryList = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (${QUERIES.tabletAndUp}) {
    flex-direction: row;
  }
  @media (${QUERIES.laptopAndUp}) {
    flex-direction: column;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
