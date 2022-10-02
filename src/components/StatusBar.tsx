import * as React from "react";
import { Platform } from "react-native";
import type { StatusBarProps } from "expo-status-bar";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function StatusBar(props: StatusBarProps) {
    if (Platform.OS === "android") {
        return <ExpoStatusBar animated style="auto" {...props} />;
    }

    return <ExpoStatusBar animated style="auto" {...props} />;
}
