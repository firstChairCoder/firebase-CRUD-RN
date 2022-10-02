/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/function-component-definition */
import React, { useCallback, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { KeyboardAvoidingView } from "react-native";
import { Button, Input, StyledText } from "../../components";
import { auth } from "../../services";
import { AuthStackParams } from "../../types";
import { colors } from "../../styleguide";

function SignUpScreen({
    navigation
}: NativeStackScreenProps<AuthStackParams, "SignUp">) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = useCallback(async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    }, [email, password]);

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-64}
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingHorizontal: 24,
                paddingTop: 32
            }}
        >
            <StyledText.Title style={{ color: colors.text }}>
                Welcome!
            </StyledText.Title>
            <StyledText.Subtitle
                style={{ color: colors.text, marginTop: 4, marginBottom: 32 }}
            >
                It's great to see you here.
            </StyledText.Subtitle>

            <Input placeholder="Name" value={name} onChangeText={setName} />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ marginTop: 10, marginBottom: 10 }}
            />
            <Input
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{ marginBottom: 60 }}
            />

            <Button
                label="Sign Up"
                onPress={handleSignUp}
                style={{ marginBottom: 10 }}
            />

            <StyledText.Regular
                style={{
                    color: colors.text,
                    textAlign: "center",
                    width: "100%"
                }}
            >
                Already have an account?{" "}
                <StyledText.Regular
                    style={{ fontFamily: "SemiBold" }}
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </StyledText.Regular>
            </StyledText.Regular>
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen;
