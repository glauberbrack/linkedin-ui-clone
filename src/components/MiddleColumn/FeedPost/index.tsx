import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

import reactLogo from '../../../assets/images/reactjs-logo.jpg';
import feedPost from '../../../assets/images/feed-post.jpg';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={reactLogo} alt="Post Avatar" />
          <Column>
            <h3>ReactJS</h3>
            <h4>Web Framework</h4>
            <time>1 week</time>
          </Column>
        </Row>

        <PostImage
          src={feedPost}
          alt="Feed Image"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">70</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Like</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comment</span>
          </button>
          <button>
            <ShareIcon />
            <span>Share</span>
          </button>
          <button>
            <SendIcon />
            <span>Send</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
