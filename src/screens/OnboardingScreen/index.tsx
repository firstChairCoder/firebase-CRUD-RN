import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, View } from "react-native";

import { StyledText } from "../../components";
import { colors, images } from "../../styleguide";
import type { AuthStackParams } from "../../types";

import { AuthButton } from "./components";

function OnboardingScreen({
    navigation
}: NativeStackScreenProps<AuthStackParams, "Onboarding">) {
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingHorizontal: 24,
                paddingBottom: 16
            }}
            contentContainerStyle={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
            }}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={images.logo}
                resizeMode="contain"
                style={{ width: "100%", aspectRatio: 1.81, marginBottom: 20 }}
            />
            <StyledText.Title
                style={{
                    color: colors.text,
                    textAlign: "center",
                    marginBottom: 16
                }}
            >
                Organize your life and work
            </StyledText.Title>
            <StyledText.Regular style={{ color: "rgba(221,221,225, 0.5)" }}>
                Create various tasks to organize your routine and never be at a
                loss again.
            </StyledText.Regular>

            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: colors.background,
                    width: "100%",
                    borderRadius: 16,
                    overflow: "hidden",
                    marginTop: 16,
                    aspectRatio: 5.6
                }}
            >
                <AuthButton
                    primary
                    onPress={() => navigation.navigate("SignUp")}
                    label=" Sign Up"
                />

                <AuthButton
                    onPress={() => navigation.navigate("Login")}
                    label=" Log In"
                />
            </View>
        </ScrollView>
    );
}

export default OnboardingScreen;
