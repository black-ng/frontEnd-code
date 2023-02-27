/*
01  返回对象
*/
{
  let obj1=(id, name)=>({id:id,name:name})
  console.log(obj1(18,'测试'),typeof(obj1))

  console.log(Math.floor(Math.random()*10))
}

/*
  02  圆周率和三角函数
  二维射击游戏，让抢手射击敌人
 */
{
//抢手
  let a = [100, 100]
//敌人
  let b = [200, 200]

//求直边距离
  let x = Math.abs(a[0] - b[0])
  let y = Math.abs(a[1] - b[0])
//求斜边
  let z = Math.sqrt(x * x + y * y)
//计算射击角度
  let angle = Math.asin(y / z) / Math.PI * 180
  console.log(Math.round(angle))
}

/*
  03  冥和开跟
 */
{
//计算冥
  console.log(Math.pow(10, 2)) // 100
//计算开跟
  console.log(Math.sqrt(100))   //10
}

/*
  04  Map & Set
 */
{
// 普通字符串作为key值
  let strMap = new Map()
  strMap.set('str', 'key是String类型的值')
  let str = strMap.get('str')
  console.log(str)

// 对象作为key值
  let objMap = new Map()
  let keyObj = {}
  objMap.set(keyObj, '和键 keyObj 关联的值')
  let obj = objMap.get(keyObj)
  console.log(obj)

  objMap.size // 1

//  Set作用
//  数组去重
  let Myset = new Set([1, 2, 3, 4, 4])
  console.log([...Myset])
//  并集
  let na = new Set([1, 2, 3])
  let nb = new Set([1, 3, 4])
  console.log([...na, ...nb])
//  交集
  let interset = new Set([...na].filter(x => nb.has(x)))
  console.log([...interset])
//  差集
  let NoInterset = new Set([...nb].filter(x => !na.has(x)))
  console.log([...NoInterset])
}

/*
  05 面向对象
 */
{

}