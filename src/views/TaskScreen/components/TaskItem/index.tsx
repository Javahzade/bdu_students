import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../../../../utils/colors";


interface TaskItemProps {
    onPressTask: () => void;
    taskTitle: string;
    taskStatus: string;
    statusDate: string;
}
const TaskItem = ({onPressTask, taskTitle, taskStatus, statusDate}: TaskItemProps) => {


    return (
        <TouchableOpacity onPress={onPressTask}>
            <View style={styles.container}>
                <Text style={styles.text}>{taskTitle}</Text>
                <Text style={styles.statusText}>{taskStatus}{'\n'}<Text style={styles.dateText}>{statusDate}</Text></Text>
            </View>
        </TouchableOpacity>

    );

};

export default TaskItem;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 15,
        color: AppColors.blueDark,
        fontSize: 17,
    },
    statusText: {
        color: AppColors.yellow,
        fontSize: 17,
    },
    dateText: {
        color: AppColors.grayLight,
    },
});