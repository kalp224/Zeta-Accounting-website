import React from 'react'
import "./OurServices.css"



const OurServices = () => {
    return (
        <div className='OurServices' id='service'>
            <h1>OUR SERVICES</h1>
            <div className='cards'>
                <div className="service-bottom" data-aos="fade-up-left">
                    <i class="fa-solid fa-book"></i>
                    <h3>Book Keeping</h3>
                    <p>
                        Recording and maintaining financial transactions accurately and consistently.
                    </p>
                </div>

                <div className="service-bottom" data-aos="fade-up-left">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <h3>Tax preparation and planning</h3>
                    <p>
                        Preparing and filing tax returns and minimizing tax liabilities.
                    </p>
                </div>

                <div className="service-bottom" data-aos="fade-up-right">
                    <i class="fa-solid fa-coins"></i>
                    <h3>Financial statement preparation</h3>
                    <p>
                        Creating financial reports such as balance sheets and income statements.
                    </p>
                </div>

                <div className="service-bottom" data-aos="fade-up-right">
                    <i class="fa-solid fa-binoculars"></i>
                    <h3>Auditing</h3>
                    <p>
                        Independent assessment of financial statements and internal controls.
                    </p>
                </div>
            </div>


        </div>

    )
}

export default OurServices
