import styled from 'styled-components'
import { Div } from 'components/CoreElements'
import media from 'common/media'

const Container = styled(Div)`
  margin: 0 auto;
  width: 1230px;
  padding: 0;

  ${media.widescreen`
  width: 100%;
  padding: 0 15px;
 `};
`

export default Container
