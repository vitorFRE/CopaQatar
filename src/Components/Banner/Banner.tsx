import simbolo from '../../assets/simbolo.svg';
import fifaeqatar from '../../assets/fifaeqatar.svg';
import { Container } from './BannerStyles';

const Banner = () => {
  return (
    <Container>
      <div>
        <img src={simbolo} alt="Simbolo Copa do mundo Qatar" />
        <img src={fifaeqatar} alt="Logo Qatar + Fifa" />
      </div>
    </Container>
  );
};

export default Banner;
