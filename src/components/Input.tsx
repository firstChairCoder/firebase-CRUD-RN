import React, { useState } from "react";
import type { TextInputProps } from "react-native";
import { TextInput } from "react-native";

import { colors } from "../styleguide";

interface InputProps extends TextInputProps {
    focused?: boolean;
}

function Input(props: InputProps) {
    const [focused, setFocused] = useState(false);

    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor="rgba(221,221,225, 0.4)"
            selectionColor={colors.primary}
            textAlign="center"
            focused={focused}
            style={{
                fontFamily: "Regular",
                fontSize: 16,
                color: colors.text,
                backgroundColor: colors.background,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: focused ? colors.primary : colors.background,
                paddingLeft: 16,
                aspectRatio: 6.06,
                width: "100%"
            }}
            {...props}
        />
    );
}

export default Input;
