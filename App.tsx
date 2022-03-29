import React, {useState} from 'react';
import {
    Text,
    View,
} from 'react-native';

import {Icon, TabBar} from "@ant-design/react-native";
import Me from "./src/pages/Me";
import Login from "./src/pages/Login";
import Manage from "./src/pages/Manage";
import Home from "./src/pages/Home";

function App() {
    const [currentView, setCurrentView] = useState("me");
    return (
        // <Login/>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#f5f5f5"
        >
            <TabBar.Item
                title="管理"
                icon={<Icon name="ordered-list"/>}
                onPress={()=>setCurrentView("manage")}
                selected={currentView==="manage"}
            >
                <Manage content={""} age={18}/>
            </TabBar.Item>
            <TabBar.Item
                title="主页"
                icon={<Icon name="home"/>}
                onPress={()=>setCurrentView("home")}
                selected={currentView === "home"}
            >
                <Home/>
            </TabBar.Item>
            <TabBar.Item
                title="我的"
                icon={<Icon name="user"/>}
                onPress={()=>setCurrentView("me")}
                selected={currentView==="me"}
            >
                <Me age={18} content={"dddd"}/>
            </TabBar.Item>
        </TabBar>
    );
}

export default App;
