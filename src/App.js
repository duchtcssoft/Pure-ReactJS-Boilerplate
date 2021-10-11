// libs
import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore/lite";
// others
import "./App.scss";

const { getFirestore, collection, getDocs } = firestore;

const firebaseConfig = {
  apiKey: "AIzaSyCBXbSdsAqGAx7m8CjQzIdkpqVdWd3otl0",
  authDomain: "testdatabase-185de.firebaseapp.com",
  projectId: "testdatabase-185de",
  storageBucket: "testdatabase-185de.appspot.com",
  messagingSenderId: "716426653291",
  appId: "1:716426653291:web:9760b374bb4df0f7fd0b2e",
  measurementId: "G-21GVDV0XYZ"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
async function getCities() {
  const citiesCol = collection(db, "test-collection");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function App() {
  getCities().then(res => {
    console.log({ res });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
