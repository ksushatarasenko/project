import React, { useEffect } from 'react';
import allCategories from '../../../store/allcategories';
import categor from './categoriesStyle.module.css'
import { Link } from 'react-router-dom';

function FourCategories() {
  const { categories, isLoading, getAllCategories } = allCategories;

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const fourCategories = categories.slice(0, 4);

  return (
    <>
        <div className={categor.titleWrapper}>
            <h1 className={categor.title}>Catalog</h1>
            <button className={categor.btn}>
                <Link to='/categories/all'>All catalog</Link>
            </button>
        </div>

        <div className={categor.fourCategories}>
            {isLoading ? (
                <p>Loading ....</p>
            ) : (
                fourCategories.map((category) => (
                <div key={category.id}>
                    <img
                    src={`http://localhost:3333/${category.image}`}
                    alt={category.id}
                    className={categor.image}
                    />
                    <p className={categor.titleP}>{category.title}</p>
                </div>
                ))
            )}
        </div>
    </>
    
  );
}

export default FourCategories;
