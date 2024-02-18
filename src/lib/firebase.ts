// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // 追加
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCXImYhH6kuhmaA9fOJZie0uhS3sX3yQWE',
	authDomain: 'svelte-demo-44c4a.firebaseapp.com',
	projectId: 'svelte-demo-44c4a',
	storageBucket: 'svelte-demo-44c4a.appspot.com',
	messagingSenderId: '167725653968',
	appId: '1:167725653968:web:661fc788f378b24d0c23d5',

	// apiKey: process.env.API_KEY,
	// authDomain: process.env.AUTH_DOMAIN,
	// projectId: process.env.PROJECT_ID,
	// storageBucket: process.env.STORAGE_BUCKET,
	// messagingSenderId: process.env.MESSAGING_SENDER_ID,
	// appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 追加
