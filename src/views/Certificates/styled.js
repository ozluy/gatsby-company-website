import styled from 'styled-components'
import { Flex } from 'components/CoreElements'

export default styled(Flex)`
  height: 350px;
  align-items: flex-start;

  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
`
