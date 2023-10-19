import { makeAutoObservable } from "mobx";
import axios from "axios";

class SingleCategories{
    category = [];
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
        // this.getSingleCategory = this.getSingleCategory.bind(this);
    }

    async getSingleCategory(id) {
       
        try{
            this.isLoading = true;
            const response = await axios.get(`http://localhost:3333/categories/${id}`);
            this.category = response.data.data;
            console.log(this.category)
        } catch (error) {
            console.error('Loading errorr...', error)
        } finally {
            this.isLoading = false;
        }
    }
}

const singleCategory = new SingleCategories();
export default singleCategory;
