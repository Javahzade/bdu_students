import {Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../../../../utils/colors";




interface ITaskCard {
    teacherName: string;
    subject: string;
    status: string;
}


const TaskCard = ({}: ITaskCard) => {
    const teacherName = 'Aqil M.Quliyev';
    const subject = 'Elektrik naqillərinin işləmə prinsipi';
    const status = 'Gozlemede';



    const rejectApplication = () => {
        console.log("rejectApplication");
    };

    return (
        <View style={{flex: 1, }}>

            <View style={{height: 122, width: '100%', backgroundColor: '#FFC0001A', borderRadius: 10}}>
                <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <View style={{}}>
                        <Text style={{color: AppColors.grayLight}}>
                            {'Müəllim:'}
                        </Text>
                        <Text style={{fontWeight: '700'}}>
                            {teacherName}
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text style={{color: AppColors.grayLight}}>
                            {'Status:'}
                        </Text>
                        <Text style={{fontWeight: '700'}}>
                            {status}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 0.5, padding: 10}}>
                    <Text style={{}}>
                        {'Mövzu:'}
                    </Text>
                    <Text style={{fontWeight: '700'}}>
                        {subject}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={rejectApplication}
                style={{marginTop: 16, justifyContent: 'center', width: '100%', height: 50, backgroundColor: AppColors.danger, borderRadius: 10}}>
                <Text style={{fontWeight: '700', textAlign: 'center', color: AppColors.white}}>
                    {'Müraciəti ləğv et'}
                </Text>
            </TouchableOpacity>
        </View>
    );

};

export default TaskCard;