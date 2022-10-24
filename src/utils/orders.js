import { addDoc, collection, getFirestore } from "firebase/firestore";

export const createOrder = (newOrder) => {
  // base de datos
  const database = getFirestore(); 

  // referencia a la collecion
  const collectionReference = collection(database, 'orders');

  return addDoc(collectionReference, newOrder)
    .then((snapshot) => snapshot.id)
    .catch(error => console.warn(error))
};

