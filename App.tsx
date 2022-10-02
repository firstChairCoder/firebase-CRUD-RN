import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";

import { StatusBar } from "./src/components";
import { RootNavigator } from "./src/navigation";
import { AuthProvider } from "./src/providers";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function prepare() {
            try {
                // keeps the splash screen visible while assets are cached
                await SplashScreen.preventAutoHideAsync();

                // pre-load/cache assets: images, fonts, and videos
                await Font.loadAsync({
                    Regular: Montserrat_400Regular,
                    Medium: Montserrat_500Medium,
                    SemiBold: Montserrat_600SemiBold
                });
            } catch (e) {
                console.log(e);
            } finally {
                // loading is complete
                setIsLoading(false);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        // when loading is complete
        if (isLoading === false) {
            // hide splash function
            const hideSplash = async () => SplashScreen.hideAsync();

            // hide splash screen to show app

            hideSplash();
        }
    }, [isLoading]);

    if (isLoading) {
        return null;
    }

    return (
        <AuthProvider>
            <SafeAreaProvider>
                <RootNavigator />
            </SafeAreaProvider>
            <StatusBar />
        </AuthProvider>
    );
}
