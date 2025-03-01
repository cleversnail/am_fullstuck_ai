function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work = null

  switch(career) {
    case 'coder':
      work = ['写代码', '改bug', '摸鱼']
      break;
    case 'product':
      work = ['做需求', '定会议室', '催更']
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break;
    // ...
  }

  return new User(name, age, career, work)
}


// Factory(xxxxx)  * 500