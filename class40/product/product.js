async function products_fun(){
    try{
        const data = await fetch('https://fakestoreapi.com/products')
        const jsonData = await data.json()
        console.log(jsonData)
    }
    catch(err){
        console.log(err)
    }
}
products_fun()

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('product-container');
            data.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                
                const title = document.createElement('h3');
                title.textContent = product.title;
                
                const description = document.createElement('p');
                description.textContent = product.description;
                
                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(description);
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});