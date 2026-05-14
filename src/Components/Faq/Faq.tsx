import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useEdition } from '../../edition/EditionContext';
import TitleH1 from '../Title/TitleH1';
import { Accordion, Container } from './FaqStyle';

const Faq = () => {
  const { faq } = useEdition();
  const [ativo, setAtivo] = useState<number | null>(0);

  const toggle = (i: number) => {
    if (ativo === i) {
      setAtivo(null);
      return;
    }

    setAtivo(i);
  };

  return (
    <Container>
      <TitleH1 text="Informações" />
      <Accordion>
        {faq.map((item, i) => (
          <div key={item.id} onClick={() => toggle(i)}>
            <div>
              <h2
                className={`${
                  ativo === i
                    ? 'faq_accordion_pergunta_ativo'
                    : 'faq_accordion_pergunta'
                }`}
              >
                {item.question}
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
              {item.answer}
            </div>
          </div>
        ))}
      </Accordion>
    </Container>
  );
};

export default Faq;
