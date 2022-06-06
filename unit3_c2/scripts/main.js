function box(){

    let arr= JSON.parse(localStorage.getItem("user")) || []
  
    function Arrdata(n,e,a,amt){
        this.name=n
        this.email=e
        this.address=a
        this.wallet=amt
    }

    let name = document.getElementById("name").value
    let email= document.getElementById("email").value
    let address = document.getElementById("address").value
    let amount = document.getElementById("amount").value
    
    let det = new Arrdata(name,email,address,amount)

    arr.push(det)

    localStorage.setItem("user", JSON.stringify(arr))
}