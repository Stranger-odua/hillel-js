/* FIXME:
*  - .cart-icon.shake
*  - Зробити при скролі щоб з'їжджала корзина
*  - Перенести css у компоненти
*  - Спінери та помилки запитів не реалізовані так, як для проекту на локальній машині це несуттєво
*  - Можна подумати про виділення в окремий компонент назву страви, ціну, кнопку додати, так як вони
*       ідентичні в каруселі та в картці страви
*  - Реалізувати іншу варіацію фото при виборі страви із каруселі
*  - Карусель зробив, щоб фото йши по колу, це не так, як в оригіналі, але вже не захотів перероблювати, так здалося навіть краще
*  - При великій кількості замовлених страв не відображається верх модального вікна в оригіналі та ж проблема
*
*  на майбутнє:
*  - використати TypeScript
*  - спробувати SSR (next.js)
*  - Використати Tailwind
 */

import './App.styles.css';
import { Route, Routes } from 'react-router-dom';
import SaladsPage from './pages/SaladsPage';
import Layout from './components/Layout';
import AllProductsPage from './pages/AllProductsPage';
import SoupsPage from './pages/SoupsPage';
import ChickenDishesPage from './pages/ChickenDishesPage';
import BeefDishesPage from './pages/BeefDishesPage';
import SeafoodDishesPage from './pages/SeafoodDishesPage';
import VegetableDishesPage from './pages/VegetableDishesPage';
import BitsAndBitesPage from './pages/BitsAndBitesPage';
import OnTheSidePage from './pages/OnTheSidePage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <Layout/> }>
                <Route index element={ <AllProductsPage/> }/>
                <Route path="/salads" element={ <SaladsPage/> }/>
                <Route path="/soups" element={ <SoupsPage/> }/>
                <Route path="/chickendishes" element={ <ChickenDishesPage/> }/>
                <Route path="/beefdishes" element={ <BeefDishesPage/> }/>
                <Route path="/seafooddishes" element={ <SeafoodDishesPage/> }/>
                <Route path="/vegetabledishes" element={ <VegetableDishesPage/> }/>
                <Route path="/bitsandbites" element={ <BitsAndBitesPage/> }/>
                <Route path="/ontheside" element={ <OnTheSidePage/> }/>
            </Route>
        </Routes>
    );
}
