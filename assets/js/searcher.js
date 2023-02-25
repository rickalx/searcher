let loadProducts = () => {
  try {

    fetch( URL_json )
    .then(response => response.json())
    .then(products => {
      /* Callback por éxito: Procese el result */
      
      //console.log( result );
      
      for( item of result ){
        let src = item.src
        let name = item.name
        let price = item.price
        let type = item.type
        plantilla +=
  
        `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>`
      }
    //console.log(plantilla)
    return plantilla

    })
    
    fetch( URL_xml )
    .then(response => response.text())
    .then(result => {
    
      let xml = (new DOMParser()).parseFromString(result, 'application/xml');
      let arrayProduct = xml.getElementsByTagName("product")

for (item of arrayProduct){
    let src = item.getElementsByTagName("src")
    console.log("src "+src[0])
        let name = item.getElementsByTagName("name")
        let price = item.getElementsByTagName("price")
        let type = item.getElementsByTagName("type")
        plantilla +=
  
        `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>`
}
    //console.log(plantilla)
    });

} catch (error) {

  /* Fallo: Procese el error */
  
  console.log( error );

}

}

let URL_json = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json"
let URL_xml = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml"
var plantilla = ""

loadProducts();
console.log("plantilla return: "+plantilla)
let plantillaProductos = document.getElementById("template_products");
plantillaProductos.innerHTML = plantilla
console.log("plantilla: "+plantilla)