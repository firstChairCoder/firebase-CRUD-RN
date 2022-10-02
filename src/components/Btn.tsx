/* eslint-disable react/function-component-definition */
import React from "react";
import { Pressable, PressableProps } from "react-native";

import { colors } from "../styleguide";

import * as StyledText from "./StyledText";

interface BtnProps extends PressableProps {
    label: string;
}

function Button({ label, ...rest }: BtnProps) {
    return (
        <Pressable
            style={{
                backgroundColor: colors.text,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 16,
                width: "100%",
                aspectRatio: 6.06
            }}
            {...rest}
        >
            <StyledText.Medium style={{ color: colors.background }}>
                {label}
            </StyledText.Medium>
        </Pressable>
    );
}

export default Button;
