import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Today’s most viewed courses</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Node.js with TypeScript</span>
              <span className="subtext">Glauber Brack</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">AdonisJS an awesome Node.js Framework</span>
              <span className="subtext">Glauber Brack</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">ReactJS for beginner</span>
              <span className="subtext">Glauber Brack</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">React + Redux</span>
              <span className="subtext">Glauber Brack</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">React Native</span>
              <span className="subtext">Glauber Brack</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
