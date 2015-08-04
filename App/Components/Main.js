var React = require("react-native");

var {
	View,
	Text,
	StyleSheet
} = React;

class Main extends React.Component{
	render() {
		return(
			<View>
				<Text style={styles.text}>Search For A Property</Text>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	text: {
		fontSize: 20,
		marginTop: 100
	}
});

module.exports = Main;