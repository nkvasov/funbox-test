import React from 'react';
import './Cards.css';

import Card from './Card';
import CardDisabled from './CardDisabled';

const DUMMY_CARDS = [
  {
    product: {
      id: 'n1',
      title: 'Нямушка',
      subtitle: 'с фуа-гра',
      amount: '0,5',
      unit: 'кг',
      description: 'Печень утки разварная с артишоками',
    },
    extra: {
      'top-text': {
        default: 'Сказочное заморское яство',
        warning: 'Котэ не одобряет?',
      },
      'bottom-text': {
        disabled: 'Всё кончилось!',
        default: 'Чего сидишь? Порадуй котэ, ',
        'default-action': 'купи.',
      },
      'mid-text': [
        { amount: '10', text: 'порций' },
        { amount: '', text: 'мышь в подарок' },
      ],
    },
    disabled: false,
  },
  {
    product: {
      id: 'n2',
      title: 'Нямушка',
      subtitle: 'с рыбой',
      amount: '2',
      unit: 'кг',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка. Лалала',
    },
    extra: {
      'top-text': {
        default: 'Сказочное заморское яство',
        warning: 'Котэ не одобряет?',
      },
      'bottom-text': {
        disabled: 'Всё кончилось!',
        default: 'Чего сидишь? Порадуй котэ, ',
        'default-action': 'купи.',
      },
      'mid-text': [
        { amount: '40', text: 'порций' },
        { amount: '2', text: 'мыши в подарок' },
      ],
    },
    disabled: false,
  },
  {
    product: {
      id: 'n3',
      title: 'Нямушка',
      subtitle: 'с курой',
      amount: '5',
      unit: 'кг',
      description: 'Филе из цыплят с трюфелями в бульоне.',
    },
    extra: {
      'top-text': {
        default: 'Сказочное заморское яство',
        warning: 'Котэ не одобряет?',
      },
      'bottom-text': {
        disabled: 'Всё кончилось!',
        default: 'Чего сидишь? Порадуй котэ, ',
        'default-action': 'купи.',
      },
      'mid-text': [
        { amount: '100', text: 'порций' },
        { amount: '5', text: 'мышей в подарок' },
        { text: 'заказчик доволен' },
      ],
    },
    disabled: false,
  },
];

const Cards = () => {
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
