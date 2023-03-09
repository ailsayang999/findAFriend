let button = document.querySelector('#btn')
let peoplePic = document.querySelector('.card-img-top')
let personName = document.querySelector('#name')
let gender = document.querySelector('#gender')
let email = document.querySelector('#email')
let cell = document.querySelector('#cell')



button.addEventListener('click', function () {
  axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res.data.results)
      peoplePic.src = res.data.results[0].picture.large
      personName.innerHTML = res.data.results[0].name.first
      gender.innerHTML = res.data.results[0].gender
      email.innerHTML = res.data.results[0].email
      cell.innerHTML = res.data.results[0].cell
    })
    .catch(err => {
      console.log(err.response)
    })
})



