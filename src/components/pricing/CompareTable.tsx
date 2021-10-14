import styled from "styled-components";

export default function CompareTable() {
  return (
    <Container>
      <Title>The features</Title>
      <FeaturesList>
        {[
          {
            featureTitle: "unlimited story posting",
            featureDis: 3,
          },
          {
            featureTitle: "unlimited photo upload",
            featureDis: 3,
          },
          {
            featureTitle: "unlimited custom content",
            featureDis: 2,
          },
          {
            featureTitle: "customize metadata",
            featureDis: 2,
          },
          {
            featureTitle: "advanced metrics",
            featureDis: 1,
          },
          {
            featureTitle: "photo downloads",
            featureDis: 1,
          },
          {
            featureTitle: "search engine indexing",
            featureDis: 1,
          },
          {
            featureTitle: "custom analytics",
            featureDis: 1,
          },
        ].map(feature => (
          <FeatureItem key={feature.featureTitle}>
            <FeatureTitle>{feature.featureTitle}</FeatureTitle>
            <DisWrapper>
              <Dis>
                <span>basic</span>
                {feature.featureDis === 3 ? (
                  <img src='/assets/pricing/check.svg' alt='checked' />
                ) : (
                  <div style={{ width: 18, height: 15 }} />
                )}
              </Dis>
              <Dis>
                <span>pro</span>
                {feature.featureDis >= 2 ? (
                  <img src='/assets/pricing/check.svg' alt='checked' />
                ) : (
                  <div style={{ width: 18, height: 15 }} />
                )}
              </Dis>
              <Dis>
                <span>business</span>
                {feature.featureDis >= 1 && (
                  <img src='/assets/pricing/check.svg' alt='checked' />
                )}
              </Dis>
            </DisWrapper>
          </FeatureItem>
        ))}
      </FeaturesList>
    </Container>
  );
}

const Container = styled.section`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  padding: 6.4rem 29px;

  @media (min-width: 768px) {
    padding: 6.4rem 40px;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding: 0 0 2.3rem;
  text-transform: uppercase;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-top: 2.3rem;
  display: grid;
  gap: 2.3rem;
`;

const FeatureItem = styled.li`
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding-bottom: 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const FeatureTitle = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin: 0 0 0 15px;
    width: 349px;
  }
`;

const DisWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Dis = styled.li`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    & + & {
      width: 140px;
    }
  }

  span {
    text-transform: uppercase;
    font-size: 1.3rem;
    line-height: 1.7rem;
    letter-spacing: 0.16rem;
    opacity: 0.5;
    display: block;
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
