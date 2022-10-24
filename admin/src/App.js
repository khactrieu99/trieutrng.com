import Body from 'components/common/body';
import ConfirmPopup from 'components/common/confirm-popup';
import Header from 'components/common/header';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchTags } from 'redux/features/TagSlice';
import { fetchArticles } from 'redux/features/ArticleSlice';
import { useEffect } from 'react';

const theme = {
  headerHeight: 100
}

function App(props) {
  useEffect(() => {
    props.fetchTags();
    props.fetchArticles();
  }, [])

  return (
      <ThemeProvider theme={theme}> 
        <Header/>
        <Body/>
        <ConfirmPopup />
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  fetchTags,
  fetchArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
