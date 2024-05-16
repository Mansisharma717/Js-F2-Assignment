const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "250 GB"
};

console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
    console.log(`${keys} :${productDetails[keys]}`);
}