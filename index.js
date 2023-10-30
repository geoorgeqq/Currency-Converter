let select = document.querySelectorAll(".currency");
input_currency = document.querySelector(".input_currency")
output_currency = document.querySelector(".output_currency")
let switchBtn = document.querySelector(".switchCurrency")

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
.then((data) => data.json())
.then((data) => {
    const entries = Object.entries(data);

     for(let i=0; i<entries.length; i++){
        select[0].innerHTML += `<option value= "${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += `<option value= "${entries[i][0]}">${entries[i][0]}</option>`
    }
});


switchBtn.addEventListener("click", () =>{
    let a;
    a =select[0].value;
    select[0].value = select[1].value;
    select[1].value= a;
    converter();
})


function converter(){
    var input_currency_val = input_currency.value;
    if(select[0].value !=select[1].value){

        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
        .then((val) => {
        output_currency.value = Object.values(val.rates)[0];
    });
}else{
    alert('Please select two different currencies!')
}
}







