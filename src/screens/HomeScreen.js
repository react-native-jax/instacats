import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
        <Image style={styles.image} source={{ uri: post.imageUrl }} />
        <Text style={styles.description}>
          <Text style={styles.authorName}>{post.author.username} </Text>
          {post.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  description: {
    padding: 10,
  },
  authorName: {
    fontWeight: '700',
  },
});

export default HomeScreen;
