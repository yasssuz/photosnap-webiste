import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  position: "right" | "left" | string;
  title: string;
  description: string;
  link?: "story" | "invite" | string;
  hero?: boolean;
  image: string;
  blur: string | undefined;
}

export default function Banner({
  position,
  title,
  description,
  link,
  hero,
  image,
  blur,
}: BannerProps) {
  const isLeft = position === "left" ? true : false;

  return (
    <Container className={`${hero && "hero"} ${isLeft && "left"}`}>
      <ImageContainer>
        <Image
          objectFit='cover'
          quality={100}
          src={image}
          layout='fill'
          alt={title}
          blurDataURL={blur}
          placeholder='blur'
        />
      </ImageContainer>
      <TextArea className={`${hero && "hero"}`}>
        {hero && <ColorfullLine />}
        {hero ? <Title>{title}</Title> : <SubTitle>{title}</SubTitle>}
        <Description>{description}</Description>
        {link &&
          (link === "story" ? (
            <Link href='/stories' passHref>
              <CustomLink>
                Read the story
                {hero ? (
                  <img src='/assets/shared/arrow-white.svg' alt='arrow' />
                ) : (
                  <img src='/assets/shared/arrow-black.svg' alt='arrow' />
                )}
              </CustomLink>
            </Link>
          ) : (
            <Link href='/' passHref>
              <CustomLink>
                get an invite
                {hero ? (
                  <img src='/assets/shared/arrow-white.svg' alt='arrow' />
                ) : (
                  <img src='/assets/shared/arrow-black.svg' alt='arrow' />
                )}
              </CustomLink>
            </Link>
          ))}
      </TextArea>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: 27.1rem auto;

  @media (min-width: 768px) {
    grid-template-columns: auto 49.5rem;
    grid-template-rows: 60rem 0 !important;

    &.hero {
      grid-template-rows: 65rem 0 !important;
    }

    &.left {
      grid-template-columns: 49.5rem auto;

      div:last-of-type {
        grid-column: 1 /2;
        grid-row: 1 /2;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: 1.3fr 1fr;

    &.left {
      grid-template-columns: 1fr 1.3fr;
    }
  }

  &.hero {
    grid-template-rows: 29.4rem auto;
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
    height: 200px;
    width: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  @media (min-width: 950px) {
    height: 304px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const TextArea = styled.div`
  padding: 0 29px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  min-height: 41.9rem;
  position: relative;

  @media (min-width: 950px) {
    min-width: 49.5rem;
  }

  &.hero {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.black};
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.41rem;
  }

  @media (min-width: 950px) {
    width: 15ch;
    margin: 0 auto;
    font-size: 4.5rem;
  }
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.41rem;
  }

  @media (min-width: 950px) {
    max-width: 15ch;
    margin: 0 auto;
    font-size: 4.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  margin: 1.6rem 0 2.3rem;

  @media (min-width: 768px) {
    margin: 2.1rem auto 4.8rem;
  }

  @media (min-width: 950px) {
    max-width: 40ch;
    font-size: 1.7rem;
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
    width: 100%;
    max-width: 47.5rem;
    margin: 0 auto;
    text-align: left;
  }

  img {
    transition: margin-left 0.3s ease;
    margin-left: 1.8rem;
  }
`;
