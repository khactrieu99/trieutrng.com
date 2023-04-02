import Body from 'components/Body';
import Header from 'components/Header';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  // headerHeight: 50,
  mainColor: "#4c695a",
  blurColor: "#757575",
  textColor: "#232333",
  marginBottom: "30px"
}

const Container = styled.div`

`
const PageContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 15px;
`

function App(props) {

  return (
      <ThemeProvider theme={theme}> 
        <Container>
          <PageContainer>
            <Header/>
            <Body />
          </PageContainer>
        </Container>
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
