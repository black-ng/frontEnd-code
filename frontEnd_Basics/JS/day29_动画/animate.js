const annimor = (obj,offset,speed,callback) => {
  clearInterval(obj.timer)
  obj.timer = setInterval(() => {

    if (obj.offsetLeft === offset){
      clearInterval(obj.timer)
      // 判断是否有传入callback
      callback && callback()

    }
    // 改变速度成匀速 (目标位置 - 现在位置 / 10)
    // 修复向左，向右移动，负数问题
    let step = (offset - obj.offsetLeft ) / 10
    step = step >= 0 ? Math.ceil(step) : Math.floor(step)

    console.log(step)
    console.log('现在的位置:'+obj.offsetLeft)

    obj.style.left = obj.offsetLeft + step + 'px'
  },speed)
}