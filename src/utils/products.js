import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la base de datos
  const database = getFirestore();

  // referencia a la collecion
  const collectionReference = collection(database, 'items');

  // consulta con el filtro que queremos
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
 
]

export const createAllProducts = async () => {
  try {
    // obtenemos la base de datos
    const database = getFirestore(); 

    // referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}

