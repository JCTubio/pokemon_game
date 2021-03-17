const firebaseConfig = {
  apiKey: process.ENV.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.ENV.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.ENV.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.ENV.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.ENV.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.ENV.REACT_APP_FIREBASE_APPID,
  measurementId: process.ENV.REACT_APP_FIREBASE_MEASUREMENTID
};

export default firebaseConfig
