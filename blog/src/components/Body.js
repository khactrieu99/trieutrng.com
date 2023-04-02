import AboutPage from "pages/AboutPage"
import ArticlePage from "pages/ArticlePage"
import HomePage from "pages/HomePage"
import { connect } from "react-redux"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

function Body(props) {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:slug" element={<ArticlePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Container>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)