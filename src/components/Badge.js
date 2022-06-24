import React from 'react';

import './Badge.scss';
import cn from 'classnames';

const Badge = ({ title, subtitle, color='', className='' }) => {

  const badgeClassName = cn('badge', className, {
    'badge_color_blue-light': color === 'blue-light',
    badge_color_red: color === 'red',
    'badge_color_red-light': color === 'red-light',
    badge_color_grey: color === 'grey',
  });

  return (
    <div className={badgeClassName}>
      <h3 className="badge__title">{title}</h3>
      <p className="badge__subtitle">{subtitle}</p>
    </div>
  );
};

export default Badge;
