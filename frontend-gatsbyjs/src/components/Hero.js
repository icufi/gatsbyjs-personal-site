import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Max</h1>
            <h4>Full Stack Web and Web3 Developer</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className='social-link'>
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        ></StaticImage>
      </section>
    </header>
  )
}

export default Hero
