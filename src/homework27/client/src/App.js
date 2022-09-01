import './App.styles.css';

import Header from './components/Header';
import Main from './components/Main';

export default function App() {

    return (
        <div className="is-modal-open">
            <Header/>
            <Main/>
            {/*<Modal/>*/ }
        </div>
    );
}
