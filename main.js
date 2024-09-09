import { header , addEventHeader} from './pages/header.js';
import seeAlso from './pages/seeAlso.js';
import swiperAdder from './pages/swiper.js';
import { works , worksEvents} from './pages/works.js';
import {allVideoController} from './pages/videoController.js';
import smoothScroll from './pages/scroll.js';
import aboutPost from './pages/about-post.js';
import callUs from './pages/call-us.js';
import footerContext from './pages/footer.js'
const mainBox = document.querySelector('main');
mainBox.innerHTML += header;
mainBox.innerHTML += seeAlso;
mainBox.innerHTML += works;
mainBox.innerHTML += aboutPost;
mainBox.innerHTML += callUs;
mainBox.innerHTML += footerContext;
addEventHeader()
swiperAdder()
worksEvents()
allVideoController()
smoothScroll()