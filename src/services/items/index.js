import { items } from '../../tmp/data'

const getItems = async () =>{
    return new Promise((resolve, reject) =>{
        resolve(items);
    });
};

const getItem = async (id) => {
    return new Promise((resolve,reject) =>{
        resolve(items.find((item) => item.id === id));
    });
}

export { getItems, getItem }