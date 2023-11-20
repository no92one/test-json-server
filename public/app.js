import { getAllUsers, addUser, getOneUser, updateUser } from "./server-request.js"

const main = document.createElement("main")
const btn = document.createElement("button")
const btn2 = document.createElement("button")
const btn3 = document.createElement("button")

btn.innerText = "Log data!"
btn2.innerText = "Post data!"
btn3.innerText = "Put data!"

main.appendChild(btn)
main.appendChild(btn2)
main.appendChild(btn3)
document.body.appendChild(main)

btn.addEventListener("click", async function () {
  const allUsers = await getAllUsers()
  console.log(allUsers)
})



btn2.addEventListener("click", function () {
  console.log("post");
  addUser()
})



btn3.addEventListener("click", async function () {
  const user = await getOneUser(1)

  user.list.push({
    "opponent": 2,
    "rounds": 12,
    "result": "won",
  })

  console.log("after - ", user);

  updateUser(user)
})