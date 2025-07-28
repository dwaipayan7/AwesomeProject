import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>All Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle = {{gap: 10}}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.stock < 20 ?"#ffcccc" : "#d7f6bfff"}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>
              {item.stock} {item.unit}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10
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
    // marginBottom: 10
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
});
