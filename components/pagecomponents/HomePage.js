import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBook, faSnowflake, faSleigh, faMitten, faCandyCane, faBugs, faBookOpen, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <>
      <div className="bg-viewport bg-dark bg-gradient text-light">
        <Container>
          <Row className="d-flex flex-col justify-content-center align-items-center pt-4">
            <Col lg={6}>
              <div className="fw-bold fs-2 text-center">
                <img className="mb-4 img-fluid" src="assets/img/avalanche.png" height="256" width="256"></img> <br />
                <span className="bg-black px-2">speed, stability, functionality</span> <br />
                <span className="bg-light text-black px-2">choose three.</span>
              </div>

              <div className="lead p-2 text-center mt-4">
                <span>
                  Your search for Bedrock Edition server software ends here, <br />
                  Avalanche aims to bring all three. Speed, stability and functionality.
                </span>
              </div>

              <div className="pt-5 d-flex flex-col justify-content-center align-items-center gap-2 g-4">
                <a href="https://github.com/AvalanchePowered/Avalanche/releases/latest">
                  <Button className="fw-bold" variant="primary" size="lg">
                    <FontAwesomeIcon className="px-2" icon={faDownload}></FontAwesomeIcon> Download
                  </Button>
                </a>
                <a href="https://docs.avalanchepowered.org">
                  <Button className="fw-bold" variant="secondary" size="lg">
                    <FontAwesomeIcon className="px-2" icon={faBook}></FontAwesomeIcon> Documentation
                  </Button>
                </a>
              </div>
            </Col>
          </Row>

          <div className="massive-space-top">
            <Row>

              <Col lg={5}>
                <p className="display-5 fw-bold">Functional access to all blocks and items.</p>
                <p className="">
                  We aim to provide access to all Minecraft blocks and items by providing a modern level format.
                  Not only do we provide access to these blocks and items, but we also do our best to implement their functionality
                  and make sure they work as close to vanilla as possible!
                </p>
              </Col>
              <Col lg={6} className="d-flex justify-content-lg-end align-self-center">
                <FontAwesomeIcon icon={faSnowflake} className="lg-icon text-info hide-mobile" />
              </Col>

              <div className="massive-space-top"></div>

              <Col lg={6} className="d-flex justify-content-lg-start align-self-center">
                <FontAwesomeIcon icon={faSleigh} className="lg-icon text-primary hide-mobile" />
              </Col>
              <Col lg={5}>
                <p className="display-5 fw-bold">Creating plugins should not feel like a chore.</p>
                <p className="">
                  We aim to provide a easy-to-use, understandable and predictable API for plugins to use, since Avalanche
                  is written in Typescript, in theory, you can write your plugins in any language that transpiles to Javascript.
                </p>
              </Col>

              <div className="massive-space-top"></div>

              <Col lg={5}>
                <p className="display-5 fw-bold">Active maintainers, active community.</p>
                <p className="">
                  Did you run into an issue whilst trying Avalanche? You can get support from our community in the
                  the <a href="https://forums.avalanchepowered.org" className="fw-bold text-decoration-none">Forums</a> and
                  the <a href="https://discord.gg/2yVBFtw" target="_blank" className="fw-bold text-decoration-none">Discord Guild</a>,
                  we keep both of those places clean and friendly to make sure you always feel welcomed in our community.
                </p>
              </Col>
              <Col lg={6} className="d-flex justify-content-lg-end align-self-center">
                <FontAwesomeIcon icon={faCandyCane} className="lg-icon text-info hide-mobile" />
              </Col>

              <div className="massive-space-top"></div>

              <Col lg={6} className="d-flex justify-content-lg-start align-self-center">
                <FontAwesomeIcon icon={faMitten} className="lg-icon text-primary hide-mobile" />
              </Col>
              <Col lg={5}>
                <p className="display-5 fw-bold">The control is all in your, mittens.</p>
                <p className="">
                  We give you full control over what you want your server to be like, customize in any way you wish,
                  provide a unique experience to your players, the experience they want and deserve, it's all up to you.
                </p>
              </Col>

              <div className="massive-space-top"></div>

              <Container>
                <Row className="row-cols-1">
                  <Col lg={3} className="text-center mt-5">
                    <FontAwesomeIcon icon={faBugs} size="5x" className="text-success" />

                    <p className="fs-3 mt-4">Report a bug</p>
                    <p className="w-1">
                      Ran into an issue whilst running Avalanche? Let us know!
                    </p>
                    <a href="https://github.com/AvalanchePowered/Avalanche/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+" target="_blank">
                      <Button variant="secondary px-2" size="sm">
                        <FontAwesomeIcon className="px-2" icon={faBugs} /> Report Bug
                      </Button>
                    </a>
                  </Col>
                  <Col lg={3} className="text-center mt-5">
                    <FontAwesomeIcon icon={faBookOpen} size="5x" className="text-info" />

                    <p className="fs-3 mt-4">Read something</p>
                    <p>
                      Read through our documentation for some basic help with problems.
                    </p>
                    <a href="https://docs.avalanchepowered.org">
                      <Button variant="secondary px-2" size="sm">
                        <FontAwesomeIcon className="px-2" icon={faBookOpen} /> Read Documentation
                      </Button>
                    </a>
                  </Col>
                  <Col lg={3} className="text-center mt-5">
                    <FontAwesomeIcon icon={faDiscord} size="5x" className="text-primary" />

                    <p className="fs-3 mt-4">Get involved</p>
                    <p>
                      Catch up with update notes, have fun with our community.
                    </p>
                    <a href="https://discord.gg/2yVBFtw" target="_blank">
                      <Button variant="secondary px-2" size="sm">
                        <FontAwesomeIcon className="px-2" icon={faDiscord} /> Join Discord Guild
                      </Button>
                    </a>
                  </Col>
                  <Col lg={3} className="text-center mt-5">
                    <FontAwesomeIcon icon={faHeartCirclePlus} size="5x" className="text-danger" />

                    <p className="fs-3 mt-4">Suggest a feature</p>
                    <p>
                      Have an idea? Suggest it to us and we might add it in.
                    </p>
                    <a href="https://github.com/AvalanchePowered/Avalanche/issues/new?assignees=&labels=&template=feature_request.md&title=Feature+Request" target="_blank">
                      <Button variant="secondary px-2" size="sm">
                        <FontAwesomeIcon className="px-2" icon={faHeartCirclePlus} /> Suggest Feature
                      </Button>
                    </a>
                  </Col>
                </Row>
              </Container>
              <div className="massive-space-bottom"></div>
            </Row>
          </div>

        </Container>
      </div>
    </>
  )
}

export default HomePage;