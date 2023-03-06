import React from 'react';
import './Review.css';

function Reviews() {
    return (
        <div className="reviews-container" id='review'>
            <h1>REVIEWS</h1>
            <div className="review-card">
                <div className="review-card-left" data-aos="fade-right">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile" />
                    <h3>Jenny Volsa</h3>
                </div>
                <div className="review-card-right">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Accurate, efficient, reliable accounting services with great customer satisfaction."</p>
                </div>
            </div>
            <div className="review-card">
                <div className="review-card-left">
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile" />
                    <h3>Ricky Gotham</h3>
                </div>
                <div className="review-card-right" data-aos="fade-left" >
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Reliable accounting firm with excellent service and expertise."</p>

                </div>
            </div>
            <div className="review-card">
                <div className="review-card-left" data-aos="fade-right">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile" />
                    <h3>Narang Murli</h3>
                </div>
                <div className="review-card-right">
                    <p>⭐⭐⭐⭐</p>
                    <p>"Accurate, efficient, and trustworthy accounting services for your business."</p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
