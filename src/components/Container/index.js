import styled from 'styled-components'
import { Div } from 'components/CoreElements'
import media from 'common/media'

const Container = styled(Div)`
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;

  ${media.widescreen`
 width: 1230px;
 padding: 0;
 `};
`

export default Container
