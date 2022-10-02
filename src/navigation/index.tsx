import React, { useContext, useEffect } from "react";
import type { Theme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

import { colors } from "../styleguide";
import { auth } from "../services";
import { AuthContext } from "../providers";

import MainNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const AppTheme: Theme = {
    dark: true,
    colors: {
        primary: colors.primary,
        background: colors.background,
        card: "rgba(221,221,225,0.1)",
        text: colors.text,
        border: "transparent",
        notification: colors.primary
    }
};

export function RootNavigator() {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => onAuthStateChanged(auth, (u) => setUser(u)), [setUser]);

    return (
        <NavigationContainer theme={AppTheme}>
            {user ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
