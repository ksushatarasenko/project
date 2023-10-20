import { makeAutoObservable } from "mobx";


class SortingStore {
    products = [];
    sortedProducts = [];
    sortPriceToLower = false;
    sortPriceToDown = false;
    sortNameToLower = false;
    sortNameToDown = false;
    showDiscount = false;
    data = {}
     
   

    constructor() {
        makeAutoObservable(this);
        
    }
    

 setShowDiscount = (checked, products) =>{
    this.showDiscount = checked
    this.products = products
    this.setFilterProducts()   
 }   
// ======= sort min-max ========
setSortPrice (data, products) {   
    this.data = data
    this.products = products
    this.setFilterProducts()
    this.data = {}
  }

//   ==================

setSortPriceToLower = (products) => {
    
    this.products = products;
    this.sortPriceToLower = !this.sortPriceToLower;
    console.log(this.sortPriceToLower)
    this.setFilterProducts();
    this.sortPriceToLower = false; 
    }
setSortPriceToDown = (products) => {
   
    this.products = products;
    this.sortPriceToDown = !this.sortPriceToDown;
    console.log(this.sortPriceToDown)
    this.setFilterProducts()
    this.sortPriceToDown = false;
}

setSortNameToLower = (products) => {
    
    this.products = products;
    this.sortNameToLower = !this.sortNameToLower ; 
    this.setFilterProducts();
    console.log(this.sortNameToLower)
    this.sortNameToLower = false;
    }

setSortNameToDown = (products) => {
    
    this.products = products;
    this.sortNameToDown = !this.sortNameToDown ; 
    this.setFilterProducts();
    console.log(this.sortNameToDown)
    this.sortNameToDown = false;
    }
// ========== ALL SORT ================
 setFilterProducts(){
    let sortedProducts = [...this.products]
    console.log(sortedProducts)

    if(this.showDiscount){
        sortedProducts = sortedProducts.filter((product) => product.discont_price !== null)
    }
    console.log(sortedProducts)
    console.log('showDiscount:' + this.showDiscount)
    console.log("Data:" + this.data)
    console.log("PriceStatusLower:" + this.sortPriceToLower)
    console.log("PriceStatusDown:" + this.sortPriceToDown)
    console.log("TitleLower:" + this.sortNameToLower)
    console.log("TitleDown:" + this.sortNameToDown)


    if(this.data.minPrice >= 0 || this.data.maxPrice >0){
        sortedProducts = sortedProducts.filter(product => product.price >= this.data.minPrice && product.price <= this.data.maxPrice)
    }
    
    sortedProducts.sort((a, b) => {
                    if (this.sortPriceToLower) {
                        return b.price - a.price;
                    } else if (this.sortPriceToDown){
                        return a.price - b.price;
                    } else if(this.sortNameToLower) {
                        return a.title.localeCompare(b.title);
                    } else if (this.sortNameToDown){
                        return b.title.localeCompare(a.title)
                    }
                    return 0;
                });

   console.log(sortedProducts)
    this.sortedProducts = sortedProducts

    } 
    
}

const sortingStore = new SortingStore();

export default sortingStore;