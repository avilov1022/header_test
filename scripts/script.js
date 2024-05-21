// Появление fixed header`а
let searchBarSlided = false;
window.addEventListener('scroll', ()=> {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var headerTop = document.querySelector('.header__top')
    var logo = document.querySelector('.header__bottom__logo')
    var sign = document.querySelector('.header__bottom__sign')
    var searchBar = document.querySelector('.header__bottom__searchbar') 
    var phoneNums = document.querySelector('.header__top__contacts').outerHTML
    var phoneNumsE = document.querySelector('.header__top__contacts')


    const searchElement = document.querySelector('.header__bottom__search'); //

    if (scrollPosition > 90) {
        header.classList.add('header__fixed');
        headerTop.style.display = 'none';
        logo.style.display = 'none';
        sign.style.display = 'block';

        searchBar.classList.add('search-slide-in')
        searchBar.classList.remove('search-slide-out')
        searchBarSlided = true;


        // if (!searchElement.contains(phoneNumsE) && !flag){
        //     try{
        //         searchElement.insertAdjacentHTML('afterbegin', phoneNums)
        //         flag = true;
        //     }
        //     catch (ex){
        //         console.log(ex)
        //     }
        // }

    }else{
        header.classList.remove('header__fixed');
        headerTop.style.display = 'flex';
        logo.style.display = 'block';
        sign.style.display = 'none';

        if(searchBarSlided){
            searchBar.classList.remove('search-slide-in')
            searchBar.classList.add('search-slide-out')
        }

        document.querySelector('.header__top').appendChild(phoneNumsE)

        // if (searchElement.contains(phoneNumsE)) {
        //     searchElement.removeChild(phoneNumsE);
        //     flag = false;
        // }
    }
});
//


document.querySelector('.header__basket__btn').addEventListener('mouseover', ()=>{
    var counter = document.querySelector('.header__basket__counter');

    counter.style.backgroundColor = 'white'
})


document.querySelector('.header__basket__btn').addEventListener('mouseout', ()=>{
    var counter = document.querySelector('.header__basket__counter');

    counter.style.backgroundColor = '#ffc801'
})