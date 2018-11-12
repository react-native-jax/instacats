import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class PostCard extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <View>
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

export default PostCard;
