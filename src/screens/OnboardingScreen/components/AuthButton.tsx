import React from "react";
import { Pressable } from "react-native";

import { StyledText } from "../../../components";
import { colors } from "../../../styleguide";

interface AuthButtonProps {
    label: string;
    onPress: () => void;
    primary?: boolean;
}

const AuthButton = ({ label, onPress, primary }: AuthButtonProps) => {
    return (
        <Pressable
            style={{
                width: "50%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: primary ? colors.text : "transparent"
            }}
            onPress={onPress}
        >
            <StyledText.Medium
                style={{ color: primary ? colors.background : colors.text }}
            >
                {label}
            </StyledText.Medium>
        </Pressable>
    );
};

export default AuthButton;
