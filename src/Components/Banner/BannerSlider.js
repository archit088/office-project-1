import React from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useWidth from '../../helper/widthCalculate';
import { Box } from '@mui/material';

function BannerSlider({height, images}) {
    const width = useWidth()
    const bannerHeight = ['xs', 'sm'].includes(width) ? 200 : height
  return (
    <div>
        {
            images.length > 0 && 
            <OwlCarousel 
                className='owl-theme' 
                loop 
                autoplay
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
                                <Box>
                                    <img
                                        src={i.file}
                                        alt="service"
                                        height={bannerHeight}
                                        width="100%"
                                        style={{
                                            objectFit : "cover"
                                        }}
                                    />
                                </Box>
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