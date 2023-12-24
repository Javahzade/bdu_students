import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import ChevronLeft from "../../assets/icons/ChevronLeft.svg";
import JpegIcon from "../../assets/icons/JpegIcon.svg";
import DocIcon from "../../assets/icons/DocIcon.svg";
import FireArrowDown from "../../assets/icons/FileArrowDown.svg";
import FireArrowUp from "../../assets/icons/FileArrowUp.svg";
import ChatDots from "../../assets/icons/ChatDots.svg";
import {useNavigation} from '@react-navigation/native';

function TaskDetailScreen() {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    function setText(text: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <SafeAreaView style={styles.area}>
            <Pressable onPress={handleGoBack} style={styles.header}>
                <View style={styles.iconText}>
                    <ChevronLeft />
                    <Text style={styles.text1}>1.Tapşırığın adı</Text>
                </View>
                <Text style={styles.review}>Baxışdadır</Text>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.bodyText}>İzah:</Text>
                <Text style={styles.bodyText1}>React komponent yaradaraqç APİ-dən aldıqlarıvız məlumatı siyahı şəklində göstərin.</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Təhvil tarixi:</Text>
                <Text style={styles.bodyText1}>23.12.2023</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Resurslar</Text>
            </View>
            <View style={styles.resource}>
                <JpegIcon />
                <Text style={styles.bodyText1}>TapşırıqShekli.jpeg</Text>
                <TouchableOpacity>
                    <FireArrowDown />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.resource}>
                <DocIcon />
                <Text style={styles.bodyText1}>TapşırıqFayli.docx</Text>
                <TouchableOpacity>
                    <FireArrowDown />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.resource}>
                <JpegIcon />
                <Text style={styles.bodyText1}>TapşırıqShekli.jpeg</Text>
                <TouchableOpacity>
                    <FireArrowDown />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.resource}>
                <DocIcon />
                <Text style={styles.bodyText1}>TapşırıqFayli.docx</Text>
                <TouchableOpacity>
                    <FireArrowDown />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Rəylər</Text>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.comment}>Aqil M.Quliyev</Text>
                        <Text style={styles.bodyText}>18.12.2023</Text>
                    </View>
                    <Text style={styles.commenttext}>Tapşırığda hər şey düzdür sadəcə başda heçnə yoxdur</Text>
                    <View style={styles.line}></View>
                </View>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.comment}>Mən</Text>
                        <Text style={styles.bodyText}>18.12.2023</Text>
                    </View>
                    <Text style={styles.commenttext}>Tapşırığda hər şey düzdür sadəcə başda heçnə yoxdur</Text>
                    <View style={styles.line}></View>
                </View>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.comment}>Mən</Text>
                        <Text style={styles.bodyText}>18.12.2023</Text>
                    </View>
                    <Text style={styles.commenttext}>Tapşırığda hər şey düzdür sadəcə başda heçnə yoxdur</Text>
                    <View style={styles.line}></View>
                </View>
            </ScrollView>
            <View style={{height: 100, width: 40, position: 'absolute', zIndex: 3, bottom: 20, right: 16, justifyContent: 'space-between'}}>
                <TouchableOpacity style={{width: 48, height: 48, borderRadius: 48, backgroundColor: Colors.blueDark, justifyContent: 'center', alignItems: "center"}}><FireArrowUp /></TouchableOpacity>
                <TouchableOpacity style={{width: 48, height: 48, borderRadius: 48, backgroundColor: Colors.blueDark, justifyContent: 'center', alignItems: "center"}}><ChatDots /></TouchableOpacity>
            </View>


        </SafeAreaView>

    );
}
export default TaskDetailScreen;

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        height: 60,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center"
    },
    text1: {
        color: Colors.blueDark,
        fontSize: 24,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        marginLeft: 10,
    },
    review: {
        color: Colors.yellow,
        fontSize: 17,
    },
    body: {
        marginTop: 12,
    },
    bodyText: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.grayLight,
        marginTop: 15,
    },
    bodyText1: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.blueDark,
    },
    comment: {
        marginTop: 7,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.blueDark,
    },
    resource: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.grayLight,
        marginTop: 10,
    },
    commenttext: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.grayLight,
        marginTop: 5,
    }
});