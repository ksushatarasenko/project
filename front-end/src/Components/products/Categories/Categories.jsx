import React, { useEffect } from 'react';
import productsStore from '../../../store/productsStore'; 
import categor from './categoriesStyle.module.css';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


const Categories = observer(({limit}) => {
  const {allCategories, isLoading, getAllCategories} = productsStore;

  useEffect(() => {
    getAllCategories(); 
  }, []);

  return (
    
      <div  >
        {isLoading ? (
          <p>Loading ....</p>
        ) : (
          <div className={categor.wrapper}>
            {allCategories.slice(0, limit).map((categorie) => (
              <div key={categorie.id}  className={categor.item}>
                <Link to={`/categories/${categorie.id}`}>
                  <img src={`http://localhost:3333/${categorie.image}`} alt={categorie.id} className={categor.image}/>
                </Link>
                
                <div className={categor.link}>
                  <Link to={`/categories/${categorie.id}`} className={categor.titleP} >{categorie.title} </Link>
                </div>
                
              </div>
            ))}
          </div>
        )
        }
       
       
      </div>    
  );
});

export default Categories;
