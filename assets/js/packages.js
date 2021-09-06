var packageItems = document.getElementsByClassName('package-item');

const packageTypes = [
    'berlin', 'hongkong', 'francisco', 'phuket', 'amsterdam', 'tuscany'
];

var packages = [
    {
        country: 'Berlin',
        name: 'Europe',
        firstTypologies: 'cultural',
        secondTypologies: 'relax',
        priceOld: '',
        priceNew: 700
    },
    {
        country: 'Hong Kong',
        name: 'Asia',
        firstTypologies: 'history',
        secondTypologies: 'cultural',
        priceOld: 1000,
        priceNew: 500
    },
    {
        country: 'San Francisco',
        name: 'United States',
        firstTypologies: 'sport',
        secondTypologies: 'relax',
        priceOld: '',
        priceNew: 400
    },
    {
        country: 'Phuket',
        name: 'Thailandia',
        firstTypologies: 'relax',
        secondTypologies: 'cultural',
        priceOld: '',
        priceNew: 1200
    },
    {
        country: 'Amsterdam',
        name: 'Netherlands',
        firstTypologies: 'history',
        secondTypologies: 'sport',
        priceOld: '',
        priceNew: 1500
    },
    {
        country: 'Tuscany',
        name: 'Italy',
        firstTypologies: 'sport',
        secondTypologies: 'relax',
        priceOld: 950,
        priceNew: 700
    }
];



for(var i = 0; i < packageItems.length; i ++) {
    for(var j = 0; j < packageTypes.length ; j++) {
        if(packageItems[i].classList.contains(`package-item--${packageTypes[j]}`)) {
            makePackage(packageItems[i], packages[j]);
            break;
        }
    }
}

function makePackage(packageItem, packageType) {
    packageItem.innerHTML = `
    <div class="package-item__img">
    <div class="package-item__symbol-container">
        <a href="" class="package-item__symbol-link">
            <img alt="" class="package-item__symbol-img">
        </a>
    </div>
    </div>
    <div class="package-item__container">
    <div class="package-item__origin">
        <a href="" class="package-item__country">${packageType.country}</a>
        <div class="package-item__location">
             <img src="./assets/img/icon/icon_package_location.png" alt="" class="package-item__location-icon">
            <a href="" class="package-item__location-name">${packageType.name}</a>
        </div>
    </div>
    <div class="package-item__information">
         <div class="package-item__typologies">
            <a href="" class="package-item__typologies-name">${packageType.firstTypologies}</a>
            <a href="" class="package-item__typologies-name">
            ${packageType.secondTypologies}
                <span class="package-item__typologies-additional">+ 1</span>
            </a>
        </div>
        <div class="package-item__price">
            <a href="" class="package-item__price-link">
                <span class="package-item__price-old">${packageType.priceOld}</span>
                <span class="package-item__price-new">${packageType.priceNew} $</span>
            </a>
    
        </div>
    </div>
    <div class="package-item__description">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.
        </p>
    </div>
    <a href="" class="package-item__btn btn">details</a>
    </div>`
}


