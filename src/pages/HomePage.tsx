import { Image, Pressable } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import groceryImg from '../../assets/grocery.png';
import { useState } from 'react';
import AllItems from './AllItems';
import CreatePage from './Create';

// const data = ;

const HomePage = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: 'Rice', stock: 50, unit: 'kg' },
    { id: 2, name: 'Wheat Flour', stock: 30, unit: 'kg' },
    { id: 3, name: 'Sugar', stock: 20, unit: 'kg' },
    { id: 4, name: 'Milk', stock: 15, unit: 'litre' },
    { id: 5, name: 'Eggs', stock: 40, unit: 'pcs' },
    { id: 6, name: 'Tomatoes', stock: 25, unit: 'kg' },
    { id: 7, name: 'Cooking Oil', stock: 10, unit: 'litre' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Image resizeMode="cover" source={groceryImg} style={styles.image} />

      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, view === 0 && styles.activeBtn]}
          onPress={() => setView(0)}
        >
          <Text style={[styles.btnText, view === 0 && styles.activeBtnText]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 1 && styles.activeBtn]}
          onPress={() => setView(1)}
        >
          <Text style={[styles.btnText, view === 1 && styles.activeBtnText]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 2 && styles.activeBtn]}
          onPress={() => setView(2)}
        >
          <Text style={[styles.btnText, view === 2 && styles.activeBtnText]}>
            Create Item
          </Text>
        </Pressable>
      </View>

      {/* Conditional rendering */}
      <View style={{ flex: 1, marginTop: 20 }}>
        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
        {view === 2 && <CreatePage data={data} setData = {setData}/>}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '5%',
    paddingTop: '12%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '65%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  btn: {
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: '#72c37aff',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  activeBtn: {
    backgroundColor: '#72c37aff',
  },
  btnText: {
    color: '#72c37aff',
    fontSize: 12,
    fontWeight: '400',
  },
  activeBtnText: {
    color: 'white',
  },
});
