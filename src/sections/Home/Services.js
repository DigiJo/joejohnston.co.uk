import React, { PureComponent } from 'react'
import { theme } from 'styled-system'
import { Search, Layout, ArrowRight } from 'react-feather'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Grid from '../../components/Grid'
import IconContainer from '../../components/IconContainer'
import Wrapper from '../../components/Wrapper'




const Container = Box.extend`
  border-bottom: ${theme('colors.dark.0')} solid 1px;
  font-size: ${theme('fontSizes.1')};
  position: relative;

  h4 {
    margin: 0;
    font-size: ${theme('fontSizes.2')};
  }

  p {
    color: ${theme('colors.contrast.4')};
    margin: 1em auto;
    max-width: 24rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper>
          <Grid py={[4, 4, 5]}>
            <Box>
              <Flex
                alignItems="center"
                flexDirection={['row', 'row', 'row', 'column']}
                justifyContent={['start', 'start', 'start', 'center']}
                mb={[-2, -2, -2, 0]}
                mx="auto"
                lineHeight={0}
                maxWidth="24rem"
              >

              
              
                <IconContainer
                  mb={[0, 0, 0, 4]}
                  mr={[2, 2, 2, 0]}
                  height={['1.75em', '1.75em', '1.75em', '3.5em']}
                  width={['1.75em', '1.75em', '1.75em', '3.5em']}
                >
                  <Layout />
                </IconContainer>
                <h4>Web Design</h4>
              </Flex>
              <p>
                I design beautiful websites which convert your visitors into customers. Obsessed with performance, I use{' '}
                <a href="//gohugo.io" target="blank" rel="nofollow">
                  Hugo
                </a>{' '},
                {' '}
                <a href="//gatsbyjs.org" target="blank" rel="nofollow">
                  Gatsby
                </a>{' '}, and
                {' '}
                <a href="//wordpress.org" target="blank" rel="nofollow">
                  Wordpress
                </a>{' '}
                to build super-fast websites for desktop and mobile.
              </p>

            </Box>
            <Box>
              <Flex
                alignItems="center"
                flexDirection={['row', 'row', 'row', 'column']}
                justifyContent={['start', 'start', 'start', 'center']}
                mb={[-2, -2, -2, 0]}
                mx="auto"
                lineHeight={0}
                maxWidth="24rem"
              >
                <IconContainer
                  mb={[0, 0, 0, 4]}
                  mr={[2, 2, 2, 0]}
                  height={['1.75em', '1.75em', '1.75em', '3.5em']}
                  width={['1.75em', '1.75em', '1.75em', '3.5em']}
                >
                  <Search />
                </IconContainer>
                <h4>SEO</h4>
              </Flex>
              <p>
                I improve search engine rankings using{' '}
                <a href="//ahref.com" target="blank" rel="nofollow">
                  Ahref
                </a>{' '}
                and{' '}
                <a href="//screamingfrog.com" target="blank" rel="nofollow">
                  Screaming Frog
                </a>. Combined, they help me perform 
                keyword research, technical optimisation, perform SEO audits, and build inbound links.
              </p>

            </Box>
          </Grid>
        </Wrapper>
      </Container>
    )
  }
}
