import React, { useCallback, useState } from "react";
import type { ModalProps } from "react-native";
import { Modal, Pressable, View } from "react-native";
import type { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { Button, Input, StyledText } from "../../../components";
import { db } from "../../../services";
import type { ITask } from "../../../types";
import { colors } from "../../../styleguide";

interface AddTaskModalProps extends ModalProps {
    user: User;
}

function AddTaskModal({ onRequestClose, user, ...rest }: AddTaskModalProps) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");

    const handleAddTask = useCallback(async () => {
        await addDoc(collection(db, user.uid), {
            priority: priority as unknown as ITask["priority"],
            title
        });

        setTitle("");
        setPriority("");
    }, [priority, title, user]);

    return (
        <Modal
            animationType="slide"
            transparent
            onRequestClose={onRequestClose}
            {...rest}
        >
            <Pressable
                style={{
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    width: "100%",
                    height: "100%"
                }}
                onPress={onRequestClose}
            />
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "rgba(221,221,225,0.1)",
                    padding: 16,
                    aspectRatio: 1.3,
                    width: "100%"
                }}
            >
                <StyledText.Subtitle
                    style={{ color: colors.text, marginBottom: 8 }}
                >
                    Create task
                </StyledText.Subtitle>

                <Input
                    placeholder="Títle"
                    value={title}
                    onChangeText={setTitle}
                    autoFocus
                />
                <Input
                    placeholder="Priority"
                    keyboardType="numeric"
                    value={priority}
                    onChangeText={setPriority}
                    style={{ marginTop: 6, marginBottom: 10 }}
                />

                <Button label="Create" onPress={handleAddTask} />
            </View>
        </Modal>
    );
}

export default AddTaskModal;
