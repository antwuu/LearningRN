import React from "react"
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Platform
} from "react-native";

function Login() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.viewContainer}>
                    <Text style={styles.title}>登录 更精彩</Text>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"请输入您的用户名"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"请输入您的密码"}
                            // 密码
                            secureTextEntry={true}
                        />
                        <Button title="登录" onPress={() => {
                            return fetch(
                                "https://facebook.github.io/react-native/movies.json"
                            ).then((response) => response.json())
                                .then((responseJson) => {
                                    return responseJson.movies;
                                }).catch((error) => {
                                    console.error(error)
                                })
                        }}/>
                    </View>
                    <Text style={styles.trademark}>Built with Sdbina</Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    viewContainer: {
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        marginTop: 50,
        color: "black",
        fontSize: 35,
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        marginVertical: 15
    },
    trademark: {
        marginTop: 100,
        textAlign: "center"
    }
});

export default Login
