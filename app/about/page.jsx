import React from "react"
import { about } from "../styles/common"

const About = () => {
  return (
    <div className={about.box}>
      <div className="about">
        <h4 className="text-2xl pb-8"> Welcome to Our Company</h4>
        <p>
          At Our Company, we are committed to providing top-notch products and
          services that exceed our customers' expectations. With a dedicated
          team of passionate professionals, we strive to make a positive impact
          in the industry and the communities we serve.
        </p>
        <h4 className="text-2xl pb-8 pt-12"> Join Our Team</h4>
        <p>
          We are always on the lookout for talented individuals to join our
          team. If you are passionate about JOY and want to be part of an
          exciting journey, check out our careers page for current job openings.
          Contact Us If you have any questions or inquiries, don't hesitate to
          get in touch with us. You can reach us through our contact page or
          simply give us a call at +91 9931141310. We look forward to hearing
          from you!
        </p>
        <h4 className="text-2xl pb-8 pt-12"> What Sets Us Apart</h4>
        <p className="text-left">
          At Our Company, we take pride in our unwavering commitment to quality,
          reliability, and customer satisfaction. Here are some key factors that
          set us apart from the rest:
        </p>
        <ul className="text-left">
          <li className="mt-2 mb-2">
            <b> Experienced Team:</b> Our team comprises skilled professionals
            with years of experience in the [industry/service] domain. Their
            expertise allows us to deliver outstanding results.
          </li>
          <li className="mt-2 mb-2">
            <b> Innovation:</b> We believe in staying ahead of the curve by
            embracing the latest technologies and industry trends. Our
            innovative approach enables us to offer cutting-edge solutions to
            our clients.
          </li>
          <li className="mt-2 mb-2">
            <b>Customer-Centric Approach:</b> Our customers are at the heart of
            everything we do. We listen to their needs, understand their
            challenges, and tailor our solutions to meet their unique
            requirements.
          </li>
          <li className="mt-2 mb-2">
            <b>Sustainability:</b> We are deeply committed to sustainability and
            environmental responsibility. We integrate eco-friendly practices
            into our operations to minimize our ecological footprint.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
