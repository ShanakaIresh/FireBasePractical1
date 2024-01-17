
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDxsF3vj-umzbxsXl-SaFWCGqD_l3iBLB0",
    authDomain: "webdev-database-demo.firebaseapp.com",
    projectId: "webdev-database-demo",
    storageBucket: "webdev-database-demo.appspot.com",
    messagingSenderId: "431740101639",
    appId: "1:431740101639:web:045a92ca07a32b7478b6a2",
    measurementId: "G-Q72CZVJVQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const goSite = getFirestore()

const searchCollection = collection(goSite, 'Games')
// console.log(searchCollection)
const docArray = []

const node = document.querySelector('.ol')

const addData = () => {

    docArray.forEach((doc) => {
        const block = `
            <ol>
                <li>${doc[0].game_name}</li>
                <li>${doc[0].developer_team}</li>
                <li>${doc[0].year_release}</li>
            </ol>
    `
        node.innerHTML += block
    })

}
getDocs(searchCollection).then((snapshot) => {
    // console.log(snapshot.docs)
    snapshot.docs.forEach((doc) => {
        docArray.push([{ ...doc.data(), id: doc.id }])
    });
    console.log(docArray)
    return docArray
}).then((docArray) => {
    addData(docArray)
})

