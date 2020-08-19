import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQGUWtq9rh0weQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=iz6emhu-LvwHORTtnNJaCXU6Go7peYPTk1Sy7byCpO8"/>
            <SearchInput placeholder="Pesquisar" />
            <MessageIcon />
        </Container>
    )
}

export default MobileHeader;