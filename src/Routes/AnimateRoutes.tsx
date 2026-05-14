import { AnimatePresence } from 'framer-motion';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import GrupoPage from '../Pages/GrupoPage';
import Home from '../Pages/Home';
import Informacoes from '../Pages/Informacoes';
import Partida from '../Pages/Partida';
import Partidas from '../Pages/Partidas';
import { EditionProvider } from '../edition/EditionContext';
import {
  buildEditionPath,
  DEFAULT_EDITION,
  getEditionConfig,
  type EditionSlug,
} from '../edition/editionConfig';

const LegacyEditionRedirect = ({ path = '' }: { path?: string }) => (
  <Navigate to={buildEditionPath('2022', path)} replace />
);

const LegacyMatchRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={buildEditionPath('2022', `partida/${id ?? ''}`)} replace />;
};

const EditionLayout = () => {
  const { edition } = useParams<{ edition: EditionSlug }>();
  const config = getEditionConfig(edition);

  if (!config) {
    return <Navigate to={buildEditionPath(DEFAULT_EDITION)} replace />;
  }

  return (
    <EditionProvider config={config}>
      <Outlet />
    </EditionProvider>
  );
};

const AnimateRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navigate to={buildEditionPath(DEFAULT_EDITION)} replace />} />
        <Route path='/informacoes' element={<LegacyEditionRedirect path='informacoes' />} />
        <Route path='/Informacoes' element={<LegacyEditionRedirect path='informacoes' />} />
        <Route path='/partidas' element={<LegacyEditionRedirect path='partidas' />} />
        <Route path='/Partidas' element={<LegacyEditionRedirect path='partidas' />} />
        <Route path='/grupos' element={<LegacyEditionRedirect path='grupos' />} />
        <Route path='/Grupos' element={<LegacyEditionRedirect path='grupos' />} />
        <Route path='/partida/:id' element={<LegacyMatchRedirect />} />
        <Route path='/Partida/:id' element={<LegacyMatchRedirect />} />
        <Route path='/:edition' element={<EditionLayout />}>
          <Route index element={<Home />} />
          <Route path='informacoes' element={<Informacoes />} />
          <Route path='partidas' element={<Partidas />} />
          <Route path='partida/:id' element={<Partida />} />
          <Route path='grupos' element={<GrupoPage />} />
        </Route>
        <Route path='*' element={<Navigate to={buildEditionPath(DEFAULT_EDITION)} replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
