import React, { useState } from 'react';
import Bean from './Bean';
import Cart from './Cart';
import './App.css';

let idArr = [];

const App = props => {

  const [globalState, setGlobalState] = useState({
    page: 'shopping',
    productCatalogue: {
      bean1: {
        id: 'bean1',
        price: 100,
        description: 'From Columbia',
        name: 'Columbia'
      },
      bean2: {
        id: 'bean2',
        price: 200,
        description: 'From Ethiopia Sidamo',
        name: 'Sidamo'
      },
      bean3: {
        id: 'bean3',
        price: 300,
        description: 'From Kenya',
        name: 'Kenya AA'
      },
      bean4: {
        id: 'bean4',
        price: 400,
        description: 'From Ethiopia',
        name: 'Ethiopia Yirgacheffe'
      },
      bean5: {
        id: 'bean5',
        price: 500,
        description: 'High quality Geisha',
        name: 'Geisha'
      }
    },
    cartContents: []
  })

  const beanKeys = Object.keys(globalState.productCatalogue);
  const beans = beanKeys.map(beanKey => <Bean key={globalState.productCatalogue[beanKey].id}
    id={globalState.productCatalogue[beanKey].id}
    price={globalState.productCatalogue[beanKey].price}
    desc={globalState.productCatalogue[beanKey].description}
    name={globalState.productCatalogue[beanKey].name}
    click={() => handleAddOne(globalState.productCatalogue[beanKey].id)} />)

  const cartBeans = globalState.cartContents.map(obj => <Cart key={globalState.productCatalogue[obj.id].id}
    id={globalState.productCatalogue[obj.id].id}
    price={globalState.productCatalogue[obj.id].price}
    desc={globalState.productCatalogue[obj.id].description}
    name={globalState.productCatalogue[obj.id].name}
    quantity={obj.quantity} />)

  const subTotal = globalState.cartContents.reduce((acc, cur) => {
    console.log(acc, cur)
    return acc + cur.quantity
  }, 0)

  const handleTogglePage = (page) => {
    page === 'shopping' ? page = 'cart' : page = 'shopping';
    setGlobalState({ ...globalState, page: page })
  }

  const handleAddOne = (id) => {
    const cartContents = getContentsObj(id);
    console.log({ cartContents })
    setGlobalState({ ...globalState, cartContents: cartContents });
  }

  const getContentsObj = (id) => {
    idArr.push(id);
    let quantity = {};
    idArr.map(id => quantity[id] = (quantity[id] || 0) + 1);
    return Object.keys(quantity).map(q => ({ id: q, quantity: quantity[q] }));
  }

  const handleEmptyCart = () => {
    idArr = [];
    setGlobalState({ ...globalState, cartContents: [] })
  }

  let h1 = 'Add your own beans';
  if (globalState.page === 'cart') {
    h1 = 'Your shopping list'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{h1}</h1>
      </header>
      <button onClick={() => handleTogglePage(globalState.page)}>TOGGLE PAGE</button>
      {globalState.page === 'shopping' ? null :
        <div>
          <div>Subtotal: {subTotal}</div>
          <button onClick={handleEmptyCart}>EMPTY CART</button>
        </div>
      }
      {globalState.page === 'shopping' ? beans : cartBeans}
    </div>
  );

}

export default App;