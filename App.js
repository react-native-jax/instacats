import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const PostCard = ({ post }) => {
  const { username, avatarUrl, imageUrl, description } = post;
  return (
    <View>
      <View style={styles.userHeader}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={[styles.box]} />
      <Text style={styles.description}>
        <Text style={styles.username}>{username} </Text>
        {description}
      </Text>
    </View>
  );
};

export default class App extends React.Component {
  render() {
    const post = {
      username: 'joe',
      avatarUrl: 'https://loremflickr.com/320/240/me?lock=1',
      imageUrl: 'https://loremflickr.com/320/240?lock=42',
      description: 'Cute cat!!!',
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
    backgroundColor: 'white',
  },
  box: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#ccc',
  },
  description: {
    margin: 10,
  },
  username: {
    fontWeight: '700',
  },
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    margin: 10,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
