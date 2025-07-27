// import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
// import React, { useEffect, useState } from 'react';


// interface Item {
//   id: number;
//   title: string;
//   body: string;
// }

// const App = () => {
//   const [data, setData] = useState<Item[] | null>(null);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   useEffect(() => {

//     fetchData(); // call the function
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts',
//       );
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (e) {
//       console.error('Error fetching data:', e);
//     }
//   };

//   const postData = async () => {
//     try {

//       const response = await fetch('https://jsonplaceholder.typicode.com/posts',
//         {

//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             title,
//             body,
//             userId: 1,
//           }),
//         });

//       const newPost = await response.json();
//       console.log('Posted', newPost);

//       setData([newPost, ...(data || [])]);

//       setTitle('');
//       setBody('');


//     } catch (error) {

//       console.log('Error posting data:', error);


//     }
//   }



//   return (


//     // <SafeAreaView style={styles.container}>
//     //   <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
//     //     Fetching Data's
//     //   </Text>

//     //   {data ? (
//     //     <FlatList
//     //       data={data}
//     //       keyExtractor={item => item.id.toString()}
//     //       renderItem={({ item }) => {
//     //         return (
//     //           <SafeAreaView style={styles.card}>
//     //             <Text style={styles.title}>{item.title}</Text>
//     //             <Text>{item.body}</Text>
//     //           </SafeAreaView>
//     //         );
//     //       }}
//     //     />
//     //   ) : (
//     //     <Text>Loading...</Text>
//     //   )}
//     // </SafeAreaView>



//     <View style={styles.container}>

//       <Text style={styles.heading}>Create Post</Text>

//       <TextInput

//         value={title}
//         onChangeText={setTitle}
//         placeholder="Enter Title"
//         style={styles.input}

//       />
//       <TextInput

//         value={body}
//         onChangeText={setBody}
//         placeholder="Enter Body"
//         style={styles.input}

//       />

//       <TouchableOpacity

//         onPress={postData}
//         style={styles.button}
//       >
//         <Text style={styles.heading}>
//           Posts
//         </Text>
//       </TouchableOpacity>

//       <Text style = {styles.heading}>
//         Posts
//       </Text>

//       <FlatList

//       data={data}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({item}) => (

//         <View style = {styles.card}>
//             <Text style = {styles.title}>{item.title}</Text>
//             <Text style = {styles.body}>{item.body}</Text>
//         </View>

//       )}

//       ></FlatList>

//     </View>

//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     padding: 16,
//     paddingTop: 40,
//     width: '100%',
//     height: '100%',
//     flexDirection: 'column',
//     shadowColor: '#000',


//   },

//   card: {
//     padding: 12,
//     marginBottom: 12,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     elevation: 2,
//   },

//   title: { fontSize: 18, fontWeight: 'bold' },

//   body: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 8,
//   },

//   input:{
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 8,
//     padding: 10,
//     marginVertical: 5,
//     width: '100%'
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 5,
//     width: 80,
//     alignItems: 'center',
//     borderRadius: 18,
//     marginTop: 5,
//     marginBottom: 10

//   }

// });




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const myIcon = <Icon name='rocket' size={30} color= '#900'/>

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator (bottom tabs for Home & Profile)
function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      headerTitleAlign: 'center',
      tabBarLabelStyle: {
        fontSize: 12
      },
      tabBarStyle: {
        height: 70
      },



    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => {
          return(
          <Icon name='home' size={30} color= 'black'/>
          );
        }
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}
      
      options={{
        tabBarIcon: () => <Ionicons name='person' size={30} color= 'black'></Ionicons>
      }}
      
      />
    </Tab.Navigator>
  );
}

// Root Stack contains Tabs and any other screens like Details etc.
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // hide header for tabs
        />
        {/* You can add more stack screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;








