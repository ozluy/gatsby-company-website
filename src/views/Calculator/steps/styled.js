import media from 'common/media'
import styled from 'styled-components'

export default styled.div`
  padding: 40px 40px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  min-width: 552px;
  max-width: 552px;

  ${media.desktop`  
  min-width: 100%;
  max-width: 100%;
  `};
`
