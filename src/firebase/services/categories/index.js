import {getFirestore, collection, getDocs} from './firebase/firestore'

const getCategories = async () => {
    try {
      const db = getFirestore()
      const categoriesRef = collection(db, 'categories')
      const snapshot = await categoriesCollection.get();
      const fetchedCategories = snapshot.docs.map(doc => doc.data());
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  export {getCategories}