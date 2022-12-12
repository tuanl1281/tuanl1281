import React from 'react';

import css from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <div className={css['wrapper']}>
    {children}
  </div>
);

export default Layout;
