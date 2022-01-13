import { Navbar, Nav, Button, Container, Figure, Col, Row, Form, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OurMission from './assets/images/ourmission.jpg'
import OurVision from './assets/images/vision.jpg'
import Clients from './assets/images/clients-1.png'
import About from './assets/images/about.jpg'

import Blog1 from './assets/images/blog1.jpg'

import blog1 from './assets/images/blog-10.jpg'
import blog2 from './assets/images/blog-11.jpg'

function App() {
  return (
    <div >
      <Navbar bg="light" expand="lg" fixed="top" className="navbar">
        <Container>
          <div className="NavbarSection">
            <Navbar.Brand href="#home">Aduacious Technology</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto navSection">
                <Nav.Link href="#home" className="navLink">Home</Nav.Link>
                <Nav.Link href="#About" className="navLink">About US</Nav.Link>
                <Nav.Link href="#Services" className="navLink">Services</Nav.Link>
                <Nav.Link href="#Project" className="navLink">Project</Nav.Link>
                <Nav.Link href="#Blog" className="navLink">Blog</Nav.Link>
                <Nav.Link href="#Contact" className="navLink">Contact</Nav.Link>
              </Nav>
              <Button className="ms-auto theme-btn btn-style-box btn" size="sm">Get A Quote</Button>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <section className="banner-section-box">
        <div className="carousel-column">
          <div className="carousel-outer">
            <ul className="banner-carousel">
              <li className="slide-item background-image">
                <Container>
                  <div className="content-box">
                    <div className="content-box-inn">
                      <h1>Digital Solution for <br />Your Business</h1>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec consectetur tortor  </div>
                      <div className="link-box">
                        <a href="about.html" className="theme-btn btn-style-one">Read More</a>
                      </div>
                    </div>
                  </div>
                </Container>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <Container>
          <Row>
            <Col Xl={12}>
              <div className="inner-column">
                <h3>Provide Solutions For the Realiable Growth</h3>
                <a href={() => false} className="get-quote-btn btn-style-six">Get A Quotes</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="feautred-section">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="sec-title left">
                <h2>How We Make Work <br /> Successful Business in 4 Steps</h2>
                <div className="separater"></div>
              </div>
            </Col>
          </Row>
          <Row className="featured-box clearfix">
            <Col lg={3} md={6} sm={12}>
              <div className="inner-box">
                <div className="title-box">
                  <h4><span className="numbe-post">1</span>Analize</h4>
                </div>
                <div className="lower-content">
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="inner-box">
                <div className="title-box">
                  <h4><span className="numbe-post">2</span>Advise</h4>
                </div>
                <div className="lower-content">
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="inner-box">
                <div className="title-box">
                  <h4><span className="numbe-post">3</span>Strategy</h4>
                </div>
                <div className="lower-content">
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="inner-box">
                <div className="title-box">
                  <h4><span className="numbe-post">4</span>Result</h4>
                </div>
                <div className="lower-content">
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-mission-section">
        <Container>
          <Row>
            <Col xl={6} lg={12} md={12} sm={12}>
              <div className="inner-box">
                <div className="sec-title left">
                  <h2>We Are 20 Years Experience in Financial and Business</h2>
                  <div className="separater"></div>
                </div>
                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                <div className="clearfix fun-fact-section">
                  <div className="fact-counter-two">
                    <Row>
                      <Col lg={4} md={4} sm={12} div className="counter-column">
                        <div className="count-box">
                          <div className="count"><span className="count-text">250</span></div>
                          <h6 className="counter-title">Setisfied Clints</h6>
                        </div>
                      </Col>
                      <Col lg={4} md={4} sm={12} div className="counter-column">
                        <div className="count-box">
                          <div className="count"><span className="count-text">15</span></div>
                          <h6 className="counter-title">Awards</h6>
                        </div>
                      </Col>
                      <Col lg={4} md={4} sm={12} div className="counter-column">
                        <div className="count-box">
                          <div className="count"><span className="count-text">150</span></div>
                          <h6 className="counter-title">Project Completed</h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12}>
              <div className="innner-box">
                <div className="image-box">
                  <Figure>
                    <Figure.Image
                      src={OurMission}
                    />
                  </Figure>
                </div>
                <div className="info-box">
                  <h4>Our Mission</h4>
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</div>
                  <a href={() => false} className="readmore-btn">Read More</a>
                </div>
              </div>
              <div className="innner-box">
                <div className="image-box">
                  <Figure>
                    <Figure.Image
                      src={OurVision}
                    />
                  </Figure>
                </div>
                <div className="info-box">
                  <h4>Our Vision</h4>
                  <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</div>
                  <a href={() => false} className="readmore-btn">Read More</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section-box">
        <Container>
          <div className="sec-title centered">
            <h2>Our Services</h2>
            <div className="separater"></div>
          </div>
          <Row className="services-box clearfix">
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>Software Consulting</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>Web Design</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>Software Development</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>Mobile Devlopment</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>Web App Development</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="lower-content">
                    <h3><a href={() => false}>CMS Development</a></h3>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="paralex-section services-image">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="inner-column text-center">

                <h2>Lorem Ipsum <br /> simply dummy text of the printing </h2>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation</div>
                <a href={() => false} className="theme-btn btn-style-one">Our Services</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-skill-section">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} className="accordion-column">
              <div className="sec-title left">
                <h2>Some FAQ’s</h2>
                <div className="separater"></div>
              </div>
              <ul className="accordion-box">
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-outer"><span className="icon icon_plus fas fa-plus"></span> <span className="icon icon_minus far fa-minus"></span> </div>
                    Look at your customers’ questions ?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn active">
                    <div className="icon-outer"><span className="icon icon_plus fas fa-plus"></span> <span className="icon icon_minus far fa-minus"></span> </div>
                    Evidence shows advisers already working ?
                  </div>
                  <div className="acc-content current">
                    <div className="content">
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-outer"><span className="icon icon_plus fas fa-plus"></span> <span className="icon icon_minus far fa-minus"></span> </div>
                    Look at your competitors’ websites ?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-outer"><span className="icon icon_plus fas fa-plus"></span> <span className="icon icon_minus far fa-minus"></span> </div>
                    Look at Google and Quora ?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</div>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={6} md={12} sm={12} className="accordion-column">
              <div className="sec-title left">
                <h2>Our Statistics Skill Rate</h2>
                <div className="separater"></div>
              </div>
              <div className="text">This product is meant for educational purposes only. Resemblance to real persons, living or dead is coincidental.</div>
              <div className="inner-box">
                <div className="progress-levels">
                  <div className="progress-box">
                    <div className="box-title">Look at your customers’ questions</div>
                    <ProgressBar now={65} />
                  </div>
                  <div className="progress-box">
                    <div className="box-title">Eeconomic Growth</div>
                    <ProgressBar now={90} />
                  </div>
                  <div className="progress-box">
                    <div className="box-title">Achieves Goals</div>
                    <ProgressBar now={80} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-section">
        <Container fluid>
          <Row className="clearfix">
            <Col lg={6} md={12} sm={12} className="image-column">
              <Figure className="image-box">
                <Figure.Image
                  src={About}
                />
              </Figure>
            </Col>
            <Col lg={6} md={12} sm={12} className="content-cloumn">
              <div className="inner-column">
                <div className="sec-title left">
                  <h2>If you want to be a Part of Our Team? Join Us Now.</h2>
                  <div className="separater"></div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Business Development Manager</h5>
                    <div className="text">Organized and well-connected Business Development Manager focused on solution selling to build trusted relationships with companies.</div>
                  </div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Project Lead</h5>
                    <div className="text">Organized and well-connected Business Development Manager focused
                      on solution selling to build trusted relationships with companies.</div>
                  </div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Business Solutions Analyst</h5>
                    <div className="text">Organized and well-connected Business Development Manager focused
                      on solution selling to build trusted relationships with companies.</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-section-box">
        <Container>
          <div className="sec-title left">
            <h2>Latest Blog Update</h2>
            <div className="separater"></div>
          </div>
          <Row className="blog-box">
            <Col xl={4} lg={4} md={4}>
              <div className="blog-carousel">
                <div className="blog-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image
                          src={Blog1}
                        />
                      </Figure>
                    </div>
                    <div className="caption-box">
                      <h3><a href="blog-detail.html">What is Lorem Ipsum?...</a></h3>
                      <ul className="post-meta">
                        <li>Post: 15 April 2018</li>
                      </ul>
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div>
                      <a href={() => false} className="readmore-btn">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="blog-carousel">
                <div className="blog-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image
                          src={Blog1}
                        />
                      </Figure>
                    </div>
                    <div className="caption-box">
                      <h3><a href="blog-detail.html">What is Lorem Ipsum?...</a></h3>
                      <ul className="post-meta">
                        <li>Post: 15 April 2018</li>
                      </ul>
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div>
                      <a href={() => false} className="readmore-btn">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="blog-carousel">
                <div className="blog-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image
                          src={Blog1}
                        />
                      </Figure>
                    </div>
                    <div className="caption-box">
                      <h3><a href="blog-detail.html">What is Lorem Ipsum?...</a></h3>
                      <ul className="post-meta">
                        <li>Post: 15 April 2018</li>
                      </ul>
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div>
                      <a href={() => false} className="readmore-btn">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-section">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="form-column">
              <div className="sec-title left">
                <h2>Contact Us</h2>
                <div className="separater"></div>
              </div>
              <div className="inner-column">
                <div className="contact-form">
                  <Form>
                    <Row>
                      <Col lg={6} md={12} className="form-group">
                        <Form.Control type="text" name="username" placeholder="Name" required="" />
                      </Col>
                      <Col lg={6} md={12} className="form-group">
                        <Form.Control type="text" name="phone" placeholder="Phone" required="" />
                      </Col>
                      <Col lg={6} md={12} className="form-group">
                        <Form.Control type="email" name="email" placeholder="Email Address" required="" />
                      </Col>
                      <Col lg={6} md={12} className="form-group">
                        <Form.Control type="text" name="company" placeholder="Company" required="" />
                      </Col>
                      <Col lg={12} md={12} className="form-group">
                        <Form.Control as="textarea" rows={3} name="message" placeholder="Massage" />
                      </Col>
                      <Col lg={12} md={12} className="form-group">
                        <Button className="theme-btn btn-style-one" type="submit" name="submit-form">Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12} className="info-column">
              <div className="sec-title left">
                <h2>Need Quick Query?</h2>
                <div className="separater"></div>
              </div>
              <div className="inner-column">
                <ul className="contact-info">
                  <li> <i className="icon flaticon-email"></i> <span>Email:</span> <br /> <a href={() => false}> Email@example.com</a></li>
                  <li> <i className="icon flaticon-phone-call"></i> <span>Call Us:</span> <br /> (+91) 1234 5678 9012</li>
                  <li><i className="icon flaticon-clock"></i> <span>Time Office:</span> <br /> Monday to Friday 9:00am - 6:00pm</li>
                  <li><i className="icon flaticon-placeholder"></i> <span>Address Office:</span> <br /> Global Street 2002 Newtark
                    United State</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="clients-section">
        <Container>
          <div className="sponsors-outer">
            <ul className="sponsors-carousel">
              <li className="slide-item">
                <Figure>
                  <a href={() => false}>
                    <Figure.Image
                      src={Clients}
                    />
                  </a>
                </Figure>
              </li>
              <li className="slide-item">
                <Figure>
                  <a href={() => false}>
                    <Figure.Image
                      src={Clients}
                    />
                  </a>
                </Figure>
              </li>
              <li className="slide-item">
                <Figure>
                  <a href={() => false}>
                    <Figure.Image
                      src={Clients}
                    />
                  </a>
                </Figure>
              </li>
              <li className="slide-item">
                <Figure>
                  <a href={() => false}>
                    <Figure.Image
                      src={Clients}
                    />
                  </a>
                </Figure>
              </li>
              <li className="slide-item">
                <Figure>
                  <a href={() => false}>
                    <Figure.Image
                      src={Clients}
                    />
                  </a>
                </Figure>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <footer className="main-footer style-two footer-image">
        <Container>
          <div className="widgets-section">
            <Row className="clearfix">
              <Col xl={8} lg={12} md={12} sm={12} className="big-column">
                <Row>
                  <Col lg={5} md={12} sm={12} className="footer-column">
                    <div className="footer-widget about-widget">
                      <div className="footer-logo"><a href={() => false}><img src="images/logo-2.png" alt="" /></a></div>
                      <div className="widget-content">
                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been... <a href={() => false}> Read More</a></div>
                        <ul className="info-box">
                          <li><i className="far fa-map"></i>Global Street 2002 Newtark
                            United State.</li>
                          <li><i className="fa fa-phone-volume"></i> <span>Office & Factory:</span> +012-1234567890 </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={12} sm={12} className="footer-column">
                    <div className="footer-widget links-widget">
                      <h2 className="widget-title">Usefull Links</h2>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href={() => false}>About Us</a></li>
                          <li><a href={() => false}>Meet Our Team</a></li>
                          <li><a href={() => false}>Case Studies</a></li>
                          <li><a href={() => false}>Get a Quote</a></li>
                          <li><a href={() => false}>Testimonials</a></li>
                          <li><a href={() => false}>Contact Us</a></li>
                        </ul>
                        <ul className="list">
                          <li><a href={() => false}>About Us</a></li>
                          <li><a href={() => false}>Meet Our Team</a></li>
                          <li><a href={() => false}>Case Studies</a></li>
                          <li><a href={() => false}>Get a Quote</a></li>
                          <li><a href={() => false}>Testimonials</a></li>
                          <li><a href={() => false}>Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xl={4} lg={12} md={12} sm={12} className="big-column">
                <Row>
                  <Col lg={12} md={12} sm={12} className="footer-column">
                    <div className="footer-widget recent-posts">
                      <h2 className="widget-title">Recent Posts</h2>
                      <div className="widget-content recent-carousal">
                        <div className="item">
                          <div className="post">
                            <ul className="post-date">
                              <li>October 05, 2018</li>
                            </ul>
                            <div className="thumb"><a href="blog-detail.html"><img src={blog1} alt="" /></a></div>
                            <h4><a href="blog-detail.html">Lorem Ipsum is simply dummy text of the printing and....</a></h4>
                          </div>
                          <div className="post">
                            <ul className="post-date">
                              <li>August 14, 2018</li>
                            </ul>
                            <div className="thumb"><a href="blog-detail.html"><img src={blog2} alt="" /></a></div>
                            <h4><a href="blog-detail.html">Lorem Ipsum is simply dummy text of the printing and....</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footer-bottom">
          <Container>
            <div className="inner-container clearfix">
              <div className="copyright-text">Copyright &copy; 2021 <a href={() => false}>Aduacious Technology</a> All rights reserved.</div>
              <div className="social-links">
                <ul className="social-icon-two">
                  <li><a href={() => false}><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href={() => false}><i className="fab fa-twitter"></i></a></li>
                  <li><a href={() => false}><i className="fab fa-skype"></i></a></li>
                  <li><a href={() => false}><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </footer>

    </div>
  );
}

export default App;
