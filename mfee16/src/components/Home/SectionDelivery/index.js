import { useState } from 'react';
import RowDelivery from './RowDelivery';
import RowDishes from './RowDishes';
import RowBtn from './RowBtn';
import '../../../styles/home/home-section-delivery.scss';

function SectionDelivery() {
  // 目前選到類別的狀態
  const [currentCategory, setCurrentCategory] = useState('主餐');

  return (
    <section className="delivery-section">
      <h2 className="title">外送訂餐</h2>
      <RowDelivery
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <RowDishes currentCategory={currentCategory} />
      <RowBtn />
    </section>
  );
}

export default SectionDelivery;
