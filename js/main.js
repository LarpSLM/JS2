const goods = [
    { title: "Bacardi Gold", price: 50},
    { title: "Bacardi Black", price: 75},
    { title: "Bacardi Oakhert", price: 65},
    { title: "Bacardi Carta Negra", price: 55},
    { title: "Bacardi Superior", price: 60},
    { title: "Jack Daniels", price: 80},
    { title: "Red Label", price: 45},
    { title: "Black Label"},
    { price: 100}
];

const renderGoodsItem = (title = 'Name???', price = 'Price???') => {
    return `<div class="goods-item">
        <div class="item_img"></div>
        <h3>${title}</h3>
        <p>${price}$</p>
    </div>`;
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item =>
        renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);