import React, { useState } from 'react';
import cn from 'classnames';
import './Card.scss';
import Badge from './Badge';

const Card = ({ card, extra }) => {
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [hoverIsEnabled, setHoverIsEnabled] = useState(true);

  const mouseOverHandler = () => {
    if (!cardIsHovered) {
      setCardIsHovered(true);
    }
  };

  const mouseLeaveHandler = () => {
    if (!hoverIsEnabled) {
      setHoverIsEnabled(true);
    }
    setCardIsHovered(false);
  };

  const toggleSelectionHandler = () => {
    setCardIsSelected((prev) => !prev);
    setHoverIsEnabled(false);
  };

  const borderClassName = cn('card__border', {
    card__border_hover: hoverIsEnabled && cardIsHovered && !cardIsSelected,
    card__border_selected: cardIsSelected,
    'card__border_selected-hover':
      hoverIsEnabled && cardIsSelected && cardIsHovered,
  });

  const badgeColor =
    hoverIsEnabled && cardIsHovered && !cardIsSelected
      ? 'blue-light'
      : hoverIsEnabled && cardIsSelected && cardIsHovered
      ? 'red-light'
      : cardIsSelected
      ? 'red'
      : '';

  const topText =
    hoverIsEnabled && cardIsSelected && cardIsHovered ? (
      <p className="card__text card__text_warning">
        {extra['top-text'].warning}
      </p>
    ) : (
      <p className="card__text">{extra['top-text'].default}</p>
    );

  const bottomText =
    (cardIsSelected && hoverIsEnabled && (
      <p className="card__description">{card.description}</p>
    )) ||
    ((!cardIsSelected || !hoverIsEnabled) && (
      <p className="card__description">
        {extra['bottom-text'].default}{' '}
        <span
          onClick={toggleSelectionHandler}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {extra['bottom-text']['default-action']}
        </span>
      </p>
    ));

  return (
    <div className="card">
      <div
        className="card__item"
        onClick={toggleSelectionHandler}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div className="card__content">
          <div className="card__text-container">
            {topText}
            <div className="card__main-text">
              <h2 className="card__title">{card.title}</h2>
              <p className="card__subtitle">{card.subtitle}</p>
            </div>

            <div>
              {extra['mid-text'].map((el) => (
                <p className="card__text-details" key={el.text}>
                  <span>{el.amount}</span>
                  {' ' + el.text}
                </p>
              ))}
            </div>
          </div>

          <img className="card__image" src={card.image} alt={card.alt} />
        </div>
        <div className="card__border-container">
          <svg
            width="320"
            height="480"
            xmlns="http://www.w3.org/2000/svg"
            className={borderClassName}
          >
            <mask id="a" fill="#fff">
              <path d="M0 42.676V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H42.676L0 42.676Z" />
            </mask>
            <path
              d="m0 42.676-2.828-2.828L-4 41.019v1.657h4ZM42.676 0v-4H41.02l-1.171 1.172L42.676 0ZM4 468V42.676h-8V468h8Zm8 8a8 8 0 0 1-8-8h-8c0 8.837 7.163 16 16 16v-8Zm296 0H12v8h296v-8Zm8-8a8 8 0 0 1-8 8v8c8.837 0 16-7.163 16-16h-8Zm0-456v456h8V12h-8Zm-8-8a8 8 0 0 1 8 8h8c0-8.837-7.163-16-16-16v8ZM42.676 4H308v-8H42.676v8Zm-2.828-6.828L-2.828 39.848l5.656 5.657L45.505 2.828l-5.657-5.656Z"
              mask="url(#a)"
            />
          </svg>
        </div>
        <div className="card__extra-container">
          <Badge
            title={card.amount}
            subtitle={card.unit}
            color={badgeColor}
            className="card__badge"
          />
        </div>
      </div>
      {bottomText}
    </div>
  );
};

export default Card;
