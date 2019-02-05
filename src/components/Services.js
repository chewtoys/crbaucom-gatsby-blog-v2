import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { FaShippingFast } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Icon from '../elements'
import bg from '../assets/img/lightning-pattern-trace-wide.png'

AOS.init()

const ServicesWrapper = styled.section`
  margin: 0 auto;
  width: 100vw;
  padding: 5rem 0 1rem;
  p {
    font-size: 1.35rem;
    line-height: 1.4;
  }
`

const SpeedWrapper = styled.section`
  width: 100%;
  background: linear-gradient(rgba(255, 218, 86, 0.7), rgba(255, 147, 86, 0.75)),
    url(${bg}) top;
  padding: 5rem 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  svg {
    color: #023767;
    width: 100px;
    height: 100px;
  }
  @media (min-width: 600px) {
    padding: 5rem 3rem;
  }
  .left {
    grid-column: 1 / -1;
    @media (min-width: 600px) {
      grid-column: 1 / 6;
    }
  }
  .right {
    grid-column: 1 / -1;
    @media (min-width: 600px) {
      grid-column: 6 / -2;
      display: grid;
      align-content: center;
    }
  }
`

const LighthouseWrapper = styled.section`
  width: 100%;
  background: #fff;
  display: grid;
  padding: 5rem 2rem;
  text-align: center;
  /* grid-template-rows: repeat(4, 1fr); */
  .left {
    grid-row: 1;
    h4 {
      font-size: 2rem;
    }
  }
  .right {
    /* grid-row: 2 / -1; */
  }
`

const OfflineWrapper = styled.section`
  width: 100%;
  height: 500px;
  overflow: hidden;
  background: #eee;
  display: grid;
  padding: 3rem 2rem;
  grid-template-columns: repeat(8, 1fr);
  .left {
    grid-column: 1 / 5;
  }
  .right {
    grid-column: 6 / -1;
    .gatsby-image-wrapper {
      max-height: 400px;
    }
  }
`

function Services() {
  return (
    <StaticQuery
      query={servicesQuery}
      render={data => {
        return (
          <ServicesWrapper>
            {/* <h2>I can help you:</h2> */}
            <div className="service-offers">
              <SpeedWrapper>
                <div
                  className="left"
                  data-aos="zoom-out-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-center"
                >
                  <h2>Speed up your site</h2>
                  <FaShippingFast />
                </div>
                <div className="right">
                  <p>
                    Do you want your website to be super fast and secure? A
                    static site is the way to go.
                  </p>
                </div>
              </SpeedWrapper>
              <LighthouseWrapper>
                <div className="left">
                  <h4>Improve your site score</h4>
                  <p>
                    Already have a website? Audit your site using Google's free
                    automated tool,{' '}
                    <a href="https://developers.google.com/web/tools/lighthouse/">
                      Lighthouse
                    </a>
                    , to check the quality of your web page.
                  </p>
                </div>
                <div className="right">
                  <Image
                    fluid={data.lighthouseImg.childImageSharp.fluid}
                    alt="Lighthouse score improvement image"
                  />
                </div>
              </LighthouseWrapper>
              <OfflineWrapper>
                <div className="left">
                  <h2>Take your content offline</h2>
                  <p>
                    With progressive web apps and service workers, your site
                    will continue to work offline.
                  </p>
                  <p>Never have to see </p>
                </div>
                <div
                  className="right"
                  data-aos="slide-left"
                  data-aos-offset="200"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                >
                  <Image
                    fluid={data.offlineImg.childImageSharp.fluid}
                    alt="Offline phone image"
                  />
                </div>
              </OfflineWrapper>
            </div>
          </ServicesWrapper>
        )
      }}
    />
  )
}

const servicesQuery = graphql`
  query ServicesQuery {
    lighthouseImg: file(
      absolutePath: { regex: "/assets/img/bad-to-good-lighthouse-score.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    offlineImg: file(
      absolutePath: { regex: "/assets/img/offline-android.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Services