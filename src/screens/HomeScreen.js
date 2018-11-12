import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

class HomeScreen extends React.Component {
  render() {
    const post = {
      imageUrl: 'https://loremflickr.com/320/320',
      description: 'Cute cat!!!',
      author: {
        username: 'joe',
      },
    };

    return (
      <View style={styles.container}>
        <PostCard post={post} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
