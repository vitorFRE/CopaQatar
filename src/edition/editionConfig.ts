import type { ThemeColors } from '../Styles/themeTokens';

export type EditionSlug = '2022' | '2026';

export type EditionFaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type EditionHighlight = {
  title: string;
  description: string;
};

export type EditionPlaceholderContent = {
  title: string;
  description: string;
};

export type EditionConfig = {
  slug: EditionSlug;
  year: string;
  name: string;
  tagline: string;
  documentTitle: string;
  brandStyle: 'legacy' | 'modern';
  dataPath: string;
  themeColors: Partial<ThemeColors>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faq: EditionFaqItem[];
  highlights: EditionHighlight[];
  placeholders: {
    groups: EditionPlaceholderContent;
    matches: EditionPlaceholderContent;
    matchDetails: EditionPlaceholderContent;
  };
};

const configs: Record<EditionSlug, EditionConfig> = {
  '2022': {
    slug: '2022',
    year: '2022',
    name: 'Copa do Mundo 2022',
    tagline: 'Qatar',
    documentTitle: 'Copa 2022 | Qatar',
    brandStyle: 'legacy',
    dataPath: '/data/editions/2022',
    themeColors: {
      primary: '#8d1b3d',
      primarySoft: '#fff2f6',
      footerBackground: '#8d1b3d',
    },
    hero: {
      eyebrow: 'Edicao classica',
      title: 'Copa do Mundo 2022',
      description:
        'Acompanhe a versao original do projeto com grupos, partidas e detalhes da Copa disputada no Qatar.',
    },
    faq: [
      {
        id: 1,
        question: 'Onde Assistir?',
        answer:
          'Na tv aberta, os jogos serão transmitidos pela Globo e também será transmito no seu streaming GloboPlay de graça e no GloboPlay+ pago, Nos canais fehados serão transmitidos pelos canais SporTV, SporTV 2 e SporTV 3, e pela primera vez um streamer no Brasil transmitirá pelo menos um jogo com imagens no Youtube CazeTV e twitch Casimito ',
      },
      {
        id: 2,
        question: 'Quando será a final da copa?',
        answer: 'Dia 18 de dezembro, 2022.',
      },
      {
        id: 3,
        question: 'Quantos países participam da copa?',
        answer: '32 países participantes.',
      },
    ],
    highlights: [],
    placeholders: {
      groups: {
        title: 'Grupos indisponiveis',
        description: 'Os grupos desta edicao nao estao disponiveis no momento.',
      },
      matches: {
        title: 'Partidas indisponiveis',
        description: 'As partidas desta edicao nao estao disponiveis no momento.',
      },
      matchDetails: {
        title: 'Detalhes indisponiveis',
        description: 'Os detalhes desta partida nao estao disponiveis no momento.',
      },
    },
  },
  '2026': {
    slug: '2026',
    year: '2026',
    name: 'Copa do Mundo 2026',
    tagline: 'Estados Unidos, Mexico e Canada',
    documentTitle: 'Copa 2026 | World Cup',
    brandStyle: 'modern',
    dataPath: '/data/editions/2026',
    themeColors: {
      primary: '#5be36d',
      primarySoft: 'rgba(91, 227, 109, 0.14)',
      footerBackground: '#050b18',
    },
    hero: {
      eyebrow: '11 de junho - 19 de julho',
      title: 'Copa do Mundo 2026',
      description:
        'O maior torneio de selecoes do planeta. Tres paises-sede, 16 cidades e uma nova era preparada para acompanhar a Copa de 2026.',
    },
    faq: [
      {
        id: 1,
        question: 'Onde sera a Copa do Mundo 2026?',
        answer: 'A edicao de 2026 sera sediada por Estados Unidos, Mexico e Canada.',
      },
      {
        id: 2,
        question: 'O que ja existe nesta versao do site?',
        answer:
          'Esta primeira entrega traz a estrutura da nova edicao, identidade inicial, navegacao dedicada e espaco preparado para os proximos dados.',
      },
      {
        id: 3,
        question: 'Quando entram grupos e partidas?',
        answer:
          'A base ja esta pronta para evoluir. Nas proximas etapas, os dados e as telas serao preenchidos sem afetar a edicao de 2022.',
      },
    ],
    highlights: [
      {
        title: 'Tres paises-sede',
        description: 'A edicao de 2026 sera dividida entre Estados Unidos, Mexico e Canada.',
      },
      {
        title: 'Nova base do projeto',
        description: 'O site agora suporta multiplas edicoes sem sobrescrever a Copa de 2022.',
      },
      {
        title: 'Expansao segura',
        description: 'Rotas, navegacao e identidade foram preparadas para receber o conteudo de 2026.',
      },
    ],
    placeholders: {
      groups: {
        title: 'Grupos em breve',
        description:
          'A estrutura da edicao 2026 ja esta pronta. Os grupos e classificacoes serao adicionados na proxima etapa.',
      },
      matches: {
        title: 'Calendario em breve',
        description:
          'As paginas de partidas de 2026 ja existem, mas os confrontos e horarios ainda serao publicados.',
      },
      matchDetails: {
        title: 'Detalhes da partida em breve',
        description:
          'O conteudo detalhado das partidas de 2026 ainda nao foi publicado nesta primeira entrega.',
      },
    },
  },
};

export const DEFAULT_EDITION: EditionSlug = '2026';

export function isEditionSlug(value: string | undefined): value is EditionSlug {
  return value === '2022' || value === '2026';
}

export function getEditionConfig(edition: string | undefined): EditionConfig | undefined {
  if (!edition || !isEditionSlug(edition)) {
    return undefined;
  }

  return configs[edition];
}

export function getAllEditionConfigs(): EditionConfig[] {
  return [configs['2026'], configs['2022']];
}

export function buildEditionPath(edition: EditionSlug, path = ''): string {
  const normalizedPath = path.replace(/^\/+/, '');
  return normalizedPath ? `/${edition}/${normalizedPath}` : `/${edition}`;
}
