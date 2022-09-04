import './Layout.style.css';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Modal from '../Modal';
import { useSelector } from 'react-redux';

const Layout = () => {
    const showModal = useSelector(state => state.cart.showModal);
    return (
        <div className="is-modal-open">
            <Header/>
            <main>
                <Outlet/>
            </main>
            {
                showModal ? <Modal/> : <></>
            }
        </div>
    );
};

export default Layout;