import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade} from 'react-slideshow-image'
import home1 from '../image/home1.jpg'
import home2 from '../image/home2.jpg'
import home3 from '../image/home3.jpg'



const SlideImages =[{ url :home1},{url :home2},{url :home3}];


const divStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"700px",
    backgroundSize:"cover",
    setTimeout:"2000",
    
}

    function ImageSlider(){

        return(
            <div className='slide-container'>
                
                <Fade>
                    {SlideImages.map((image,index)=>(
                        <div key={index}>
                            <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
                                  
                            </div>
                        </div>
                    ))}
                </Fade>
                
         
           
            </div>
        )
    }

  
 
export default ImageSlider;



