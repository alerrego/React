import {getFirestore, getDoc, getDocs, doc, collection} from 'firebase/firestore'

const getItems = async () =>{
    const db = getFirestore()

    const itemsRef = collection (db, 'items')

    const snapshot =  await getDocs(itemsRef)
    
    return snapshot.docs.map(item => ({
        id: item.id, ...item.data()
    }))
}

const getItem = async (id) =>{
    const db = getFirestore()

    const itemRef = doc (db, 'items', id)

    const snapshot = await getDoc(itemRef)

    if (snapshot.exists()){
        return {id: snapshot.id, ...snapshot.data()};

    }
    return null;




}

export {getItems, getItem}