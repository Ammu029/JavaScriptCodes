var selectedRow = null;
function onFormSubmit(){

}

//retrive data
function readFormData(){
    var formData= {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;

    return formData;
}

//insert record or create record
function insertNewRecord(){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
}