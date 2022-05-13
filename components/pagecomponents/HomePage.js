import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBook, faSnowflake, faSleigh, faMitten, faCandyCane, faBugs, faBookOpen, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <>
      <div className="bg-dark bg-gradient text-light">
        <Container>
          <Row className="bg-viewport d-flex justify-content-center align-items-center pt-4">
            <Col lg={6}>
              <div className="fw-bold fs-2 text-center">
                <img className="img-fluid mb-4 mb-lg-5" src="assets/img/avalanche.png" height="156" width="156"></img> <br />
                <span className="bg-black px-2">speed, stability, functionality</span> <br />
                <span className="bg-light text-black px-2">choose three.</span>
              </div>

              <div className="lead p-2 text-center mt-4">
                <span>
                  Avalanche is a server software for Minecraft: Bedrock Edition aiming to do all of the above and more.
                </span>
              </div>

              <div className="pt-5 d-flex flex-wrap justify-content-center gap-2">
                <a href="https://github.com/AvalanchePowered/Avalanche/releases/latest">
                  <Button className="fw-bold" variant="primary" size="lg">
                    <span><FontAwesomeIcon className="px-2" icon={faDownload}></FontAwesomeIcon> Download Latest Release</span>
                  </Button>
                </a>
                <a href="https://docs.avalanchepowered.org">
                  <Button className="fw-bold" variant="secondary" size="lg">
                    <span><FontAwesomeIcon className="px-2" icon={faBook}></FontAwesomeIcon> Read Documentation</span>
                  </Button>
                </a>
              </div>
            </Col>
          </Row>

          <div className="pt-5 pt-lg-0"></div>

          <Row className="d-flex flex-mobile px-3 px-lg-0">
            <Col lg={6}>
              <p className="display-5 fw-bold">Functional access to all blocks and items.</p>
              <p>
                We aim to provide access to all Minecraft blocks and items by providing a modern level format.
                Not only do we provide access to these blocks and items, but we also do our best to implement their functionality
                and make sure they work as close to vanilla as possible!
              </p>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-center align-self-center mb-5 mb-lg-0">
              <FontAwesomeIcon icon={faSnowflake} className="lg-icon text-info" />
            </Col>
          </Row>

          <div className="massive-space-top"></div>

          <Row className="d-flex px-3 px-lg-0">
            <Col lg={6} className="d-flex justify-content-lg-center align-self-center mb-5 mb-lg-0">
              <FontAwesomeIcon icon={faSleigh} className="lg-icon text-primary" />
            </Col>
            <Col lg={6}>
              <p className="display-5 fw-bold">Creating plugins should not feel like a chore.</p>
              <p>
                We aim to provide a easy-to-use, understandable and predictable API for plugins to use, since Avalanche
                is written in Typescript, in theory, you can write your plugins in any language that transpiles to Javascript.
              </p>
            </Col>
          </Row>

          <div className="massive-space-top"></div>

          <Row className="d-flex flex-mobile px-3 px-lg-0">
            <Col lg={6}>
              <p className="display-5 fw-bold">Active maintainers, active community.</p>
              <p>
                Did you run into an issue whilst trying Avalanche? You can get support from our community in the
                the <a href="https://forums.avalanchepowered.org" className="fw-bold text-decoration-none">Forums</a> and
                the <a href="https://discord.gg/2yVBFtw" target="_blank" className="fw-bold text-decoration-none">Discord Guild</a>,
                we keep both of those places clean and friendly to make sure you always feel welcomed in our community.
              </p>
            </Col>
            <Col lg={6} className="d-flex order-0 justify-content-lg-center align-self-center mb-5 mb-lg-0">
              <FontAwesomeIcon icon={faCandyCane} className="lg-icon text-info" />
            </Col>
          </Row>

          <div className="massive-space-top"></div>

          <Row className="d-flex px-3 px-lg-0">
            <Col lg={6} className="d-flex justify-content-lg-center align-self-center mb-5 mb-lg-0">
              <FontAwesomeIcon icon={faMitten} className="lg-icon text-primary" />
            </Col>
            <Col lg={6}>
              <p className="display-5 fw-bold">The control is all in your, mittens.</p>
              <p>
                We give you full control over what you want your server to be like, customize in any way you wish,
                provide a unique experience to your players, the experience they want and deserve, it's all up to you.
              </p>
            </Col>
          </Row>

          <div className="pt-5 mt-4 my-lg-5 py-lg-4"></div>

          <Container className="pb-5 px-0">
            <Row className="row-cols-2">
              <Col lg={3} className="text-center mt-5">
                <div>
                  <FontAwesomeIcon icon={faBookOpen} size="5x" className="text-info" />
                </div>
                <a className="text-decoration-none" href="https://docs.avalanchepowered.org">
                  <Button variant="secondary" className="mt-4" size="md">
                    <FontAwesomeIcon className="px-2" icon={faBookOpen} /> Docs
                  </Button>
                </a>
              </Col>
              <Col lg={3} className="text-center mt-5">
                <div>
                  <FontAwesomeIcon icon={faDiscord} size="5x" className="text-primary" />
                </div>
                <a className="text-decoration-none" href="https://discord.gg/2yVBFtw" target="_blank">
                  <Button variant="secondary" className="mt-4" size="md">
                    <FontAwesomeIcon className="px-2" icon={faDiscord} /> Discord
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>

        </Container>
      </div >
    </>
  )
}

export default HomePage;