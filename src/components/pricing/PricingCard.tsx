import styled from "styled-components";
import Link from "next/link";

interface PricingCardProps {
  data: {
    title: string;
    description: string;
    basePrice: number;
    mainCard?: boolean;
  };
  yearly: boolean;
}

export default function PricingCard({ data, yearly }: PricingCardProps) {
  const { title, description, basePrice, mainCard = false } = data;
  const priceSelector = yearly ? basePrice * 10 : basePrice;
  const formattedPrice = priceSelector.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  return (
    <Container className={`${mainCard && "main"}`}>
      {mainCard && <ColorfullLine />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{`$${formattedPrice}`}</Price>
      <PaidPer>per {yearly ? "year" : "month"}</PaidPer>
      <Link href='/pricing' passHref>
        <PickBtn>Pick Plan</PickBtn>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  background: ${props => props.theme.colors.lightGray};
  padding: 5.6rem 36px 4rem;
  text-align: center;
  color: ${props => props.theme.colors.black};
  margin-top: 2.4rem;
  position: relative;

  &.main {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};

    a {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black};
    }
  }
`;

const ColorfullLine = styled.div`
  width: 100%;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
`;

const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 104%;
  margin-bottom: 1.8rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 167%;
  opacity: 0.6;
`;

const Price = styled.strong`
  font-size: 4rem;
  line-height: 120%;
  letter-spacing: 0.41rem;
  margin-top: 4rem;
  display: inline-block;
`;

const PaidPer = styled.small`
  display: block;
  font-size: 1.5rem;
  line-height: 167%;
  opacity: 0.6;
  margin-bottom: 4rem;
`;

const PickBtn = styled.a`
  background: ${props => props.theme.colors.black};
  display: block;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  font-weight: bold;
  padding: 1.2rem;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gray} !important;
    color: ${props => props.theme.colors.black};
  }
`;
