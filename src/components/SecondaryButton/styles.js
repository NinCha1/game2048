import {StyleSheet} from 'react-native'
import Colors from '../../common/Colors'

export default StyleSheet.create({
    btn: {
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '2%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    title: {
        // color: Colors.primary,
        fontSize: 20,
    },
})