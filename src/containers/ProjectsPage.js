import { Fragment } from 'react';

import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';

import {FaPlay, FaGithub} from 'react-icons/fa';

import {Heading} from '../components';

import {data} from '../data';

export const ProjectsPage = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Heading count={data.projects.length}>Projects</Heading>
        </Col>
      </Row>

      <Row>
        {data.projects.map((item) => (
          <Col sm="12" md="6" lg="4" key={item.title}>
            <Card className="mb-3">
              <img
                alt="Image"
                src={item.image}
                style={{
                  borderTopLeftRadius: 'var(--bs-border-radius)',
                  borderTopRightRadius: 'var(--bs-border-radius)',
                  height: '140px',
                  objectFit: 'cover'
                }}
              />

              <CardBody className="d-flex flex-column justify-content-between" style={{height: '206px'}}>
                <div>
                  <CardTitle tag="h5" style={{fontWeight: '500'}}>{item.title}</CardTitle>
                  <CardText>{item.description}</CardText>
                </div>

                <div>
                  {item.link && (
                    <Button outline size="sm" className="me-3 custom-button" href={item.link} target="_blank">
                    <span  className="d-flex align-items-center">
                      <FaPlay className="me-1" /> View
                    </span>
                    </Button>
                  )}

                  {item.code && (
                    <Button outline size="sm" className="custom-button" href={item.code} target="_blank">
                    <span className="d-flex align-items-center">
                      <FaGithub className="me-1"/> Source Code
                    </span>
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
