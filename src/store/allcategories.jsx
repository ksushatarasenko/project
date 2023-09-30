import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class AllCategories {
    categories = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.getAllCategories = this.getAllCategories.bind(this);
    }

    async getAllCategories() {
        this.isLoading = true;
        try{
          const responce = await axios.get('http://localhost:3333/categories/all');
          this.categories = responce.data;
        } catch (err){
          console.error('Loading error ....',err);
        } finally {
            this.isLoading = false;
        }
      }
}

const allCategories = new AllCategories();

export default allCategories;
