import React from 'react';
// import Layout from '../components/layout';
import 'isomorphic-fetch';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photos: [],
        };
    }
  componentDidMount(){
    
    fetch('https://graph.facebook.com/centurypinesALF/photos?access_token=1060624467289271%7C4d65168faf735397427bda4bf31245f6&type=uploaded').then(res=>res.json()).then((data)=>{
        this.setState({photos: data.data});
    }).then(()=>{
        var grid = document.querySelector('#gallery');
        var msnry = new Masonry( grid, {
          // options...
          itemSelector: '.picture',
        //   columnWidth: 200
        });
    
        imagesLoaded( grid ).on( 'progress', function() {

          msnry.layout();
        });
    })
  
  }
  render() {
    const { photos } = this.state;   
    return (
        <div>
          <h2>Serving the Senior Population of Southwest Missouri for Over 30 years</h2>
          <p>
            Century Pines has been serving the senior population of Christian, Greene and the surrounding counties for nearly 40 years.
            It began as a small family owned and operated long term care facility in 1980. There have been many changes over the years.
            However, one thing remains constant, our family's commitment to superior care, comfort, and accomodations for our residents.

          </p>
          <p>A poem about Century Pines by resident "Chipper" Ginny Abel</p>
          <p style={{textAlign: 'center'}}>
            <em>Home</em><br/><br/>

              I enjoy life at the place I live<br/>
              where God's love people do give<br/>
              each one may seem to be ill<br/>
              nurses are there to give a pill<br/>
              the many services are truly great<br/>
              thus receiving a number one rate<br/>
              our housekeeper is on the ball<br/>
              no clutter, lest anyone should fall<br/>
              the cook passes most every test<br/>
              his dinners are the very best<br/>
              the nurses and the nurse's aides<br/>
              truly rank in the finest grades<br/>
              the other employees make your day<br/>
              as one and all join in to pray<br/>
              so come here if you need care<br/>
              you'll find it's the best anywhere!<br/>
          </p>
            <a href="https://www.facebook.com/centurypinesALF" style={{
              display: 'inline-block',
              padding: '30px',
              background: '#3B5998',
              color: 'white',
              marginBottom: '30px',
              textDecoration: 'none'
            }}>Check us out on Facebook!</a>
          <div id="gallery" >

            {photos.map((photo, i) => (
                <img key={photo.id} alt="" className="picture"  src={`https://graph.facebook.com/${photo.id}/picture`} />
            ))}
          </div>


          <style jsx>
          {`
            .picture {
              width: 33%;
            }
            @media (max-width: 670px) {
              .picture {
                width: 50%;
              }
            }
            `}
        </style>
        </div>

    )
  }
};

