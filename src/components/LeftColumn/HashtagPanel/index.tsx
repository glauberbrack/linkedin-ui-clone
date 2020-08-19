import React from 'react';

import Panel from '../../Panel';

import { Container, HashtagIcon } from './styles';

const tags = ['nodejs', 'reactjs', 'reactnative'];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hastags you follow</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
