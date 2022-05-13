import { Container } from "react-bootstrap";
import packageJson from '../../package.json';

const Footer = () => {
  return (
    <>
      <div className="bg-dark pt-5">
        <Container className="text-light">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <p className="fw-bold">&copy; {new Date().getFullYear()} AvalanchePowered, all rights reserved. <br /> <span className="fw-normal text-secondary">Some things mentioned in this webpage may not be implemented yet.</span></p>
            <span className="text-muted">v{packageJson.version}</span>
          </footer>
        </Container>
      </div>
    </>
  )
}

export default Footer;