import React from 'react';

import { Container, Wrapper, LinkedinIcon, SearchInput, HomeIcon, NotificationIcon, ProfileIcon, CaretDownIcon } from './styles';

import profileImg from '../../assets/images/profile.jpg';

const DesktopHeader: React.FC = () => {
    return (
        <Container>
            <Wrapper>
            <div className="left">
                <LinkedinIcon />
                <SearchInput placeholder="Search" />
            </div>

            <div className="right">
                <nav>
                    <button className="active">
                        <HomeIcon />
                        <span>Home</span>
                    </button>
                    <button >
                        <NotificationIcon />
                        <span>Notifications</span>
                    </button>
                    <button >
                        <ProfileIcon src={profileImg}  />
                        <span>
                            Me <CaretDownIcon />
                        </span>
                    </button>
                </nav>
            </div>
            </Wrapper>
        </Container>
    );
};

export default DesktopHeader;