import React from "react";
import {AppRegistry, Text, View} from "react-native";
type meProps={
    content:string,
    age:number
}
function Manage(props:meProps) {
    return(
        <View>
            <Text>Manage Page</Text>
        </View>
    )
}
export default Manage
