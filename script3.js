fetch('products.json').then(function (res) {
    return res.json()
}).then(function(data) {
    
    const target = document.querySelector('.target')
    
    data.items.forEach(function (product){
            console.log(product.name)
            target.innerHTML += `
            <div>
                <h2>${product.name}</h2>
                <p>£${product.price}</p>
                <img src="${product.image}" />
            </div>
        `
    })
})