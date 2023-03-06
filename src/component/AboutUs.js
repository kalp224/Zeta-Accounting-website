import React from 'react'
import "./AboutUs.css"

// import Office from "../public/asset/office-img.jpg";



function AboutUs() {
    return (

        <div className='about-containers' id='about'>
            <div className='officeimg' data-aos="fade-up">
                <img src='asset/office-img.jpg' />
                <div className="content">

                    <div className='about-text' data-aos="fade-up">
                        <h1>ABOUT US</h1>
                        <p>Zeta Accounting is a premier finance company dedicated to providing comprehensive accounting services to businesses of all sizes. With a team of experienced professionals and cutting-edge technology, we help our clients stay on top of their finances and make informed decisions for long-term success.</p>
                        <div className="banner_btn">
                            <a href='' className='btn btn-smart'>Know More</a>

                        </div>

                    </div>
                </div>


            </div>
        </div>




    )
}

export default AboutUs
