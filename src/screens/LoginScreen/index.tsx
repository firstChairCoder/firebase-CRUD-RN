import React, { useCallback, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView } from "react-native";

import { auth } from "../../services";
import type { AuthStackParams } from "../../types";
import { Button, Input, StyledText } from "../../components";
import { colors } from "../../styleguide";

function LoginScreen({
    navigation
}: NativeStackScreenProps<AuthStackParams, "Login">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = useCallback(async () => {
        await signInWithEmailAndPassword(auth, email, password);
    }, [email, password]);

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-64}
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingHorizontal: 24,
                paddingTop: 40,
                alignItems: "center"
            }}
        >
            <StyledText.Title style={{ color: colors.text, width: "100%" }}>
                Welcome back!
            </StyledText.Title>
            <StyledText.Subtitle
                style={{
                    color: colors.text,
                    width: "100%",
                    marginTop: 4,
                    marginBottom: 40
                }}
            >
                It's good to see you.
            </StyledText.Subtitle>

            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{ marginTop: 10, marginBottom: 60 }}
            />

            <Button
                label="Enter"
                onPress={handleLogin}
                style={{ marginBottom: 10 }}
            />
            <StyledText.Regular>
                Don't have an account?{" "}
                <StyledText.Regular
                    style={{ fontFamily: "SemiBold" }}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    Create one here
                </StyledText.Regular>
            </StyledText.Regular>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;
