// Task 1

let products = [
    { name: "Laptop", price: 1200, category: "Electronics" },// T
    { name: "Phone", price: 800, category: "Electronics" },//T
    { name: "Desk Chair", price: 150, category: "Furniture" },//F
    { name: "Notebook", price: 5, category: "Stationery" },//F
    { name: "Headphones", price: 100, category: "Electronics" }//T
];


function getProductsByCategory(product_array, category_name) {
    return product_array.filter(product => product.category === category_name);
}

console.log(getProductsByCategory(products, "Electronics"));

// Task 2

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate),
        name: product.name.toUpperCase()
    }

    ))
}
console.log(applyDiscount(products, .1));

Task3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale)=>total+sale,0)
}

console.log(`Total Rev. 2024: $${calculateTotalRevenue(sales)}`)

// Task 4

let employee = { name: "John Doe", salary: 50000, position: "Manager" };

function updateSalary(employee, percentageIncrease) {
    return employee.salary += employee.salary * percentageIncrease;
}

console.log(updateSalary(employee, .1));