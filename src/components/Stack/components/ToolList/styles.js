import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0 -16px 0 0;
  padding: 0;
  margin-right: -16px;

  @media (min-width: 768px) {
    margin: 0 -32px 0 0;
  }
`

export const StyledListItem = styled.li`
  margin: 0 16px 16px 0;

  @media (min-width: 768px) {
    margin: 0 32px 32px 0;
  }
`
