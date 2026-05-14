import simbolo from '../../assets/simbolo.svg';
import fifaeqatar from '../../assets/fifaeqatar.svg';
import {
  PiGlobeSimple,
  PiMapPinArea,
  PiSoccerBall,
  PiUsersThree,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useEdition } from '../../edition/EditionContext';
import { buildEditionPath } from '../../edition/editionConfig';
import {
  ActionGroup,
  Container,
  HeroContent,
  HeroCup,
  HeroStatItem,
  HeroStats,
} from './BannerStyles';

const Banner = () => {
  const { slug, brandStyle, hero } = useEdition();
  const heroStats = [
    { value: '16', label: 'Cidades', icon: <PiMapPinArea size={20} /> },
    { value: '3', label: 'Países', icon: <PiGlobeSimple size={20} /> },
    { value: '48', label: 'Seleções', icon: <PiUsersThree size={20} /> },
    { value: '104', label: 'Partidas', icon: <PiSoccerBall size={20} /> },
  ];

  return (
    <Container $brandStyle={brandStyle}>
      {brandStyle === 'legacy' ? (
        <div className="banner_legacy">
          <img src={simbolo} alt="Simbolo Copa do mundo Qatar" />
          <img src={fifaeqatar} alt="Logo Qatar + Fifa" />
        </div>
      ) : (
        <div className="banner_modern">
          <HeroCup src="/cup.png" alt="" aria-hidden="true" />
          <HeroContent $brandStyle={brandStyle}>
            <span className="hero_eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p className="hero_description">{hero.description}</p>
            <p className="hero_meta">
              16 cidades. 3 países. 1 campeão mundial.
            </p>
            <ActionGroup $brandStyle={brandStyle}>
              <Link to={buildEditionPath(slug, 'partidas')}>Ver partidas</Link>
              <Link to={buildEditionPath(slug, 'informacoes')}>Informações</Link>
            </ActionGroup>
          </HeroContent>

          <HeroStats>
            {heroStats.map((item) => (
              <HeroStatItem key={item.label}>
                <span className="hero_stat_icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </HeroStatItem>
            ))}
          </HeroStats>
        </div>
      )}
    </Container>
  );
};

export default Banner;
