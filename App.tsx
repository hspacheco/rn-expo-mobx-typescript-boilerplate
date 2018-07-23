import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Home } from "./src/containers/Home";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
export default class App extends React.Component {

	@observable loading: boolean = false;

	@action
	private changeState = async () => {
		this.loading = !this.loading;
	}

	public render() {
		return (
			<View style={styles.container}>
				<Text>Clique no botão</Text>
				{this.loading && (<Home />)}
				<Button title="botao" onPress={this.changeState} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
