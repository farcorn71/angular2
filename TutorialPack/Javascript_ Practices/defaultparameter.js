var getProductSellingPrice = function(costprice = 10, profit = 5){

    return costprice + profit;
}

console.log(getProductSellingPrice());

console.log(getProductSellingPrice(undefined, 2));