import { makeAutoObservable } from "mobx";

class SortingStore {
    products = [];
    sortedProducts = [];
    sortByPrice = false;
    sortByName = false;
    showDiscount = false;
    priceFrom = '';
    priceTo = '';
    

    constructor(){
        makeAutoObservable(this);
    }

    
    
    setPriceFrom(price) {
        this.priceFrom = price;
        this.sortProducts();
    }
    setPriceTo(price) {
        this.priceTo = price
        this.sortProducts();
    }

    setSortByPrice() {
        this.sortByPrice = !this.sortByPrice
        this.sortProducts();
    }

    setSortByName() {
        this.sortByName =!this.setSortByName;
        this.sortProducts();
    }

    sortProducts(){
        let sortedProducts = [...this.products];

        console.log(sortedProducts)
        if(this.priceFrom !==""){
            sortedProducts = sortedProducts.filter((product) => product.price >= parseInt(this.priceFrom))
        }

        if(this.priceTo !== ''){
            sortedProducts = sortedProducts.filter((product) => product.price <= parseInt(this.priceTo));
        }


        if(this.sortByPrice){
            sortedProducts = sortedProducts.sort ((a, b) => {
                if(this.sortByPrice){
                    return a.price - b.price;
                } else {
                    return b.price - a.price
                }
            })
        } else if (this.sortByName) {
            sortedProducts = sortedProducts.sort ((a, b) => {
                if(this.sortByName){
                    return a.title.localeCompare(b.title);
                } else {
                    return b.title.localeCompare(a.title)
                }
            })
        }
        this.products = sortedProducts;
        this.sortedProducts =sortedProducts;
    }
    
    changeDiscounted() {
        this.showDiscount = !this.showDiscount;
        this.sortedProducts();
    }
    setProducts(products) {
        this.products = products;
        this.sortProducts(); // Пересортировать продукты при обновлении
    }

}

const sortingStore = new SortingStore();
export default sortingStore;