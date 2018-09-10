/**
 * ScrollPrevent - by zjhch123
 * https://github.com/zjhch123/ScrollPrevent
 * Issue: https://github.com/zjhch123/ScrollPrevent/issues
 */
const ua = navigator.userAgent;
const touchRegExp = new RegExp('(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)', 'i')
const isUnsupportBrowser = () => {
  return !!Event.prototype.preventDefault && !!Event.prototype.stopPropagation && !!Element.prototype.addEventListener;
};
const removeListener = (type, targetDOM, touchStart, touchMove, wheel) => {
  if (type == 0) {
    return () => {
      targetDOM.removeEventListener('touchstart', touchStart);
      targetDOM.removeEventListener('touchmove', touchMove);
    };
  } else {
    return () => {
      targetDOM.removeEventListener('mouseenter', touchStart);
      targetDOM.removeEventListener('mouseleave', touchMove);
      window.removeEventListener('wheel', wheel);
    }
  }
};

class ScrollPrevent {
  constructor() {
    this.isTouch = touchRegExp.test(ua);
    this.targetDOM = null;
  }

  init(targetDOM) {
    if (!targetDOM && !isUnsupportBrowser()) {
      console.error(new Error('Your browser is not support'));
      return;
    }
    this.targetDOM = targetDOM;
    if (this.isTouch) {
      return this.initMobile();
    } else {
      return this.initWeb();
    }
  }

  initMobile() {
    const targetDOM = this.targetDOM;
    let nowY = 0;
    const touchStart = (e) => {
      nowY = e.touches[0].pageY;
    };
    const touchMove = (e) => {
      let eventY = e.touches[0].pageY;
      if((eventY - nowY > 0 && this.targetDOM.scrollTop == 0) || (eventY - nowY < 0 && this.targetDOM.scrollTop == this.getMaxScroll(targetDOM))) {
        e.preventDefault();
      }
      nowY = eventY;
    };
    targetDOM.addEventListener("touchstart", touchStart);
    targetDOM.addEventListener("touchmove", touchMove);
    return removeListener(0, targetDOM, touchStart, touchMove);
  }

  initWeb() {
    const targetDOM = this.targetDOM;
    let listenStart = false;
    const mouseenter = () => {
      listenStart = true;
    };
    const mouseleave = () => {
      listenStart = false;
    };
    const wheel = (e) => {
      if (listenStart) {
        if (e.deltaY <= 0 && targetDOM.scrollTop == 0) {
          e.preventDefault();
        } else if (e.deltaY > 0 && targetDOM.scrollTop == this.getMaxScroll(targetDOM)) {
          e.preventDefault();
        }
      }
    };
    targetDOM.addEventListener('mouseenter', mouseenter);
    targetDOM.addEventListener('mouseleave', mouseleave);
    window.addEventListener('wheel', wheel);
    return removeListener(1, targetDOM, mouseenter, mouseleave, wheel);
  }

  getMaxScroll() {
    const targetDOM = this.targetDOM;
    return targetDOM.scrollHeight - targetDOM.clientHeight;
  }
}


export default new ScrollPrevent()
