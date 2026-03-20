import { Image, StyleSheet, Text, View } from "react-native"
// import { View } from "react-native/types_generated/index"

export default function NotFound () {
    return(
        <>
        {/* Header */}
        <View style={styles.hdr}>
            <Text style={{height:110,width:20}} >🔍 </Text>
        </View>

        {/* Image */}
        <View style={{backgroundColor:'rgba(106, 186, 228, 0.6)',height:1000}}>
             <Image source={require('../assests/no-result.jpg')} style={styles.img}/>
           </View>
        </>
    )
}
const styles = StyleSheet.create({
    hdr:{
        height:50,
        width:"100%",
        backgroundColor:'rgba(61, 110, 110, 0.6)',
        // elevation:8,

    },
    img:{
        height:500,
        width:410,
        marginTop:160,
        // opacity:10
    }
})