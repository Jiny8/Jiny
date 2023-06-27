import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('posts');

export function createPost({title, contents}) {
  return postsCollection.add({
    title: title,
    contents: contents,
  });
}

export async function getPost() {
  try {
    const data = await postsCollection.get();
    console.log(data._docs.map(doc => ({...doc.data(), idx: doc.id})));
    return data._docs.map(doc => ({...doc.data(), idx: doc.id}));
  } catch (error) {
    console.log(error.message);
  }
}

export async function modifyPost({t, c}) {
  try {
    const rows = await postsCollection.where('title', '==', t);
    console.log(rows.get());
    rows.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.update({contents: c});
      });
    });
    console.log('Update Complete!', rows);
  } catch (error) {
    console.log(error.message);
  }
}

export async function deletePost({t}) {
  try {
    const rows = await postsCollection.where('title', '==', t);
    rows.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
    console.log('Delete Complete!', rows);
  } catch (error) {
    console.log(error.message);
  }
}
