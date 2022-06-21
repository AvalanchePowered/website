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
                            all rights reserved. Sponsored by{' '}
                            <a href="https://candybysweden.com">
                                Candy By Sweden
                            </a>{' '}
                            and{' '}
                            <a href="https://www.spsgroup.se">SPS Group AB</a>
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
