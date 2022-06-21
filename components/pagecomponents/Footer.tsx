import { Container } from 'react-bootstrap';
import packageJson from '../../package.json';

const Footer = () => {
    return (
        <>
            <div className="bg-dark massive-space-top">
                <Container className="text-light border-top border-secondary">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <span className="fw-bold">
                            &copy; {new Date().getFullYear()} AvalanchePowered,
                            all rights reserved.
                        </span>
                        <span className="text-muted">
                            v{packageJson.version}
                        </span>
                    </footer>
                </Container>
            </div>
        </>
    );
};

export default Footer;
