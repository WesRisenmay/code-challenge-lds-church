import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: pink;
`

const App = () => {
  return <StyledDiv>This is it</StyledDiv>
}

ReactDOM.render(<App />, document.getElementById('root'))
