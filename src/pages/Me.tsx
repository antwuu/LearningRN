import React from "react";
import {Text, View} from "react-native";
type meProps={
    content:string,
    age:number
}
function Me(props:meProps) {
    return(
        <View>
            <Text>Me Page</Text>
        </View>
    )
}
export default Me
