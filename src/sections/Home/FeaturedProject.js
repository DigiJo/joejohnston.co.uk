import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { ArrowRight, ExternalLink } from 'react-feather'

import { ButtonLink, ExternalButtonLink } from '../../components/Button'
import Box from '../../components/Box'
import Grid from '../../components/Grid'
import Screen from '../../components/Screen'
import Subheading from '../../components/Subheading'
import Text from '../../components/Text'
import Wrapper from '../../components/Wrapper'

export default class FeaturedProject extends PureComponent {
  render() {
    const { screens } = this.props

    return (
      <section>
        <Box bg="dark.0">
          <Wrapper pt={5} textAlign="center">
            <Subheading mt={0} mb={2}>
              Featured Project
            </Subheading>
            <Text
              color="contrast.4"
              fontSize={4}
              fontWeight="bold"
              lineHeight={1}
            >
              Budibase
            </Text>
            <Text
              color="contrast.3"
              fontSize={2}
              lineHeight={1}
              mt={1}
              mx="auto"
              maxWidth="20em"
            >
              A super-fast, open-source SaaS builder for Makers and Startups.
            </Text>
            <Box my={3} textAlign="center">
              <ExternalButtonLink
                m="0.25em"
                minWidth="10.25em"
                href="//budibase.com"
                target="_blank"
                rel="nofollow"
                inverted
                secondary
              >
                <ExternalLink />
                Visit website
              </ExternalButtonLink>
              <ButtonLink
                m="0.25em"
                minWidth="10.25em"
                to="/making/budibase"
                secondary
              >
                <ArrowRight />
                View project
              </ButtonLink>
            </Box>
            <Box mt={4}>
              <Screen screens={screens} />
            </Box>
          </Wrapper>
        </Box>
        <Box
          boxShadow="0 -1px 3px rgba(0, 0, 0, 0.025)"
          bg="dark.0"
          position="relative"
        >
          <Wrapper>
            <Grid py={[4, 4, 5]} gap="1em 2em">
              <Text color="contrast.4" maxWidth="20em" mx="auto">
              Budibase is to SaaS applications, what WordPress is to websites. It's the new and better way to build SaaS applications, reducing development time by up to 70%.
              </Text>
              <Text color="contrast.4" maxWidth="20em" mx="auto">
                Our vision is to remove the barriers experienced when building a SaaS app. We want to empower developers and startups to simply and quickly pursue their dreams.
              </Text>
            </Grid>
          </Wrapper>
        </Box>

      </section>
    )
  }
}
