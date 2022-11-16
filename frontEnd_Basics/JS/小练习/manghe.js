
const result = (arr1,arr2) => {
  return  arr2.filter(items => {
    if (!arr1.includes(items)) return items;
  })
}



const jackpot = (config) => {
  const {outtoy,toys }=config
  let toylist=[]
  for (const outtoyElement in outtoy) {
    toylist=toys.filter(items=> {
      if (!outtoy[outtoyElement].includes(items)) return items;
    })
  console.log("\n<<---------------------------------\n" +
    "该盲盒可能是以下几种之一：\n",outtoyElement,toylist,'\n已排除的是：'+outtoy[outtoyElement]+
    "\n--------------------------------->>")
  }

}

const toys=["红Q","黑K","黑J","黑桃","红心","梅花","方块","大王","隐藏"]
const outtoy= {
  "top_1":["方块","大王"],
  "top_2":["红Q","梅花"],
  "top_3":["红心","方块"],
  "middle_1":["梅花","红Q"],
  "middle_2":["方块","梅花"],
  "middle_3":["黑J","红心"],
  "bottom_1":["方块","黑K"],
  "bottom_2":["黑K","大王"]
}

jackpot({
  outtoy:outtoy,
  toys:toys,
}
)



