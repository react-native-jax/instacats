import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import PostCard from '../components/PostCard';

class HomeScreen extends React.Component {
  render() {
    const post = {
      imageUrl: 'https://loremflickr.com/320/320',
      description: 'Cute cat!!!',
      author: {
        username: 'joe',
        avatarUrl: 'https://loremflickr.com/50/50/person',
      },
    };

    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <PostCard post={post} />
          <PostCard post={post} />
          <PostCard post={post} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
