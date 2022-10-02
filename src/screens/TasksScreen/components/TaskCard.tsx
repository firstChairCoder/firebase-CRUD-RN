import React, { useCallback } from "react";
import type { User } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { Pressable, View } from "react-native";

import { db } from "../../../services";
import type { ITask } from "../../../types";
import { StyledText } from "../../../components";
import { colors } from "../../../styleguide";

const priorityColors: { [name: number]: string } = {
    0: colors.green,
    1: colors.yellow,
    2: colors.red
};

type TaskCardProps = {
    task: ITask;
    user: User;
    level: number;
};

function TaskCard({ task, user, level }: TaskCardProps) {
    const handleTaskCheck = useCallback(async () => {
        const docRef = doc(db, user.uid, task.id);
        await deleteDoc(docRef);
    }, [task, user]);

    return (
        // <Container>
        //     <CheckBox onPress={handleTaskCheck} />
        //     <Title>{task.title}</Title>
        //     <PriorityIndicator level={task.priority} />
        // </Container>

        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(221,221,225,0.1)",
                borderRadius: 8,
                paddingLeft: 8,
                aspectRatio: 8.6,
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Pressable
                style={{
                    height: "57%",
                    aspectRatio: 1,
                    borderRadius: 16,
                    borderWidth: 2,
                    borderColor: "rgba(221,221,225,0.2)"
                }}
                onPress={handleTaskCheck}
            />
            <StyledText.Regular
                numberOfLines={1}
                style={{
                    includeFontPadding: false,
                    textAlignVertical: "center",
                    flex: 1,
                    color: colors.text,
                    marginLeft: 16
                }}
            >
                {task.title}
            </StyledText.Regular>
            <View
                style={{
                    height: "100%",
                    width: 4,
                    backgroundColor: priorityColors[level]
                }}
            />
        </View>

        // <View style={styles.item}>
        //     <View style={styles.itemLeft}>
        //         <View style={styles.square} />
        //         <Text style={styles.itemText}>{task.title}</Text>
        //     </View>
        //     <View style={styles.circular} />
        // </View>
    );
}

// const styles = StyleSheet.create({
//     item: {
//         backgroundColor: "#FFF",
//         padding: 15,
//         borderRadius: 10,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: 20
//     },
//     itemLeft: {
//         flexDirection: "row",
//         alignItems: "center",
//         flexWrap: "wrap"
//     },
//     square: {
//         width: 24,
//         height: 24,
//         backgroundColor: "#55BCF6",
//         opacity: 0.4,
//         borderRadius: 5,
//         marginRight: 15
//     },
//     itemText: {
//         maxWidth: "80%"
//     },
//     circular: {
//         width: 12,
//         height: 12,
//         borderColor: "#55BCF6",
//         borderWidth: 2,
//         borderRadius: 5
//     }
// });

export default TaskCard;
