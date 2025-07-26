import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [data, setData] = useState<Item[] | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {

    fetchData(); // call the function
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  const postData = async () => {
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
        });

        const newPost = await response.json();
        console.log('Posted', newPost);

        setData([newPost, ...(data || [])]);

        setTitle('');
        setBody('');
        

    } catch (error) {

      console.log('Error posting data:', error);
      

    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Fetching Data's
      </Text>

      {data ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.body}</Text>
              </SafeAreaView>
            );
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 40,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    shadowColor: '#000',


  },

  card: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 2,
  },

  title: { fontSize: 18, fontWeight: 'bold' },

  body: {
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  }

});
