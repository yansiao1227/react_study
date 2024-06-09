import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([
        {
            id: '001',
            name: 'EAT',
            done: true
        }, {
            id: '002',
            name: 'SLEEP',
            done: true
        }, {
            id: '003',
            name: 'PLAY',
            done: false
        },
    ])

    return (

        <div className="todo-container">
            <div className="todo-wrap">
                <Header/>
                <List todos={todos}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
