// TODO реалізувати спінери

import './styles.css';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';


export default function App() {
    return (
        <section className="todoapp">
            <TodoHeader/>
            <section className="main">
                <TodoToggleAll/>
                <TodoList/>
            </section>
            <TodoFooter/>
        </section>
    );
}
