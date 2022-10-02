import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { View } from "react-native";

import { auth } from "../../services";
import { Button } from "../../components";
import { colors } from "../../styleguide";

function AccountScreen() {
    const handleLogout = useCallback(async () => {
        await signOut(auth);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 32,
                backgroundColor: colors.background
            }}
        >
            <Button onPress={handleLogout} label="Log Out" />
        </View>
    );
}

export default AccountScreen;
