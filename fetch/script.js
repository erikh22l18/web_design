const submit_btn = document.querySelector('#submit_btn')

const table_body = document.querySelector('#table_body')

submit_btn.addEventListener('click', async () => {
  table_body.innerHTML = ''

  fetch('./data.json')
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        alert('HTTP error, status = ' + res.status)
        throw new Error('HTTP error, status = ' + res.status)
      } else {
        alert('HTTP ok, status = ' + res.status)
      }

      return res.text()
    })
    .then((data) => {
      const arr = Object.entries(JSON.parse(data))

      arr.forEach((item) => {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')

        td1.textContent = item[1].name
        td2.textContent = item[1].price
        // element whit image
        const img = document.createElement('img')
        img.src = item[1].image
        img.alt = item[1].name
        img.width = 140
        img.height = 100
        td3.appendChild(img)
        td4.textContent = item[1].description

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        table_body.appendChild(tr)
      })
    })
})
