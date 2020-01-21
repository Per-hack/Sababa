import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import {
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Navbar
} from "reactstrap";
import Footer from "../Footer/footer";
import Logo from "../../../assets/img/saaba.png";
import { Input, Tooltip, Icon } from "antd";

const Home = props => {
  return (
    <div>
      <div className="row" align="center">
        <div
          className="col header-home"
          style={{ background: "#FD8C1A", height: "30vh" }}
        >
          <Input
            placeholder="Enter Delivery Address"
            style={{ width: 600, textAlign: "center" }}
            prefix={
              <Icon
                type="environment"
                style={{ fontSize: "1.2rem" }}
                theme="filled"
              />
            }
            suffix={
              <Tooltip title="Extra information">
                <Icon
                  type="right-circle"
                  style={{ fontSize: "1.2rem" }}
                  theme="filled"
                />
              </Tooltip>
            }
          />
        </div>
      </div>

      <div class="container">
        <hr />

        <div class="row">
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/ojb106167/image.jpg" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Become a Rider</h4>
                <p class="desc">As a delivery driver, you’ll make reliable money—working anytime,anywhere. 
                                Become a rider and enjoy the freedom to fit work around your life.
                                Plus great fees, perks and discounts.</p>
                
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn-sm btn-primary float-right">
                Start earning and Ride with Us.
                </a>
              </div>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/ojb106167/image.jpg" />{" "}
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Good product</h4>
                <p class="desc">Some small description goes here</p>
                <div class="rating-wrap">
                  <div class="label-rating">132 reviews</div>
                  <div class="label-rating">154 orders </div>
                </div>
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn-sm btn-primary float-right">
                SignUp your Store and Partner with Us.
                </a>
                <div class="price-wrap h5">
                  <span class="price-new">$1280</span>{" "}
                  <del class="price-old">$1980</del>
                </div>
              </div>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img src="https://s9.postimg.org/4ooze1tof/image.jpg" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Product name goes here</h4>
                <p class="desc">Some small description goes here</p>
                <div class="rating-wrap">
                  <div class="label-rating">132 reviews</div>
                  <div class="label-rating">154 orders </div>
                </div>
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn-sm btn-primary float-right">
                Try the App.
                </a>
                <div class="price-wrap h5">
                  <span class="price-new">$1280</span>{" "}
                  <del class="price-old">$1980</del>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
      
    <div className="section-two-container">
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/tilapia 1.jpeg"
          alt="Card image cap"
        />

        <i className="fas-fa-route"></i>
        <CardBody>
          <CardTitle>Local Foods</CardTitle>
          <CardSubtitle>
            Enjoy great cuisine and meals prepaired by our local Kisumu women
          </CardSubtitle>
          <CardText></CardText>
          <Button>
            <h4>Explore</h4>
          </Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/culture"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>
            <h4>
              Explore <i className="fas-fa-arrow"></i>
            </h4>
          </Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/lake basin4.jpeg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};


      {/* <CardDeck className="continer">
          <Card style={{width:"9rem"}}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2317408/pexels-photo-2317408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>Become a Rider</Card.Title>
              <Card.Text>
                As a delivery driver, you'll make reliable money—working
                anytime, anywhere. Become a rider and enjoy the freedom to fit
                work around your life. Plus great fees, perks and discounts.
              </Card.Text>
            </Card.Body>

            <button>
              <small className="text-muted">
                Start earning and Ride with Us.
              </small>
            </button>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <Card.Body>
              <Card.Title>Become a Partner</Card.Title>
              <Card.Text>
                Grow your business and reach new customers by partnering with
                us. We handle delivery, so you can focus on the food, the
                produce and service.
              </Card.Text>
            </Card.Body>

            <button>
              <small className="text-muted">
                Sign Up your Store and Partner with Us
              </small>
            </button>
          </Card>
          <Card>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title>Try the App</Card.Title>
              <Card.Text>
                Get the best Sababa experience with live order tracking.
              </Card.Text>
            </Card.Body>

            <button>
              <small className="text-muted">Get the App</small>
            </button>
          </Card>
        </CardDeck> */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Home;
