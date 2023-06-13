import { categories } from '../../tmp/data'

const getCategories = async () =>{
    return new Promise((resolve, reject) =>{
        resolve(categories);
    });
};

const getCategorie = async (id) => {
    return new Promise((resolve,reject) =>{
        resolve(categories.find((categorie) => categorie.id === id));
    });
}

export { getCategories, getCategorie }