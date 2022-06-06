let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
fetch(url)
    .then((res) => {
        res.json().then((res) => {
            for(let i=0;i<res.length;i++){
                console.log(res[i])
                append(res[i].vouchers)
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
    let append = (buy) => {
        buy.forEach(function(elem){
            let div = document.createElement("div")
            div.setAttribute("class", "voucher")

            let img = document.createElement("img")
            img.src =elem.image

            let name = document.createElement("h3")
            name.innerText=elem.name

            let p = document.createElement("p")
            p.innerText=elem.price

            let button = document.createElement("button")
            button.innerText = "Buy"

            button.setAttribute("click", "onclick")


            div.append(img, name, p, button)

            document.getElementById("voucher_list").append(div)
        })
    }
