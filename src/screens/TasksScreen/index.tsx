import React, { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { collection, onSnapshot } from "firebase/firestore";

import { AuthContext } from "../../providers";
import { db } from "../../services";
import type { ITask } from "../../types";
import { colors } from "../../styleguide";

import { AddTaskModal, TaskCard } from "./components";

function TasksScreen() {
    const [visible, setVisible] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>([]);
    const { user } = useContext(AuthContext);

    const hideModal = useCallback(() => setVisible(false), []);
    const showModal = useCallback(() => setVisible(true), []);
    const showDivider = useCallback(() => <View style={{ height: 4 }} />, []);

    useEffect(() => {
        function setSnapshotListener() {
            const colletionRef = collection(db, user.uid);

            return onSnapshot(colletionRef, (snapshot) => {
                const tasksUpdated: ITask[] = [];

                snapshot.forEach((doc) =>
                    tasksUpdated.push({ ...doc.data(), id: doc.id } as ITask)
                );

                setTasks(tasksUpdated);
            });
        }

        return setSnapshotListener();
    }, [user]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskCard user={user} task={item} />}
                ItemSeparatorComponent={showDivider}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingTop: 40 }}
            />

            <AddTaskModal
                visible={visible}
                user={user}
                onRequestClose={hideModal}
            />

            <Pressable
                onPress={showModal}
                style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 56,
                    width: 56,
                    backgroundColor: colors.primary,
                    borderRadius: 28,
                    overflow: "hidden"
                }}
            >
                <Icon name="add" color={colors.background} size={34} />
            </Pressable>
        </View>
    );
}

export default TasksScreen;
