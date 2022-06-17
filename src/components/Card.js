import React, { useState } from 'react';
import cn from 'classnames';
import './Card.css';
import cardImage from '../images/cat.png';

const Card = ({ card, disabled = false }) => {
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [hoverIsEnabled, setHoverIsEnabled] = useState(!disabled);

  const addDisableClass = (cls) => {
    const disabledCls = cls + '_disabled';
    const selectedCls = cls + '_selected';
    return cn(cls, { [disabledCls]: disabled, [selectedCls]: cardIsSelected });
  };

  const borderClassName = cn('card__border', {
    card__border_disabled: disabled,
    card__border_hover: hoverIsEnabled && cardIsHovered && !cardIsSelected,
    card__border_selected: cardIsSelected,
    'card__border_selected-hover':
      hoverIsEnabled && cardIsSelected && cardIsHovered,
  });

  const extraClassName = cn('card__extra-circle', {
    'card__extra-circle_disabled': disabled,
    'card__extra-circle_hover':
      hoverIsEnabled && cardIsHovered && !cardIsSelected,
    'card__extra-circle_selected': cardIsSelected,
    'card__extra-circle_selected-hover':
      hoverIsEnabled && cardIsSelected && cardIsHovered,
  });

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

  const topText =
    hoverIsEnabled && cardIsSelected && cardIsHovered ? (
      <p className={addDisableClass('card__text card__text_warning')}>
        Котэ не одобряет?
      </p>
    ) : (
      <p className={addDisableClass('card__text')}>Сказочное заморское яство</p>
    );

  return (
    <div className="card">
      <div
        className={addDisableClass('card__item')}
        onClick={!disabled && toggleSelectionHandler}
        onMouseOver={!disabled && mouseOverHandler}
        onMouseLeave={!disabled && mouseLeaveHandler}
      >
        <div className="card__content">
          <div className="card__text-container">
            {topText}
            <h2 className={addDisableClass('card__title')}>Нямушка</h2>
            <h2 className={addDisableClass('card__subtitle')}>с фуа-гра</h2>
            <div>
              <p className={addDisableClass('card__text-details')}>
                <span>100</span> порций
              </p>
              <p className={addDisableClass('card__text-details')}>
                <span>5</span> мышей в подарок
              </p>
              <p className={addDisableClass('card__text-details')}>
                заказчик доволен
              </p>
            </div>
          </div>
          <img
            className={addDisableClass('card__image')}
            src={cardImage}
            alt="корм"
          />
        </div>
        <div className="card__border-container">
          <svg
            width="320"
            height="480"
            xmlns="http://www.w3.org/2000/svg"
            className={borderClassName}
          >
            <mask id="a" fill="#fff">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 42.676V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H42.676L0 42.676Z"
              />
            </mask>
            <path
              d="m0 42.676-2.828-2.828L-4 41.019v1.657h4ZM42.676 0v-4H41.02l-1.171 1.172L42.676 0ZM4 468V42.676h-8V468h8Zm8 8a8 8 0 0 1-8-8h-8c0 8.837 7.163 16 16 16v-8Zm296 0H12v8h296v-8Zm8-8a8 8 0 0 1-8 8v8c8.837 0 16-7.163 16-16h-8Zm0-456v456h8V12h-8Zm-8-8a8 8 0 0 1 8 8h8c0-8.837-7.163-16-16-16v8ZM42.676 4H308v-8H42.676v8Zm-2.828-6.828L-2.828 39.848l5.656 5.657L45.505 2.828l-5.657-5.656Z"
              mask="url(#a)"
            />
          </svg>
        </div>
        <div className="card__extra-container">
          <div className={extraClassName}>
            <h3>0,5</h3>
            <p>кг</p>
          </div>
        </div>
      </div>
      {disabled && (
        <p className={addDisableClass('card__description')}>Все кончилось!</p>
      )}
      {!disabled && cardIsSelected && (
        <p className="card__description">Печень утки разварная с артишоками.</p>
      )}
      {!disabled && !cardIsSelected && (
        <p className="card__description">
          Чего сидишь? Порадуй котэ,{' '}
          <span
            onClick={!disabled && toggleSelectionHandler}
            onMouseOver={!disabled && mouseOverHandler}
            onMouseLeave={!disabled && mouseLeaveHandler}
          >
            купи.
          </span>
        </p>
      )}
    </div>
  );
};

export default Card;
