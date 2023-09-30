import React, { useEffect } from 'react';
import allCategories from '../../../store/allcategories'; 
import { observer } from 'mobx-react-lite';
import categor from './categoriesStyle.module.css'

const Categories = observer(() => {
  const { categories, isLoading, getAllCategories} = allCategories;

  useEffect(() => {
    getAllCategories(); 
  }, [getAllCategories]);

  return (
    <>
      <div  className={categor.wrapper}>
        {isLoading ? (
          <p>Loading ....</p>
        ) : (
          categories.map((categorie) => (
            <div key={categorie.id} >
              <img src={`http://localhost:3333/${categorie.image}`} alt={categorie.id} className={categor.image}/>
              <p className={categor.titleP}>{categorie.title}</p>
            </div>
          ))
        )}
      </div>
    </>
    
  );
});

export default Categories;
