const StoreList = ({stores, title}) => {
    const useableStores = stores.map(store => (
        
        <div id="store-template" key={store.id}>
            <br />
            <h2>{store.name}</h2>
            <aside><strong>Status:</strong> {store.status}</aside>
            <p><strong>Location:</strong> {store.location}</p>
            <p><strong>Type:</strong> {store.type}</p>
        </div>
    ));
    return ( 
        <div id="different-stores" className="blog-preview">
            <h1>{title}</h1>
            { useableStores }
        </div>
     );
}
 
export default StoreList;