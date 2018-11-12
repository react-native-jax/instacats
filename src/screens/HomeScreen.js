import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import PostCard from '../components/PostCard';

class HomeScreen extends React.Component {
  render() {
    const posts = [
      {
        key: '1',
        imageUrl: 'https://loremflickr.com/320/320',
        description: 'Cute cat!!!',
        author: {
          username: 'joe',
          avatarUrl: 'https://loremflickr.com/50/50/person',
        },
      },
      {
        key: '2',
        imageUrl: 'https://loremflickr.com/320/320',
        description: 'Cute cat!!!',
        author: {
          username: 'jane',
          avatarUrl: 'https://loremflickr.com/50/50/person',
        },
      },
      {
        key: '3',
        imageUrl: 'https://loremflickr.com/320/320',
        description: 'Cute cat!!!',
        author: {
          username: 'jack',
          avatarUrl: 'https://loremflickr.com/50/50/person',
        },
      },
    ];

    return (
      <FlatList
        ListHeaderComponent={SafeAreaView}
        ListFooterComponent={SafeAreaView}
        data={posts}
        style={styles.container}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item }) => {
    return <PostCard post={item} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
