import { useState } from 'react';
import StoreList  from './StoreList';
const Stores = () => {

    const [storesArray, userStores] = useState([
        {name:'KFC', status: 'Open', location: 'St. James', type: 'Food', id: 1},
        {name:'Intellisense', status: 'Closed', location: 'San Juan', type: 'Tech', id: 2},
        {name:'Gabs Ham', status: 'Open', location: 'Cocorite', type: 'Fashion', id: 3},
        {name:'Burger King', status: 'Closed', location: 'Port-of-Spain', type: 'Food', id: 4},
        {name:'West Mall', status: 'Open', location: 'Diego-Martin', type: 'Fun', id: 5}
    ])

    return (  
        
        <div className="stores-preview">
           
            <h1>Stores</h1>
            <StoreList stores={storesArray} title="Different Stores"/>
            <hr />
            <StoreList stores={storesArray.filter(store => store.status ===  'Open')} title="Opened Stores"/>
            <hr />
            <StoreList stores={storesArray.filter(store => store.status ===  'Closed')} title="Closed Stores"/>
        </div>
    );
}
 
export default Stores;