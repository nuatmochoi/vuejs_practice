// firebase real-time db
import firebase from 'firebase';

function saveEndpointToFirebase(endpoint, email) {
  if (!email) {
    return Promise.reject({ message: 'login account is not included' });
  }
  const id = email.split('@').shift();
  return firebase
    .database()
    .ref(`users/${id}`)
    .set({ endpoint, time: getCurrentTime() });
}

function removeDeviceKeyInFirebase() {
	// Firebase 의 DB data 삭제 API 를 이용하여
	// Disable 한 기기의 키 값을 제거해보세요.
}

async function getUserList() {
  const snapshot = await firebase
    .database()
    .ref('/users/')
    .once('value');
  return snapshot.val();
}

function getCurrentTime() {
  return new Date().toLocaleString();
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export {
  saveEndpointToFirebase,
  removeDeviceKeyInFirebase,
  getUserList,
  urlB64ToUint8Array
};