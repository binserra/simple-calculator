let value1 = Number(prompt("Enter First Value"));
let value2 = Number(prompt("Enter Second Value"));

function calculator(){
    

    let sum,sub,mul,div;
    sum = value1+value2;
    sub = value1-value2;
    mul = value1*value2;
    div = value1/value2;

    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);


    document.getElementById("results").innerHTML=`
    <p class="results"> ${value1} + ${value2} = ${sum}</p>
    <p class="results"> ${value1} - ${value2} = ${sub}</p>
    <p class="results"> ${value1} * ${value2} = ${mul}</p>
    <p class="results"> ${value1} / ${value2} = ${div}</p>
    `;
}
