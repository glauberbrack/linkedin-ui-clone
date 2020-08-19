import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

import profileImg from '../../../assets/images/profile.jpg';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src={profileImg}
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
