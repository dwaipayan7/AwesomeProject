import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

const CreatePage = ({ data, setData }) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const addItemHandler = () => {
    const newDataItem = {
      id: Math.random(),
      name: itemName,
      stock: stock,
    };

    setData([...data, newDataItem]);
    setItemName('');
    setStock('');
    setisEdit(false);
  };

  const deleteItemHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  const editItemHandler = item => {
    setisEdit(true);
    setItemName(item.name);
    setEditItemId(item.id);
  };

  const updateItemHandler = () =>{
    setData(data.map((item) => item.id === editItemId ? {...item, name: itemName, stock: stock} : item));
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TextInput
        style={styles.input}
        value={itemName}
        placeholder="Enter Item Name"
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        style={styles.input}
        value={stock}
        placeholder="Enter Stock Amount"
        onChangeText={item => setStock(item)}
        keyboardType="numeric"
      />

      <Pressable
        style={styles.button}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}
      >
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : `Add Item`}</Text>
      </Pressable>

      <View style={styles.listWrapper}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items in the stock</Text>
          {/* <Text style={styles.headingText}>Quantity</Text> */}
        </View>

        {/* FlatList needs fixed height to work well inside ScrollView */}
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ gap: 10 }}
          scrollEnabled={false} // prevent nested scrolling conflict
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                { backgroundColor: item.stock < 20 ? '#ffcccc' : '#d7f6bfff' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={styles.itemText}>
                  {item.stock} {item.unit}
                </Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default CreatePage;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    gap: 10,
    flexGrow: 1,
  },
  input: {
    borderWidth: 1.2,
    borderColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#cabfeeff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listWrapper: {
    marginTop: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
});
