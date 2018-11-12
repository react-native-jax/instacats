import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class PostCard extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: post.author.avatarUrl }}
          />
          <Text style={styles.authorName}>{post.author.username} </Text>
        </View>
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
    backgroundColor: '#ccc',
  },
  description: {
    padding: 10,
  },
  authorName: {
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
});

export default PostCard;
