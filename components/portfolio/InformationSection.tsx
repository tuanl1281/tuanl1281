import React from 'react';

import css from './InformationSection.module.scss';

interface Props {
  header: string;
  content: React.ReactNode;
}

const InformationSection: React.FC<Props> = ({ header, content }) => (
  <>
    <h3 className={css['header']}>
      <span className="glowing-text">
        <div className="content">{header}</div>
        <div className="shadow" />
      </span>
    </h3>
    <span className="gold-text">{content}</span>
  </>
);

export default InformationSection;
