import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  image: {
    src: string;
    blurDataURL?: string | undefined;
  };
  title: string;
  author: string;
}

export default function StoryCard({ image, title, author }: StoryCardProps) {
  return (
    <li>
      <Link href='/stories' passHref>
        <Content>
          <Filter className='filter_xaczxl3' />
          <Image
            layout='fill'
            src={image.src}
            blurDataURL={image.blurDataURL}
            placeholder='blur'
            alt={title}
            objectFit='cover'
            quality={100}
          />
          <Title>{title}</Title>
          <Author className='author'>by {author}</Author>
          <Divider />
          <CustomLink>
            read story
            <img src='/assets/shared/arrow-white.svg' alt='read' />
          </CustomLink>
          <CustomBorder className='customBorder_xtabu23' />
        </Content>
      </Link>
    </li>
  );
}

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0.27%,
    rgba(0, 0, 0, 0.661222) 100%
  );
  z-index: 9;
`;

const Content = styled.a`
  position: relative;
  width: 100%;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 33px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-8%);
    z-index: 90;

    img {
      margin-left: 9rem;
    }

    .filter_xaczxl3 {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0.27%,
        rgba(0, 0, 0, 0.761222) 100%
      );
    }

    .customBorder_xtabu23 {
      height: 6px;
    }
  }

  @media (min-width: 768px) {
    height: 50em;
  }
`;

const Title = styled.strong`
  z-index: 10;
  position: relative;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Author = styled.address`
  z-index: 10;
  position: relative;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-top: 0.4rem;
  font-style: normal;
`;

const Divider = styled.hr`
  height: 2px;
  border: none;
  background: #ffffff;
  opacity: 0.55;
  margin: 1.6rem 0 2rem;
`;

const CustomLink = styled.span`
  z-index: 10;
  position: relative;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  img {
    margin-left: 2rem;
    transition: margin-left 0.3s ease-in-out;
  }
`;

const CustomBorder = styled.div`
  height: 0px;
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 11;
  left: 0;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
  transition: height 0.2s linear;
`;
