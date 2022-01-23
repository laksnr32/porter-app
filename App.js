import React from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import AppContainer from 'routes'

class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      SFProTextRegular: require('assets/fonts/SFProText-Regular.ttf'),
      SFProTextBold: require('assets/fonts/SFProText-Bold.ttf'),
      SFProDisplayBold: require('assets/fonts/SFProDisplay-Bold.ttf'),
      SFProDisplayMedium: require('assets/fonts/SFProDisplay-Medium.ttf')
    })

    this.setState({
      fontLoaded: true
    })
  
  }
  
  render() {
    const { fontLoaded } = this.state

    if (fontLoaded) {
        return <AppContainer />      
    } else {
      return <AppLoading />
    }
  }
}

export default App;