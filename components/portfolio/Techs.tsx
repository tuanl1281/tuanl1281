import React from 'react';
import {
  SiAmazonaws,
  SiEslint,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrettier,
  SiReact,
  SiRedux,
  SiServerless,
  SiTypescript,
  SiVim,
  SiJenkins,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiCsharp,
  SiDart,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiKubernetes,
} from 'react-icons/si';

import css from './Techs.module.scss';

const techList = [
  { name: 'C#', icon: <SiCsharp /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Dotnet', icon: <SiDotnet /> },
  { name: 'NodeJS', icon: <SiNodedotjs /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
  { name: 'Mongodb', icon: <SiMongodb /> },
  { name: 'Serverless', icon: <SiServerless /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Jenkins', icon: <SiJenkins /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Vim', icon: <SiVim /> },
  { name: 'ESLint', icon: <SiEslint /> },
  { name: 'Prettier', icon: <SiPrettier /> },
];

const Techs = (
  <>
    {techList.map((tech) => (
      <div key={tech.name} className={css['tag']}>
        <div>
          <span className="gold-text">{tech.icon}</span>
          <span>{tech.name}</span>
        </div>
      </div>
    ))}
  </>
);

export default Techs;
