import { useState } from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";

export default function PricingList() {
  const [yearly, setYearly] = useState<boolean>(false);

  return (
    <Container>
      <SwitcherWrapper>
        <span className={`${yearly && "yearly"}`}>Monthly</span>
        <Switcher
          type='button'
          onClick={() => setYearly(prev => !prev)}
          className={`${yearly && "yearly"}`}
        ></Switcher>
        <span className={`${yearly && "yearly"}`}>Yearly</span>
      </SwitcherWrapper>
      <List>
        {[
          {
            title: "Basic",
            description:
              "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            basePrice: 19,
          },
          {
            title: "Pro",
            description:
              "More advanced features available. Recommended for photography veterans and professionals.",
            basePrice: 39,
            mainCard: true,
          },
          {
            title: "Business",
            description:
              "Additional features available such as more detailed metrics. Recommended for business owners.",
            basePrice: 99,
          },
        ].map(card => (
          <PricingCard key={card.title} yearly={yearly} data={card} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.section`
  background: ${props => props.theme.colors.white};
  padding: 6.4rem 29px 0;

  @media (min-width: 768px) {
    padding: 11.2rem 40px 0;
  }

  @media (min-width: 768px) {
    padding: 12rem 40px 0;
  }
`;

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 139%;
    color: ${props => props.theme.colors.black};
    transition: opacity 0.3s ease;
  }

  span:first-of-type {
    margin-right: 3.2rem;

    &.yearly {
      opacity: 0.5;
    }
  }

  span:last-of-type {
    margin-left: 3.2rem;
    opacity: 0.5;

    &.yearly {
      opacity: 1;
    }
  }
`;

const Switcher = styled.button`
  width: 6.4rem;
  height: 3.2rem;
  background: ${props => props.theme.colors.gray};
  border-radius: 1.6rem;
  border: none;
  position: relative;
  cursor: pointer;

  &.yearly::before {
    left: 36px;
  }

  &::before {
    content: "";
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background: ${props => props.theme.colors.black};
    display: block;
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 1.6rem;

  @media (min-width: 950px) {
    display: flex;
    align-items: center;
    margin: 4.8rem 0 0;
    justify-content: center;
  }
`;
