//json

var products = [];


//Register Function
function Register() {

    //Obtain the data
    var name = document.getElementById("name").value;
    var brand = document.getElementById("brand").value;
    var value = document.getElementById("value").value;

    //Register with json
    products.push
    ({
        "name": name,
        "brand": brand,
        "value": value,

    })

    //clean fields
    clean();

    //List the products

}