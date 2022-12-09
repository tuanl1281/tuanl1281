import React from 'react';

import css from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <div className={css['wrapper']}>
    <div className={css['background']}>
      <img alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" />
    </div>
    {children}
  </div>
);

export default Layout;
