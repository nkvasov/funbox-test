import React from 'react';
import './Cards.css';

import Card from './Card';
import CardDisabled from './CardDisabled';
import DUMMY_CARDS from '../constants/DUMMY_CARDS';

const Cards = () => {
  // const cardsWithKeys = DUMMY_CARDS.map((card) => {
  //   return (
  //     <div key={card.product.id}>
  //       <Card card={card.product} extra={card.extra} />
  //     </div>
  //   );
  // });

  // return <section className="cards">{cardsWithKeys}</section>;
  return (
    <section className="cards">
      {DUMMY_CARDS.map((card) => {
        if (card.disabled) {
          return (
            <CardDisabled
              key={card.product.id}
              card={card.product}
              extra={card.extra}
            />
          );
        } else {
          return (
            <Card
              key={card.product.id}
              card={card.product}
              extra={card.extra}
            />
          );
        }
      })}
    </section>
  );
};

export default Cards;
