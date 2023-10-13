import React, { useEffect } from 'react';
import allCategories from '../../../store/allcategories'; 
import categor from './categoriesStyle.module.css';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
// import Footer from '../../footer/Footer'
// import FourProducts from '../Products/FourProducts';

const Categories = observer(({limit}) => {
  const {categories, isLoading, getAllCategories} = allCategories;

  useEffect(() => {
    getAllCategories(); 
  }, [getAllCategories]);

  return (
    <>
      <div  >
        {isLoading ? (
          <p>Loading ....</p>
        ) : (
          <div className={categor.wrapper}>
            {categories.slice(0, limit).map((categorie) => (
              <div key={categorie.id} >
                <img src={`http://localhost:3333/${categorie.image}`} alt={categorie.id} className={categor.image}/>
                <div className={categor.link}>
                  <Link to={`/categories/${categorie.id}`} className={categor.titleP}>{categorie.title}</Link>
                </div>
                
              </div>
            ))}
          </div>
        )
        }
      </div>
      
    </>
    
  );
});

export default Categories;
