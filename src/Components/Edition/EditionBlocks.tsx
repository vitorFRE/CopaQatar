import styled from 'styled-components';
import type {
  EditionHighlight,
  EditionPlaceholderContent,
} from '../../edition/editionConfig';
import TitleH1 from '../Title/TitleH1';

const Section = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Intro = styled.p`
  max-width: 760px;
  margin: 0 auto 40px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.greyColor};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  padding: 28px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.12);

  h2 {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.35rem;
  }

  p {
    color: ${({ theme }) => theme.colors.greyColor};
    line-height: 1.6;
  }
`;

const PlaceholderCard = styled.article`
  padding: 40px 32px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  box-shadow: 3px 3px 3px rgba(60, 57, 57, 0.12);
  text-align: center;

  h2 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.greyColor};
    line-height: 1.7;
    font-size: 1.05rem;
  }
`;

type EditionHighlightsSectionProps = {
  title: string;
  description: string;
  items: EditionHighlight[];
};

export const EditionHighlightsSection = ({
  title,
  description,
  items,
}: EditionHighlightsSectionProps) => (
  <Section>
    <TitleH1 text={title} />
    <Intro>{description}</Intro>
    <Grid>
      {items.map((item) => (
        <Card key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </Card>
      ))}
    </Grid>
  </Section>
);

type EditionPlaceholderSectionProps = {
  title: string;
  content: EditionPlaceholderContent;
};

export const EditionPlaceholderSection = ({
  title,
  content,
}: EditionPlaceholderSectionProps) => (
  <Section>
    <TitleH1 text={title} />
    <PlaceholderCard>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </PlaceholderCard>
  </Section>
);
