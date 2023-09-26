import React, { useEffect } from 'react';
import allCategories from '../../../store/allcategories'; // Убедитесь, что путь к файлу правильный
import { observer } from 'mobx-react-lite';
import categor from './categoriesStyle.module.css'
import { Link } from 'react-router-dom';

const Categories = observer(() => {
  const { categories, isLoading, getAllCategories } = allCategories;

  useEffect(() => {
    getAllCategories(); // Вызываем метод для загрузки категорий при монтировании компонента
  }, []);

  return (
    <>
      <div className={categor.titleWrapper}>
        <h1 className={categor.title}>Catalog</h1>
        <button className={categor.btn}><Link to='/categories/all'>All catalog</Link></button>
      </div>
      
      <div  className={categor.wrapper}>
        {isLoading ? (
          <p>Loading ....</p>
        ) : (
          categories.map((categorie) => (
            <div key={categorie.id} >
              <img src={`http://localhost:3333/${categorie.image}`} alt={categorie.id} className={categor.image}/>
              <p>{categorie.title}</p>
            </div>
          ))
        )}
      </div>
    </>
    
  );
});

export default Categories;
