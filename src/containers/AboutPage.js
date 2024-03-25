import {Fragment} from 'react';

import {Link} from 'react-router-dom';

import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';

import {MdOutlineBusinessCenter, MdOutlineLocationOn} from 'react-icons/md';

import {CustomBadge} from '../components';

import meImage from '../assets/images/me.jpg';

export const AboutPage = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12" sm="3">
          <Card style={{width: '100%', border: 0, marginBottom: '10px'}}>
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
                <CustomBadge>HTML5, CSS3, Sass, Material UI, Bootstrap, Tailwind</CustomBadge>
                <CustomBadge>JavaScript, TypeScript, RxJS, </CustomBadge>
                <CustomBadge>React, Redux, Zustand, Next</CustomBadge>
                <CustomBadge>Node, Express, NestJS,</CustomBadge>
                <CustomBadge>OOP, SOLID, Design Patterns, Architecture, CI/CD, Responsive Design, Scrum</CustomBadge>
                <br />
                <br />
                <CustomBadge>DB - MySQL, MongoDB, Firebase</CustomBadge>
                <CustomBadge>API - REST, GraphQL, Axios, Postman</CustomBadge>
                <CustomBadge>Build - Webpack, Gulp, Electron, Docker</CustomBadge>
                <br />
                <CustomBadge>Testing - Jest, RTL, Nightwatch, Cypress, Sonar</CustomBadge>
                <CustomBadge>Design - Photoshop, Figma</CustomBadge>
                <CustomBadge>CMS - Shopify, Magento</CustomBadge>
                <CustomBadge>IDE - VS Code, IntelliJ IDEA</CustomBadge>
                <br />
                <CustomBadge>VCS - Git, GitHub, Bitbucket</CustomBadge>
                <CustomBadge>Hosting - Vercel, Netlify</CustomBadge>
                <CustomBadge>Management - Jira, ClickUp, Confluence</CustomBadge>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col style={{marginTop: '16px'}}>
          <p>Hi there! I'm Andrew.</p>

          <p>
            I am a <i>Full-stack</i> web developer with a passion for software development. I am proficient in both
            <i> Front-end</i> and <i>Back-end</i> development, creating user-friendly interfaces and powerful
            functionality. I strive to provide high-quality, innovative solutions. I try to keep up to date with the
            latest technologies to create scalable and efficient software.
          </p>

          <p>And finally, your years in IT do not guarantee your seniority.</p>

          <p>
            Most of my open-source <span className="custom-link hover-link"><Link to="/me-dev/projects">projects</Link></span> are focused on one
            thing – <i>to help learn</i>. I also write <span className="custom-link hover-link"><Link to="/me-dev/blog">articles</Link></span> about web-development,
            and other interesting things.
          </p>
        </Col>
      </Row>
    </Fragment>
  );
}
