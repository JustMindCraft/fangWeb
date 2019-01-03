import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import dataProvider from '../src/services/dataProvider';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
   
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    setInterval(async ()=>{
      const self= this;
      try {
        const appNetStatusPromise = await dataProvider();
        const appNetStatus = await appNetStatusPromise.json();
  
        self.setState({
          status: appNetStatus,
          open: false,
        })
      } catch (error) {
        console.warn(error);
        self.setState({
          status: false,
          open: true,
        })
        
      }
     
      
    }, 5000)
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head title="正觉工场">
          <title>正觉工场</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
       
      </Container>
    );
  }
}


MyApp.getInitialProps = async function() {
  const appPromise = await dataProvider('GET', 'apps', '');
  const appData = await appPromise.json();
  return {
    app: appData,
  }
}




export default MyApp;
