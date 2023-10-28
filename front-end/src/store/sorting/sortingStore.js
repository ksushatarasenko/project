import { makeAutoObservable } from "mobx";


class SortingStore {

    products = [];
    sortedProducts = [];
    sortPriceToLower = false;
    sortPriceToDown = false;
    sortNameToLower = false;
    sortNameToDown = false;
    showDiscount = false;
    data = {};
    intermedianteSortedProducts = [];
   

    constructor() {
        makeAutoObservable(this);
        
    }
   
resetSortedProducts() {
        this.sortedProducts = [];
    }

setShowDiscount = (checked, products) =>{
    this.showDiscount = checked
    this.products = products;
    this.setFilterProducts() 
    this.updateSortedProducts();
 }   
// ======= sort min-max ========
setSortPrice (data, products) {   
    this.data = data
    this.products = this.sortedProducts.length === 0 ? products : this.sortedProducts;
    this.setFilterProducts()
    this.updateSortedProducts();
  }

//   ==================

setSortPriceToLower = (products) => {
    this.products = this.sortedProducts.length === 0 ? products : this.sortedProducts;
    this.sortPriceToLower = !this.sortPriceToLower;
    this.setFilterProducts();
    this.updateSortedProducts();
    }
setSortPriceToDown = (products) => { 
    this.products = this.sortedProducts.length === 0 ? products : this.sortedProducts;
    this.sortPriceToDown = !this.sortPriceToDown;
    this.setFilterProducts()
    this.updateSortedProducts();
}

setSortNameToLower = (products) => {
    this.products = this.sortedProducts.length === 0 ? products : this.sortedProducts;
    this.sortNameToLower = !this.sortNameToLower ; 
    this.setFilterProducts();
    this.updateSortedProducts();
}

setSortNameToDown = (products) => {
    this.products = this.sortedProducts.length === 0 ? products : this.sortedProducts;
    this.sortNameToDown = !this.sortNameToDown ; 
    this.setFilterProducts();
    this.updateSortedProducts();
}
// ========== ALL SORT ================
 setFilterProducts(){
    let sortedProducts = [...this.products]
    this.updateSortedProducts();
    console.log("массив отсортирован в начале сортировки" , sortedProducts)
    
    if (this.data.minPrice >= 0 && this.data.maxPrice > 0) {
        sortedProducts = sortedProducts.filter(product => {
          const discontPrice = product.discont_price;
          const price = product.price;     
          return (discontPrice !== null && discontPrice >= this.data.minPrice && discontPrice <= this.data.maxPrice) ||
                 (discontPrice === null && price >= this.data.minPrice && price <= this.data.maxPrice);
        });
      }
    console.log('проверка чекбокс до',this.showDiscount,sortedProducts)

    if(this.showDiscount){
        sortedProducts = sortedProducts.filter((product) => product.discont_price !== null)
    }

    console.log('проверка в начале сортировки', sortedProducts)
    
    
            sortedProducts.sort((a, b) => {
                const hasDiscountA = a.discont_price !== null;
                const hasDiscountB = b.discont_price !== null;  

                const priceA = hasDiscountA ? a.discont_price : a.price;
                const priceB = hasDiscountB ? b.discont_price : b.price;
                if (this.sortPriceToLower) {
                    return priceB - priceA ;
                } else if (this.sortPriceToDown){
                    return priceA  - priceB;
                } else if(this.sortNameToLower) {
                    return a.title.localeCompare(b.title);
                } else if (this.sortNameToDown){
                    return b.title.localeCompare(a.title)
                }
                    return 0;
             });
    
    console.log('проверка в конце сортировки', sortedProducts)
    console.log(this.data)
    

  
    this.intermedianteSortedProducts = sortedProducts;
    this.updateSortedProducts()
    } 

    updateSortedProducts(){
        this.sortedProducts = [...this.intermedianteSortedProducts];
        console.log('проверка в конце обновление массива',this.sortedProducts)
    }
    
}


const sortingStore = new SortingStore();

export default sortingStore;