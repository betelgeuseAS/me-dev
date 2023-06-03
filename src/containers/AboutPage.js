import {Fragment} from 'react';

import {Link} from 'react-router-dom';

import {
  Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, DropdownItem, DropdownMenu,
  DropdownToggle, List, ListInlineItem, Row, UncontrolledDropdown
} from 'reactstrap';

import {MdOutlineBusinessCenter, MdOutlineLocationOn, MdOutlineFileDownload} from 'react-icons/md';
import {HiOutlineHeart} from 'react-icons/hi2';
import {FaLinkedin, FaGithub, FaMedium, FaDev} from 'react-icons/fa';

import {CustomBadge} from '../components';

import meImage from '../assets/images/me.jpg';

export const AboutPage = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12" sm="3">
          <Card style={{width: '100%', border: 0, marginBottom: '25px'}}>
            <img alt="Me" src={meImage} style={{clipPath: 'circle(50% at 50% 50%)'}} />
          </Card>
        </Col>

        <Col xs="12" sm="9">
          <Card style={{border: 0}}>
            <CardBody style={{padding: 0}}>
              <CardTitle tag="h2" style={{fontWeight: 700, textTransform: 'uppercase'}}>Andrew Samchuk</CardTitle>

              <CardSubtitle className="mb-2 text-muted" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <MdOutlineBusinessCenter style={{fontSize: '1.25em'}} />
                Software Engineer
              </CardSubtitle>

              <CardSubtitle className="mb-2 text-muted" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <MdOutlineLocationOn style={{fontSize: '1.25em'}} />
                Khmelnytsky, Ukraine
              </CardSubtitle>

              <CardText>
                <CustomBadge>Full Stack</CustomBadge>
                <CustomBadge>JavaScript (TypeScript)</CustomBadge>
                <CustomBadge>React (Redux, Next)</CustomBadge>
                <CustomBadge>Node (Express, Nest)</CustomBadge>
                <br />
                <CustomBadge>Webpack, Docker, Kubernetes</CustomBadge>
                <CustomBadge>DB (MySQL, MongoDB)</CustomBadge>
                <CustomBadge>API (Rest API, Graphql, Postman)</CustomBadge>
                <br />
                <CustomBadge>Jira, Git</CustomBadge>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col style={{marginTop: '16px'}}>
          <p>Hi there! I'm Andrew.</p>

          <p>
            I work as a full-time software engineer. However, apart from work, I am actively involved in my projects
            and learning something new. My main goal in these endeavours is to contribute to the learning of not only
            myself but also others. Most of my open-source <span className="custom-link hover-link"><Link to="/projects">projects</Link></span> are focused on one
            thing – <i>to help learn</i>. You can use these projects to learn algorithms, data structures, design
            patterns, new technologies, etc. I also write <span className="custom-link hover-link"><Link to="/blog">articles</Link></span> about web-development,
            and other interesting things.
          </p>
        </Col>
      </Row>
    </Fragment>
  );
}
