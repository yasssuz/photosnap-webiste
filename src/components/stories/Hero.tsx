import styled from "styled-components";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <ImageArea />
      <TextArea>
        <Featured>LAST MONTH’S FEATURED STORY</Featured>
        <Title>HAZY FULL MOON OF APPALACHIA</Title>
        <div>
          <Published>March 2nd 2020</Published>
          <Author className='author'>by John Appleseed</Author>
        </div>
        <Description>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains&quot;, especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </Description>
        <Link href='/stories' passHref>
          <CustomLink>
            Read the story
            <img src='/assets/shared/arrow-white.svg' alt='arrow' />
          </CustomLink>
        </Link>
      </TextArea>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: 31.7rem 49.5rem;
`;

const ImageArea = styled.div`
  background: url("/assets/stories/moon-of-appalacia.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const TextArea = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.colors.white};
`;

const Featured = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1.6rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

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

const Published = styled.time`
  margin-right: 0.9rem;
  font-size: 1.3rem;
  line-height: 1.7rem;
  opacity: 0.75;
`;

const Author = styled.address`
  display: inline;
  font-size: 1.3rem;
  line-height: 1.7rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
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
