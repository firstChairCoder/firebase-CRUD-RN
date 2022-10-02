import * as React from "react";
import type { TextProps } from "react-native";
import { Text } from "react-native";

interface Props extends TextProps {
    children?: any;
}

export function Medium(props: Props) {
    return (
        <Text
            {...props}
            style={[
                { fontFamily: "Medium", fontSize: 16, lineHeight: 24 },
                props.style
            ]}
        />
    );
}

export function Regular(props: Props) {
    return (
        <Text
            {...props}
            style={[
                { fontFamily: "Regular", fontSize: 16, lineHeight: 24 },
                props.style
            ]}
        />
    );
}

export function Title(props: Props) {
    return (
        <Text
            {...props}
            style={[
                {
                    fontFamily: "SemiBold",
                    fontSize: 28,
                    fontWeight: "bold",
                    lineHeight: 42
                },
                props.style
            ]}
        />
    );
}

export function Header(props: Props) {
    return <Title {...props} style={[{ fontSize: 20 }, props.style]} />;
}

export function Subtitle(props: Props) {
    return <Regular {...props} style={[{ fontSize: 26 }, props.style]} />;
}
