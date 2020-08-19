import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

import profileImg from '../../assets/images/profile.jpg';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src={profileImg}/>
            <SearchInput placeholder="Pesquisar" />
            <MessageIcon />
        </Container>
    )
}

export default MobileHeader;