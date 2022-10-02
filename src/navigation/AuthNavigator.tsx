import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, OnboardingScreen, SignUpScreen } from "../screens";
import { colors } from "../styleguide";
import type { AuthStackParams } from "../types";

const AuthStack = createNativeStackNavigator<AuthStackParams>();

function AuthNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.background },
                headerShadowVisible: false,
                title: ""
            }}
        >
            <AuthStack.Screen
                component={OnboardingScreen}
                name="Onboarding"
                options={{ headerShown: false }}
            />
            <AuthStack.Screen component={LoginScreen} name="Login" />
            <AuthStack.Screen component={SignUpScreen} name="SignUp" />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;
