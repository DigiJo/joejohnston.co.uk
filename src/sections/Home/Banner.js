import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'
import { transparentize } from 'polished'
import { Folder, Mail } from 'react-feather'

import { Container as BannerContainer } from '../../components/Banner'
import Box from '../../components/Box'
import { ButtonLink } from '../../components/Button'
import Wrapper from '../../components/Wrapper'
import SEO from '../../components/SEO'

import webmCover from '../../assets/vid/landing-cover.webm'
import mp4Cover from '../../assets/vid/landing-cover.mp4'

import svgSilhouette from '../../assets/img/silhouette.svg'
import svgFace from '../../assets/img/avatar.svg'

const Container = BannerContainer.extend`
  background: ${theme('colors.base')};
  margin-top: -8em;
  opacity: 1;
  overflow: hidden;
  position: relative;

  @media (max-width: ${theme('breakpoints.2')}) {
    background: ${props =>
      props.theme.name === 'dark'
        ? props.theme.colors.dark[2]
        : props.theme.colors.dark[3]};
  }

  @media (max-width: ${theme('breakpoints.1')}) {
    margin-top: 0;
  }
`

const Video = styled.video.attrs({
  loop: true,
  muted: true
})`
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  opacity: ${props => (props.theme.name === 'dark' ? 0.0612 : 0.0816)};
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;

  @media (max-width: ${theme('breakpoints.2')}) {
    display: none;
  }
`

const Hero = styled.section`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${theme('breakpoints.2')}) {
    flex-direction: column;
  }
`

const Avatar = styled.div`
  align-self: flex-end;
  position: relative;

  @media (max-width: ${theme('breakpoints.2')}) {
    align-self: center;
    height: 24em;
    min-height: 50vh;
  }
`

const Silhouette = styled.img.attrs({
  alt: 'Silhouette',
  draggable: false,
  src: svgSilhouette,
  title: 'Silhouette'
})`
  display: flex;
  height: 24em;
  margin: 0;
  opacity: 0.5;

  @media (max-width: ${theme('breakpoints.2')}) {
    height: 100%;
  }
`

const Face = Silhouette.extend.attrs({
  alt: 'Joe',
  src: svgFace,
  title: 'Joe'
})`
	opacity: 1;
  position: absolute;
  left: -1px;
  top: 0;
  z-index: 1;
`

const Copy = styled.div`
  align-self: center;
  padding: 2rem 1.5rem;
  position: relative;
  text-align: left;

  & > h1 {
    font-size: 2.5em;
    font-weight: bold;
    line-height: 1;
    margin: 0 auto 0.5em;
    opacity: 0.95;
  }

  & > p {
    font-size: 1em;
    line-height: 1.5;
    margin: 0 auto 0.6em;
    max-width: ${theme('breakpoints.0')};
    opacity: 0.95;
  }

  @media (max-width: ${theme('breakpoints.2')}) {
    background: ${theme('colors.dark.1')};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40vh;
    padding: 2em 1em;
    text-align: center;
    width: 100vw;
  }
`

export default class Banner extends PureComponent {
  componentDidMount() {
    if (
      this.video &&
      window.getComputedStyle(this.video, null).display !== 'none'
    ) {
      this.video.playbackRate = 0.75
      this.video.play()
    }
  }

  render() {
    const { cover } = this.props

    return (
      <Container>
        <Video
          innerRef={video => {
            this.video = video
          }}
          poster={cover}
        >
          <source src={webmCover} type="video/webm" />
          <source src={mp4Cover} type="video/mp4" />
        </Video>
        <Wrapper>
        <SEO 
        title="Joe Johnston - Leading Belfast Marketing Consultant" 
        description="I am Joe — founder of Budibase and leading Belfast marketing consultant. I build beautiful websites and rank them high on Google."
        />
          <Hero>
            <Avatar>
              <Silhouette />
              <Face />
            </Avatar>
            <Copy>
              <h1>Grow with Joe!</h1>
              <p>
                I'm Joe - cofounder of Budibase and leading Belfast marketing consultant. 
              </p>
              <p>
                I build websites, rank them high on Google, and generate leads for clients.
              </p>
         
              <Box mt="1.25em">
                <ButtonLink
                  m="0.25em 0.5em 0.25em 0"
                  minWidth="10.25em"
                  to="/making"
                  inverted
                >
                  <Folder />
                  View works
                </ButtonLink>
                <ButtonLink
                  m="0.25em 0.5em 0.25em 0"
                  minWidth="10.25em"
                  to="/contact"
                >
                  <Mail />
                  Get in touch
                </ButtonLink>
              </Box>
            </Copy>
          </Hero>
        </Wrapper>
      </Container>
    )
  }
}
