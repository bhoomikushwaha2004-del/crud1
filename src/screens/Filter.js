import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Filter({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRadio,setSelectedRadio] = useState(0);

  const [isActive,setIsActive] = useState({
    Active:false,
    Inactive:false
  })


  const route = useRoute();
  const activeRoles = route.params?.activeRoles; 
  console.log(activeRoles,'active')

  // const printRoles=(res)=> {
  //   res.activeRoles.key.name
  // }

  const isChoice = Object.keys(isActive).filter((item)=> isActive[item]===true)
  console.log(isChoice)

  return (
    <>
      {/* <View style={{ flex: 1 }}> */}
        <View>
          <StatusBar barStyle={'dark-content'} />
          <View style={styles.content}>
            <Text>Role</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Role',{navigation})}
            >
              <Text style={styles.txt}>Select</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text> </Text>
          </View>

          <View style={styles.content}>
            <Text>Status</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowModal(true)}
            >
              <Text style={styles.txt}>Select</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>


            {/* Modal View */}
        <View>
          <Modal visible={showModal} transparent={true} animationType="slide">
            <View style={{ flex: 1, opacity: 0.9, backgroundColor: 'black' }}>
              <TouchableOpacity
                style={styles.closebtn}
                onPress={() => setShowModal(false)}
              >
                
                <Image
                  source={require('../assests/close.png')}
                  style={{ height: 40, width: 30, marginLeft: 8, marginTop: 6 }}
                />
              </TouchableOpacity>

              {/* Radio button */}
              <View style={styles.bottomView}>
                <View>
                  <TouchableOpacity onPress={ () => {
            setIsActive(prev => ({ ...prev, Active:!prev.Active}))
        }} style={styles.slctedRadio} >
                    
                    <Text style={styles.statustxt}>Active</Text>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            { 
                               isActive.Active ? <View style={styles.radiobg}></View> : null 
                            }
                        </View>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.slctedRadio} onPress={ () => {
            setIsActive(prev => ({ ...prev, Inactive:!prev.Inactive}))
        }}    >
                    
                    <Text style={styles.statustxt}>Inactive</Text>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            { 
                               isActive.Inactive ? <View style={styles.radiobg}></View> : null 
                            }
                        </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.choiceView}>
            <TouchableOpacity style={styles.choicebtn} >
                <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:15}}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.savebtn}>
                <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:15,}}>Save</Text>
            </TouchableOpacity>
        </View>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  btn: {
    borderWidth: 1,
    height: 40,
    width: 320,
    borderRadius: 100,
    backgroundColor: 'rgba(61, 110, 110, 0.6)',
    borderColor: 'pink',
    flexDirection: 'row',
    elevation:9
  },
  txt: {
    color: 'white',
    margin: 10,
  },
  arrow: {
    fontSize: 30,
    color: 'white',
    marginLeft: 230,
    marginBottom: 10,
  },
  bottomView: {
    height: 150,
    width: '100%',
    backgroundColor: 'rgba(61, 110, 110, 0.6)',
    marginTop: 0,
    borderRadius: 30,
  },
  statustxt: {
    margin: 10,
    color: 'white',
    marginLeft: 20,
    marginTop: 15,
  },
  closebtn: {
    height: 50,
    width: 50,
    color: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 680,
    marginLeft: 170,
    marginBottom: 20,
  },
  choiceView: {
    height: 100,
    width: '100%',
    backgroundColor: 'rgba(61, 110, 110, 0.6)',
    marginTop: 540,
    borderRadius:20,
    flexDirection:'row',
    // elevation:
  },
  choicebtn:{
    borderWidth:1,
    height:50,
    width:150,
    borderRadius:30,
    borderColor:'white',
    marginTop:20,
    marginLeft:10,
    marginRight:40
  },
  savebtn:{
    borderWidth:1,
    height:50,
    width:150,
    borderRadius:30,
    borderColor:'white',
    marginTop:20,
    marginLeft:10,
    marginRight:40,
    backgroundColor:'rgba(19, 108, 130, 0.6)'
  },
  radio:{
    width:30,
    height:30,
    borderColor:'rgb(250, 246, 246)',
    borderRadius:30,
    borderWidth:2,
    marginLeft:280,
    marginTop:10,
    marginRight:20
  },
  slctedRadio:{
    flexDirection:'row'
  },
  radiobg:{
    backgroundColor:'#b1aace7a',
    height:18,
    width:18,
    margin:4,
    borderRadius:30
  }
});
