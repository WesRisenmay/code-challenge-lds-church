import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: pink;
`

const App = () => {
  return <StyledDiv>40 minute timer!</StyledDiv>
}

ReactDOM.render(<App />, document.getElementById('root'))
