import React from "react";
import Footer from "../Footer/footer";
import Logo from "../../../assets/img/saaba.png";
import { Input, Tooltip, Icon } from "antd";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import kfc from '../../../assets/img/kfc.jpeg'
import javahouse from '../../../assets/img/javahouse.jpeg'
import lb from '../../../assets/img/lb.jpeg'
import gm from '../../../assets/img/gm.jpeg'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
    {
      img: kfc,
       title: 'KFC',
       author: 'author',
     },{
      img: javahouse,
      title: 'Java House',
      author: 'author',
     },{
      img: lb,
      title: 'Laughing Buddha',
      author: 'author',
     },{
      img:gm,
      title: 'Garam Masala',
      author: 'author',
     }
    ]

function SingleLineGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

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

  <div class="row space" >
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img class="img2" src="https://images.pexels.com/photos/2317408/pexels-photo-2317408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Become a Rider</h4>
                <p class="desc">As a delivery driver, you’ll make reliable money—working anytime, anywhere. 
                                Become a rider and enjoy the freedom to fit work around your life.
                                Plus great fees, perks and discounts..</p>
                
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn1 btn-sm btn-primary float-right">
                Start earning and Ride with Us.
                </a>
              </div>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img class="img1" src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Become a Partner</h4>
                <p class="desc">Grow your business and reach new customers by partnering with us. 
                                We handle delivery, so you can focus on the food, the produce and service.</p>
              
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn2 btn-sm btn-primary float-right">
                SignUp your Store and Partner with Us.
                </a>
              </div>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="card card-product">
              <div class="img-wrap">
                <img variant="top" src={Logo} />
              </div>
              <figcaption class="info-wrap">
                <h4 class="title">Try the App.</h4>
                <p class="desc">Get the best Sababa experience with live order tracking.</p>
              </figcaption>
              <div class="bottom-wrap">
                <a href="" class="btn btn3 btn-sm btn-primary float-right">
                Get the App.
                </a>
              </div>
            </figure>
          </div>
          {/* <Card className="bg-dark text-white">
  <Card.Img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Every Flavour Welcome</Card.Title>
    <Card.Text>
    From your neighbourhood spot to the burger and fries you crave, choose from  
          local and national favourites across the Area.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-white">
  <Card.Img src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>You’ve got stuff to do? We’ve got options.</Card.Title>
    <Card.Text>
    From your favourite vendors, corner stores, farmers market, known Outlets and Supermarkets. 
    Get it delivered right to your door.  
    </Card.Text>
  </Card.ImgOverlay>
</Card>    */}

<div className='main-div'>
  <div className='text-content'>
    <h1>Every Flavour Welcome</h1>
    <p>From your neighbourhood spot to the burger and fries you crave, choose from  local and national favourites across the Area.
    <br/>
    <button className="btn btn-danger" type="button">Order Now</button>
</p>
  </div>
  <div>
  <img src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image' alt=''/>
  </div>
  <div className='text-content2'>
    <h1>You’ve got stuff to do? We’ve got options.</h1>
    <p>From your favourite vendors, corner stores, farmers market, known Outlets and Supermarkets. Get it delivered right to your door.  
    <br/>
    <button className="btn btn-danger" type="button">Order Now</button>
</p>
  </div>
  <div>
  <img src='https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image' alt=''/>
  </div>
</div>
        </div>
        
        <SingleLineGridList/>
        
        <Footer/>
        
        </div>

  );
};

export default Home;
