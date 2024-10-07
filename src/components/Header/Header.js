import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>

          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <DesktopWrapper>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopWrapper>
        <Logo />
        <ButtonWrapper>
          <Button>Subscribe</Button>
          <button>Already a subscriber?</button>
        </ButtonWrapper>
      </MainHeader>
    </header>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-style: italic;
  align-items: center;
  text-decoration: underline;
  gap: 8px;
  
  @media (${QUERIES.laptopAndUp}) {
    justify-self: end;
    align-self: end;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }
`;

const DesktopWrapper = styled.div`
  display: none;

  @media (${QUERIES.desktopAndUp}) {
    display: flex;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.desktopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;
  }
`;

export default Header;
