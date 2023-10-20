import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from '../../Assets/Images/image1.jpg'
import image2 from '../../Assets/Images/image2.jpg'
import image3 from '../../Assets/Images/image3.jpg'
import image4 from '../../Assets/Images/image4.jpg'

function BannerSlider() {
  return (
    <div>
        <OwlCarousel 
            className='owl-theme' 
            loop 
            responsive={{
                0 : {
                    items : 1
                },
                600 : {
                    items : 1
                },
                1000 : {
                    items : 1
                }
            }}
            >
            <div className='item'>
                <img
                    src={image1}
                    alt="service"
                    height={400}
                    width="100%"
                    style={{
                        objectFit : "cover"
                    }}
                />
            </div>
            <div className='item'>
                <img
                    src={image2}
                    alt="service"
                    height={400}
                    width="100%"
                    style={{
                        objectFit : "cover"
                    }}
                />
            </div>
            <div className='item'>
                <img
                    src={image3}
                    alt="service"
                    height={400}
                    width="100%"
                    style={{
                        objectFit : "cover"
                    }}
                />
            </div>
            <div className='item'>
                <img
                    src={image4}
                    alt="service"
                    height={400}
                    width="100%"
                    style={{
                        objectFit : "cover"
                    }}
                />
            </div>
        </OwlCarousel>
    </div>
  )
}

export default BannerSlider