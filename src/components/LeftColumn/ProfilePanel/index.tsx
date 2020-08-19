import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGUWtq9rh0weQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=iz6emhu-LvwHORTtnNJaCXU6Go7peYPTk1Sy7byCpO8"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Glauber Brack</h1>
        <h2>Software Developer at CBYK</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who viewed your profile</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Views of your post</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
