import Header from 'components/common/header';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchArticles } from 'redux/features/ArticleSlice';
import { useEffect } from 'react';
import Body from 'components/common/body';

const theme = {
  headerHeight: 100
}

function App(props) {
  useEffect(() => {
    props.fetchArticles();
  }, [])

  return (
    <ThemeProvider theme={theme}> 
      <Header/>
      <Body/>
    </ThemeProvider>
  );
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  fetchArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);