import React, { useEffect, useState } from "react"
import "../../styles/global.css"
import { ReactComponent as LeftChevron } from "../../assets/icons/left-chevron.svg"
import { ReactComponent as RightChevron } from "../../assets/icons/right-chevron.svg"

const testimonials = [
        {
                text: "“TAD is one of the most professional and talented agencies that I have had the pleasure of working with. The process from start to finish was seamless and very well organized. The attention to detail and willingness to ensure excellence is amazing. It truly felt like I was partnering with them.”",
                name: "Abi Oladesu",
                title: "Founder, Desu Beauty Inc"
        },

        {
                text: "“I got a comprehensive brand package with TAD and it exceeded my expectations.”",
                name: "John Doe",
                title: "Marketing Director, Coca Cola"
        },
        {
                text: "Working with this team has been a game changer!",
                name: "Emily White",
                title: "Founder, Innovatech",
        },
]

const Testimonial = () => {
        const [currentIndex, setCurrentIndex] = useState(0)

        useEffect(() => {
                const interval = setInterval(() => {
                        handleNext()
                }, 5000)
                return () => clearInterval(interval)
        }, [currentIndex])

        const handlePrev = () => {
                setCurrentIndex((prevIndex) =>
                        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                )
        }

        const handleNext = () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        };

        return (
                <div className="testimonial-section">
                        <h1 className="testimonial-title">What do our clients say?</h1>
                        <div className="testimonial-container">
                                {/* Left Chevron */}
                                <button className="chevron chevron-left" onClick={handlePrev}>
                                        <LeftChevron className="testimonial-left-chevron" />
                                </button>

                                {/* Testimonial Content */}
                                <div className="testimonial-content">
                                        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                                        <div className="testimonial-author">
                                                <strong>{testimonials[currentIndex].name}</strong>,<br></br>
                                                <span>{testimonials[currentIndex].title}</span>
                                        </div>
                                </div>

                                {/* Right Chevron */}
                                <button className="chevron chevron-right" onClick={handleNext}>
                                        <RightChevron className="testimonial-right-chevron" />
                                </button>
                        </div>
                </div>
        )

}

export default Testimonial