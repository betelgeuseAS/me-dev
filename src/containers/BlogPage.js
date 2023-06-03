import { Fragment } from 'react';

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
          <Alert color="danger">Nothing to show!</Alert>
        </Col>
      </Row>
    </Fragment>
  );
}
