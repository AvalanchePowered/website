import { Alert, Nav } from 'react-bootstrap';
import { faBars, faBoxOpen, faHome, faMessage, faPlugCircleBolt, faWarning } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function WebsiteNotification() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert className="m-0 fw-bold" variant="danger" onClose={() => setShow(false)} dismissible>
                <FontAwesomeIcon icon={faWarning} className="px-2" />
                <span>We are in development and a lot of things said on this website may not be there yet.</span>
            </Alert>
        );
    }
}

const NavigationBar = () => {
    const router = useRouter();

    return (
        <>
            <WebsiteNotification />
            <Nav className="navbar navbar-expand-lg sticky-top bg-nav shadow-lg">

                <span className="d-flex flex-grow-1 px-4">
                    <Link href="/" passHref={true}>
                        <a className="flex-grow-1">
                            <div className="d-flex align-items-center col-md-3 py-2 py-lg-3">
                                <img src="/assets/img/avalanche.png" className="bi me-2" height="32" aria-label="Image of Avalanche"></img>
                            </div>
                        </a>
                    </Link>

                    <button className="btn-secondary navbar-toggler align-self-center" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </span>

                <div className="collapse navbar-collapse" id="navigationBar">
                    <ul className="navbar-nav gap-2 gap-lg-4 col-12 col-lg-auto px-3 px-lg-0 mt-2 mt-lg-0 mb-3 mb-lg-0">

                        <li>
                            <Link href="/" passHref={true}>
                                <a className={router.pathname == "/" ? "nav-active" : "text-decoration-none nav-hover"}>
                                    <div className="nav-link px-3 link-light monserrat">
                                        <span className="px-2">
                                            <FontAwesomeIcon className="px-1" icon={faHome} /> Home
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        </li>

                        <li>
                            <a className="nav-hover text-decoration-none" href="https://forums.avalanchepowered.org">
                                <div className="nav-link px-3 link-light monserrat">
                                    <span className="px-2">
                                        <FontAwesomeIcon className="px-1" icon={faMessage} /> Forums
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a className="nav-hover text-decoration-none" href="https://forums.avalanchepowered.org/resources">
                                <div className="nav-link px-3 link-light monserrat">
                                    <span className="px-2">
                                        <FontAwesomeIcon className="px-1" icon={faPlugCircleBolt} /> Resources
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a className="nav-hover text-decoration-none" href="https://github.com/JSPrismarine/JSPrismarine/releases/latest">
                                <div className="nav-link px-3 link-light monserrat">
                                    <span className="px-2">
                                        <FontAwesomeIcon className="px-1" icon={faBoxOpen} /> Download
                                    </span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-3 nav-link">
                    <a href="https://github.com/JSPrismarine" target="_blank" rel="noreferrer" className="social-links">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://discord.gg/2yVBFtw" target="_blank" rel="noreferrer" className="social-links">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
            </Nav>
        </>
    )
}

export default NavigationBar;
