import cardImage from '../images/cat.png';


const DUMMY_CARDS = [
  {
    product: {
      id: 'n1',
      title: 'Нямушка',
      subtitle: 'с фуа-гра',
      amount: '0,5',
      unit: 'кг',
      description: 'Печень утки разварная с артишоками',
      image: cardImage,
      alt: 'корм для кошек "Нямушка" c фуа-гра',
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
        { text: 'мышь в подарок' },
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
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      image: cardImage,
      alt: 'корм для кошек "Нямушка" c рыбой',
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
      image: cardImage,
      alt: 'корм для кошек "Нямушка" c курой',
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
    disabled: true,
  },
];

export default DUMMY_CARDS;