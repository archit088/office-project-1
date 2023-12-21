import React from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import image1 from '../../Assets/Images/image1.jpg'
// import image2 from '../../Assets/Images/image2.jpg'
// import image3 from '../../Assets/Images/image3.jpg'
// import image4 from '../../Assets/Images/image4.jpg'

// const list = [
//     {
//         "service_id": 1,
//         "file": image1,
//         "mime_type": "image/jpeg"
//     },
//     {
//         "service_id": 2,
//         "file": image2,
//         "mime_type": "image/jpeg"
//     },
//     {
//         "service_id": 3,
//         "file": image3,
//         "mime_type": "image/jpeg"
//     },
//     {
//         "service_id": 4,
//         "file": image4,
//         "mime_type": "image/jpeg"
//     },
// ]

function BannerSlider({height, images}) {
  return (
    <div>
        {
            images.length > 0 && 
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
                    {
                        images.map(i=> (
                            <div className='item' key={i.service_id}>
                                <img
                                    src={i.file}
                                    alt="service"
                                    height={height}
                                    width="100%"
                                    style={{
                                        objectFit : "cover"
                                    }}
                                />
                            </div>
                        ))
                    }
            </OwlCarousel>
        }
    </div>
  )
}

BannerSlider.defaultProps = {
    height : 400,
    images : []
}

BannerSlider.propTypes = {
    height : PropTypes.number,
    images : PropTypes.arrayOf(PropTypes.any),
}

export default BannerSlider