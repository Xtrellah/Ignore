fetch('biscuit.json').then(function (res) {
    return res.json()
}).then(function(data) {

    const target = document.querySelector('.target')

    data.biscuits.forEach(function (biscuit) {
        console.log(biscuit.name)
        target.innerHTML += `
        <div>
            <h2>${biscuit.name}</h2>
            <img src="${biscuit.img}" />
            <h4>Recomended Dunk Time: ${biscuit.RDT}</h4>
            <p>${biscuit.desc}</p>
            <a href="${biscuit.wikipedia}" </a>
        </div>`
        
    })
})