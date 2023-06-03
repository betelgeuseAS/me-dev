import {Col, Row} from 'reactstrap';

import {Heading} from '../components';

export const ErrorPage = () => {
  return (
    <Row>
      <Col>
        <Heading>An unexpected error has occurred.</Heading>
      </Col>
    </Row>
  );
}
