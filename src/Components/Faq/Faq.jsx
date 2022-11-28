import React, { useState } from 'react';
import { Accordion, Container } from './FaqStyle';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import TitleH1 from '../Title/TitleH1';
import NextMatch from '../NextMatch/NextMatch';

const Faq = () => {
  const [ativo, setAtivo] = useState(0);

  const toggle = (i) => {
    if (ativo == i) {
      return setAtivo(null);
    }

    setAtivo(i);
  };

  return (
    <Container>
      <TitleH1 text="Informações" />
      <Accordion>
        {dados.map((item, i) => (
          <div key={item.id} onClick={() => toggle(i)}>
            <div>
              <h2
                className={`${
                  ativo === i
                    ? 'faq_accordion_pergunta_ativo'
                    : 'faq_accordion_pergunta'
                }`}
              >
                {item.Pergunta}
              </h2>
              <span>
                {ativo === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            <div
              className={`${
                ativo === i ? 'faq_accordion_ativo' : 'faq_accordion_resposta'
              }`}
            >
              {item.Resposta}
            </div>
          </div>
        ))}
      </Accordion>
      <NextMatch />
    </Container>
  );
};

const dados = [
  {
    id: 1,
    Pergunta: 'Onde Assistir?',
    Resposta:
      'Na tv aberta, os jogos serão transmitidos pela Globo e também será transmito no seu streaming GloboPlay de graça e no GloboPlay+ pago, Nos canais fehados serão transmitidos pelos canais SporTV, SporTV 2 e SporTV 3, e pela primera vez um streamer no Brasil transmitirá pelo menos um jogo com imagens no Youtube CazeTV e twitch Casimito ',
  },
  {
    id: 2,
    Pergunta: 'Quando será a final da copa?',
    Resposta: 'Dia 18 de dezembro, 2022.',
  },
  {
    id: 3,
    Pergunta: 'Quantos países participam da copa?',
    Resposta: '32 países participantes.',
  },
];

export default Faq;
