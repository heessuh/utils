const timeCreated = new Date().toUTCString()

console.log(timeCreated)

/* const date = new Date(post.createDate)
const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` */

let month = new Date().getMonth()+1
let monthStr = month.toString()
let date = new Date().getDate()
let dateStr = date.toString()
let year = new Date().getFullYear()
let yearStr = year.toString()
let fullDate = monthStr.concat('/', dateStr, '/', yearStr)
/* const dateFormatted = date.getMonth() + 1/date.getDate()/date.getFullYear()
console.log(dateFormatted) */
console.log(fullDate)
