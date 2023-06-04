import {Link, useLocation} from 'react-router-dom';

import {
  Col, DropdownItem, DropdownMenu, DropdownToggle, List, ListInlineItem,Row, UncontrolledDropdown
} from 'reactstrap';

import {MdOutlineFileDownload} from 'react-icons/md';
import {HiOutlineHeart} from 'react-icons/hi2';
import {FaLinkedin, FaGithub, FaMedium, FaDev} from 'react-icons/fa';

export const Footer = () => {
  const handleDownloadCV = () => {
    const anchor = document.createElement('a');

    anchor.setAttribute('href','assets/files/CV Andrew Samchuk EN.pdf');
    anchor.setAttribute('download','');

    document.body.appendChild(anchor);

    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  return (
    <Row style={{marginTop: '32px'}}>
      <Col>
        <List type="inline" style={{fontSize: '.85rem', display: 'flex', alignItems: 'center', marginRight: '64px'}}>
          <ListInlineItem>
            <UncontrolledDropdown direction="up">
              <DropdownToggle
                caret
                color="primary"
                className="custom-dropdown"
                style={{background: 'transparent', border: 0, color: 'inherit', padding: 0, marginRight: '16px', fontSize: '.85rem'}}>
                  <span className="hover-link text-nowrap">
                    <HiOutlineHeart style={{fontSize: '1.25em', paddingBottom: '3px'}} /> Support
                  </span>
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem header>For future projects</DropdownItem>

                <DropdownItem className="custom-link">
                  <a href="https://www.buymeacoffee.com/betelgeuseo" className="hover-link" target="_blank" rel="noreferrer">Buy me a coffee</a>
                </DropdownItem>

                <DropdownItem className="custom-link">
                  <a href="https://www.paypal.com/donate/?hosted_button_id=327N24D6QDLVC" className="hover-link" target="_blank" rel="noreferrer">Become a patron</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ListInlineItem>

          <ListInlineItem style={{cursor: 'pointer', marginRight: '64px'}} onClick={handleDownloadCV}>
              <span className="hover-link text-nowrap">
                <MdOutlineFileDownload style={{fontSize: '1.25em', paddingBottom: '3px'}} /> Download CV
              </span>
          </ListInlineItem>
        </List>
      </Col>

      <Col>
        <List type="inline" style={{fontSize: '.85rem', display: 'flex', alignItems: 'center', marginRight: '64px'}}>
          <ListInlineItem>
            <a href="https://www.linkedin.com/in/betelgeuse-as/" target="_blank" rel="noreferrer">
              <FaLinkedin style={{fontSize: '1.35em', color: 'var(--bs-body-color)'}} className="hover-link" />
            </a>
          </ListInlineItem>

          <ListInlineItem>
            <a href="https://github.com/betelgeuseAS" target="_blank" rel="noreferrer">
              <FaGithub style={{fontSize: '1.35em', color: 'var(--bs-body-color)'}} className="hover-link" />
            </a>
          </ListInlineItem>

          <ListInlineItem>
            <a href="https://medium.com/@betelgeuse.as" target="_blank" rel="noreferrer">
              <FaMedium style={{fontSize: '1.35em', color: 'var(--bs-body-color)'}} className="hover-link" />
            </a>
          </ListInlineItem>

          <ListInlineItem>
            <a href="https://dev.to/betelgeuseas" target="_blank" rel="noreferrer">
              <FaDev style={{fontSize: '1.35em', color: 'var(--bs-body-color)'}} className="hover-link" />
            </a>
          </ListInlineItem>
        </List>
      </Col>
    </Row>
  );
}
