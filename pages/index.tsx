import React, { useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import Cursor from '../components/common/Cursor';
import InformationSection from '../components/portfolio/InformationSection';
import NameAndTitle from '../components/portfolio/NameAndTitle';
import Techs from '../components/portfolio/Techs';
import Interests from '../components/portfolio/Interests';
import Experiences from '../components/portfolio/Experiences';

import css from '../styles/index.module.scss';

const aboutMe = `A self-learning, open-minded software engineer. Expertise in C#/JavaScript/Typescript with over ${
  new Date().getFullYear() - 2020
} years of experience. Software development is truly a craft and I aim to be a better craftsman on each passing day.`;

const Home: NextPage = () => {
  const $mail = useRef<HTMLAnchorElement>(null);
  const $github = useRef<HTMLAnchorElement>(null);
  const $linkedin = useRef<HTMLAnchorElement>(null);

  const $bakco = useRef<HTMLAnchorElement>(null);
  const $titkul = useRef<HTMLAnchorElement>(null);

  return (
    <div className={css['scroll-wrapper']}>
      <div className={css['wrapper']}>
        <Head>
          <title>{`<tuanl1281 />`}</title>
        </Head>
        <Cursor
          $hoverables={[$mail, $github, $linkedin, $bakco, $titkul]}
        />
        {NameAndTitle({ $mail, $github, $linkedin })}
        <div className={css['information-wrapper']}>
          <div>
            <InformationSection header="About" content={aboutMe} />
            <InformationSection header="Tech" content={Techs} />
            <InformationSection header="Interests" content={Interests} />
          </div>
          <div>
            <InformationSection
              header="Experiences"
              content={Experiences({ $bakco, $titkul })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
