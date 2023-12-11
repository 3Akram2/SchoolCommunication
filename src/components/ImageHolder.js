import React from 'react'

function ImageHolder({source,alt}) {
  return (
    <div>
        <img src={require(source)} alt={alt} />
    </div>
  )
}

export default ImageHolder