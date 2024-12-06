import React from 'react'

function CollectionItem({image,product, price}) {
  return (
    <div className="collectionItem">
       <img src={image} alt="Contact Us" />
      <h1>{product}</h1>
      <p>$ {price}</p>
    </div>
  )
}

export default CollectionItem
