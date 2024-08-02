function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const form = document.getElementById('form')


  const btn = document.getElementById('btn')
  btn.addEventListener('click', function (event) {
    console.log(name.value)
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)

    location.reload
  })

  function openForm1() {
    document.getElementById("myForm1").style.display = "block";
  }

  function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
  }

  const email1 = document.getElementById('email1')
  const password1 = document.getElementById('password1')
  const form1 = document.getElementById('form1')
  const btn1 = document.getElementById('btn1')
  btn1.addEventListener('click', function (event) {
    console.log(email1.value)
    localStorage.setItem('email1', email1.value)
    localStorage.setItem('password1', password1.value)

    location.reload
  })
