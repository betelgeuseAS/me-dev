import {Fragment} from 'react';

import {Link} from 'react-router-dom';

import {Alert, Col, Row} from 'reactstrap';

import {Heading} from '../components';

import {data} from '../data';

export const BlogPage = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Heading count={data.blog.length}>Blog</Heading>
        </Col>
      </Row>

      <Row>
        <Col>
          <Alert color="danger">
            Nothing to show!<br />
            Read on <span className="custom-link hover-link"><Link to="/me-dev/blog">Medium</Link></span> or <span className="custom-link hover-link"><Link to="/me-dev/blog">DEV</Link></span>.
          </Alert>
        </Col>
      </Row>
    </Fragment>
  );
}
