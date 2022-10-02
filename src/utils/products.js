export const products = [
  {id: 1, title:'Samsung A71', category: 'equipos_android', description:'Nuevo Lanzamiento! Incluye Funda Protectora!', price: 78300, pictureUrl: 'https://i.ibb.co/S0cggL4/A71.jpg', stock:'number'},
  {id: 2, title:'Iphone 13pro Max', category: 'equipos_Apple', description:'Todo el poder en tu mano, tecnologia A13!', price: 355000, pictureUrl: 'https://i.ibb.co/QFZMcV3/13promax.jpg', stock:'number'},
  {id: 3, title:'Morotola G200', category: 'equipos_android', description:'Poderoso y con mando multimedia HD', price: 196300, pictureUrl: 'https://i.ibb.co/m42XfhX/g200.jpg', stock:'number'},
  {id: 4, title:'Ipad 4 Mini', category: 'equipos_Apple', description:'Lo ultimo de Apple, portable y potente', price: 34900, pictureUrl: 'https://i.ibb.co/vXW1Rnb/ipad4mini.jpg', stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};