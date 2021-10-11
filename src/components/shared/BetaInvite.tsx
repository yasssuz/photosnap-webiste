import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import BgImage from "../../../public/assets/shared/bg-beta.jpg";

export default function BetaInvite() {
  return (
    <Container>
      <ColorfullLine />
      <ImageWrapper>
        <Image
          src={BgImage}
          objectFit='cover'
          layout='fill'
          quality={100}
          alt='beta'
          placeholder='blur'
        />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          We’re in beta. <br /> Get your invite <br /> today!
        </Title>
        <Link href='/' passHref>
          <CustomLink>
            get an invite
            <img src='/assets/shared/arrow-white.svg' alt='arrow' />
          </CustomLink>
        </Link>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  color: ${props => props.theme.colors.white};
  padding: 0 33px;
  position: relative;
  height: 28.8rem;

  @media (min-width: 768px) {
    height: 28rem;
    padding: 0 40px;
  }
`;

const ColorfullLine = styled.div`
  position: absolute;
  height: 6px;
  width: 36%;
  left: 24px;
  top: 0;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );

  @media (min-width: 768px) {
    height: 100%;
    width: 6px;
    left: 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 1500px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.41rem;
    margin-bottom: 0;
  }

  @media (min-width: 950px) {
    font-size: 4.5rem;
  }
`;

const CustomLink = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1.7rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  cursor: pointer;

  &:hover {
    img {
      margin-left: 8rem;
    }
  }

  @media (min-width: 950px) {
    margin: 0;
    text-align: right;
  }

  img {
    transition: margin-left 0.3s ease;
    margin-left: 1.8rem;
  }
`;
