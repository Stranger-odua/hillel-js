import './styles.css';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import Authorization from './components/Authorization';
import { useSelector } from 'react-redux';

export default function App() {
    const isUserAuthorise = useSelector(state => state.user.isUserAuthorise);
    return (
        isUserAuthorise
            ? <>
                <section className="todoapp">
                    <TodoHeader/>
                    <section className="main">
                        <TodoToggleAll/>
                        <TodoList/>
                    </section>
                    <TodoFooter/>
                </section>
                <Authorization/>
            </>

            : <>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                    </header>
                </section>
                <Authorization/>
            </>
    );

}
