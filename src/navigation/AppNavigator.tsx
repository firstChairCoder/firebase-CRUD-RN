import React from "react";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { RouteProp } from "@react-navigation/native";

import { AccountScreen, TasksScreen } from "../screens";
import { colors } from "../styleguide";
import type { TabsParams } from "../types";

type ScreenOptions = (props: {
    route: RouteProp<TabsParams>;
}) => BottomTabNavigationOptions;

type TabBarIcons = {
    [screenName: string]: {
        onFocusIcon: keyof typeof Ionicons.glyphMap;
        onBlurIcon: keyof typeof Ionicons.glyphMap;
    };
};

const icons: TabBarIcons = {
    Tasks: {
        onFocusIcon: "checkmark-done-circle",
        onBlurIcon: "checkmark-done-circle-outline"
    },
    Account: {
        onFocusIcon: "person-circle",
        onBlurIcon: "person-circle-outline"
    }
};

const options: ScreenOptions = ({ route }) => ({
    headerStyle: { backgroundColor: colors.background },
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerTitleStyle: {
        fontFamily: "SemiBold",
        fontSize: 32
    },
    tabBarShowLabel: false,
    tabBarIcon: ({ color, focused, size }) => {
        const { onFocusIcon, onBlurIcon } = icons[route.name];
        const iconName = focused ? onFocusIcon : onBlurIcon;

        return <Ionicons name={iconName} color={color} size={size} />;
    }
});

const MainTab = createBottomTabNavigator<TabsParams>();

const MainNavigator = () => {
    return (
        <MainTab.Navigator screenOptions={options}>
            <MainTab.Screen
                component={TasksScreen}
                name="Tasks"
                options={{ title: "Tasks" }}
            />
            <MainTab.Screen component={AccountScreen} name="Account" />
        </MainTab.Navigator>
    );
};

export default MainNavigator;
