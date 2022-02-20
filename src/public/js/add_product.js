console.log("Hello From Add Product JS");

const inputsHandler = function () {
  const additionInputsDiv = document.getElementById("additionInputs");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = `<div class="col">
<div class="mb-3">
  <label for="productName" class="form-label font">Product Name</label>
  <input
    type="text"
    class="form-control"
    id="productName"
    placeholder="Product Name"
  />
</div>
</div>
<div class="col">
<div class="mb-3">
  <label for="originalPrice" class="form-label font">Original Price</label>
  <input
    type="text"
    class="form-control"
    id="originalPrice"
    placeholder="Original Price"
  />
</div>
</div>
<div class="col">
<div class="mb-3">
  <label for="sellPrice" class="form-label font">Sell Price</label>
  <input
    type="text"
    class="form-control"
    id="sellPrice"
    placeholder="Sell Price"
  />
</div>
</div>
`;

  newDiv.setAttribute("class", "row row-cols-3");
  additionInputsDiv.appendChild(newDiv);
};
