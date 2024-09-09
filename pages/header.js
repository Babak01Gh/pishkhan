const header = `
<header class="main-head">
            <div class="headNav">
                <a href="." class="logoContainer">
                <img src="assets/images/mainLogo.PNG" alt="logo" class="logo">
            </a>
            <ul class="navList" dir="rtl">
                <li>
                    <i class="fa-solid fa-house"></i>
                    <a href=".">سیگرویام</a>
                </li>
                <li>
                    <i class="fa-brands fa-creative-commons-by"></i>
                    <a href="#ourWorks">خدمات ما</a>
                </li>
                <li>
                    <i class="fa-solid fa-tags"></i>
                    <a href="./marketing.html" target="_blank">کسب و کار اینترنتی</a>
                </li>
                <li> 
                    <i class="fa-regular fa-address-card"></i>
                    <a href="#about-post">درباره ما</a>
                </li>
                <li>
                    <i class="fa-solid fa-phone-volume"></i>
                    <a href="#footer">تماس با ما</a>
                </li>
                <li id="closeButton">
                    <i class="fa-solid fa-arrow-right"></i>
                    <span>بستن پنجره</span>
                </li>
            </ul>
            <div class="hamMenu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            </div>
            <section class="banner" dir="rtl">
                <img src="assets/images/banner.jpg" alt="banner" width="100%" height="100%">
                <div class="banner--titles">
                    <span>ارائه دهنده انواع خدمات</span>
                    <h1><strong>دفتر پیشخوان خدمات دولت و بخش عمومی</strong></h1>
                    <p>پیشخوان همه موارد , <strong><a href="#postexSection">پستکس</a></strong> , <strong><a href="#rahvarSection">ره&nbsp;وار</a></strong> , <strong><a href="#iranishSection">ایرانیش</a></strong> , <strong><a href="#digikalaSection">انبارداری دیجیکالا</a></strong>
                    , <strong><a href="#mooyragSection">کارگزاری مویرگ خاورمیانه</a></strong> بر خط (بازاریابی انواع بیمه تمام 
                    شرکت های بیمه ای عضو سیستم مویرگ) و کلیه خدمات جامع اینترنتی
                    </p>
                </div>
            </section>
        </header>`

const addEventHeader = () =>{
    const hamMenu = document.querySelector('.hamMenu');
    const navList = document.querySelector('.navList');
    const AllLi = document.querySelectorAll('ul.navList li');
    hamMenu.addEventListener('click',()=>{
        hamMenu.classList.toggle('activeMenu');
        navList.classList.toggle('activeNav');
    })
    AllLi.forEach(li=>{
    li.addEventListener('click',()=>{
        if(navList.classList.contains('activeNav')){
            navList.classList.toggle('activeNav');
            hamMenu.classList.toggle('activeMenu');
        }
    })
    li.addEventListener('mouseover' , () =>{
        li.childNodes[1].classList.add('fa-beat-fade')
    })
    li.addEventListener('mouseout' , () =>{
        li.childNodes[1].classList.remove('fa-beat-fade')
    })
})
}
export {header,addEventHeader}