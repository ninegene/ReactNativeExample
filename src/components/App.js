import React from 'react-native';

const {
  View,
  Text,
} = React;

// See: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
const propTypes = {
  instructions: React.PropTypes.string,
};

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {this.props.instructions}
        </Text>
      </View>
    );
  }
}

// See: https://facebook.github.io/react-native/docs/flexbox.html
const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

App.propTypes = propTypes;

export default App;
