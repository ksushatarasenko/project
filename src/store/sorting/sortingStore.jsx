import { makeAutoObservable } from "mobx";

// import allProducts from "../allProducts";
class SortingStore {
    products = [];
    sortedProducts = [];
    sortByPrice = false;
    sortByName = false;
    showDiscount = false;
    minPrice = '';
    maxPrice = '';
   

    constructor() {
        makeAutoObservable(this);
    }
// ======= sort min-max ========
    setMinPrice(price) {
        this.minPrice = price;
        this.sortProducts();
    }
    setMaxPrice(price) {
        this.maxPrice = price;
        this.sortProducts();
    }
// ======= sort spisok ===========
    setSortByPrice() {
        this.sortByPrice = !this.sortByPrice;
        this.sortProducts();
    }

    setSortByName() {
        this.sortByName = !this.sortByName; // Исправлено
        this.sortProducts();
    }
// ===================
    sortProducts() {
        let sortedProducts = [...this.products];

        if (this.priceFrom !== "") {
            sortedProducts = sortedProducts.filter((product) => product.price >= parseInt(this.priceFrom));
        }

        if (this.priceTo !== '') {
            sortedProducts = sortedProducts.filter((product) => product.price <= parseInt(this.priceTo));
        }

        sortedProducts = sortedProducts.sort((a, b) => {
            if (this.sortByPrice) {
                return a.price - b.price;
            } else if (this.sortByName) {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        this.sortedProducts = sortedProducts;
        console.log(this.sortedProducts);
        // this.products = this.sortedProducts
        // console.log(this.products)
    }

    changeDiscounted() {
        this.showDiscount = true;
        this.sortProducts();
    }

    setProducts(products) {
        this.products = products;
        this.sortProducts();
        
    }
}

const sortingStore = new SortingStore();
export default sortingStore;
