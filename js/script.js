let btn = document.querySelector('.btn_save');
let field = document.getElementsByTagName('input');
let product, index;

function cadProduct(nameProduct, valueProduct) {
  product = document.getElementById('tb_product').getElementsByTagName('tbody')[0];

  let qtyLine = product.rows.length;
  let line = product.insertRow(qtyLine);

  let cellOrder = line.insertCell(0);
  let cellCode = line.insertCell(1);
  let cellName = line.insertCell(2);
  let cellValue = line.insertCell(3);

  const numberRandom = Math.floor(Math.random() * 900000) + 100000;

  cellOrder.innerHTML = qtyLine;
  cellCode.innerHTML = numberRandom;
  cellName.innerHTML = nameProduct;
  cellValue.innerHTML = 'R$ ' + valueProduct;
}

btn.addEventListener('click', function(e) {
  e.preventDefault();
  if (textNameProduct.value == '' || textValueProduct.value == '') {
    let message = document.querySelector('.message');
    message.innerHTML = 'Ops! Os campos são obrigatórios.';

    setTimeout(function() {
      message.innerHTML = "";
    }, 2000);
  } else {
    cadProduct(textNameProduct.value, textValueProduct.value);

    textNameProduct.value = '';
    textValueProduct.value = '';
  }
});