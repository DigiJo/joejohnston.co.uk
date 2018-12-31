import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-system'

import Text from '../../components/Text'
import Flex from '../../components/Flex'
import Wrapper from '../../components/Wrapper'

import svgAime from '../../assets/img/clients/aime.svg'
import svgBudibase from '../../assets/img/clients/budibase.svg'
import svgCore from '../../assets/img/clients/core.svg'
import svg7tg from '../../assets/img/clients/7tg.svg'
import svgDigijo from '../../assets/img/clients/digijo.svg'
import svgTm3 from '../../assets/img/clients/tm3.svg'
import { flex } from 'styled-system/dist/styles'

const Container = styled.div`
  background: ${props =>
    props.theme.name === 'dark'
      ? props.theme.colors.dark[0]
      : props.theme.colors.light[0]};
  padding: 2em 0;
  position: relative;
`

const Logo = styled.img.attrs({
  draggable: false,
  alt: props => props.company,
  title: props => props.company
})`
  max-height: 3em;
  max-width: 7em;
`

export default class Services extends PureComponent {
  render() {
    return (
      <Container>
        <Wrapper wide>
          <Text
            color="contrast.2"
            fontSize={2}
            lineHeight={2}
            mb={3}
            mt={2}
            textAlign="center"
          >
            Trusted by awesome companies, worldwide.
          </Text>
          <Flex flexWrap="wrap" justifyContent="center">
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgAime} company="AIME" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgBudibase} company="Budibase" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgCore} company="Core" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svg7tg} company="7TG" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              my={3}
              w={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
            <Logo src={svgTm3} company="TM3" />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              ml={['auto', 3, 'auto']}
              mr={['auto', '10%', 'auto']}
              my={3}
              w={[1, 'auto', 1 / 3, 1 / 3, 1 / 6, 1 / 6]}
            >
              <Logo src={svgDigijo} company="Digijo" />
            </Flex>
          </Flex>
        </Wrapper>
      </Container>
    )
  }
}
