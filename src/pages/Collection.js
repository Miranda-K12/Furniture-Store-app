import React from 'react';
import CollectionItem from '../components/CollectionItem';
import { CollectionList } from '../helpers/collectionList';
import '../styles/Collection.css';
function Collection() {
  return (
    <div className="collection">
      <h1 className='collectionTitle'>Our Collection</h1>
      <div className="collectionList">
        {CollectionList.map((collectionItem, key) => {
          return (
            <CollectionItem
              key={key}  
              image={collectionItem.image}  
              product={collectionItem.product}  
              price={collectionItem.price} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;

