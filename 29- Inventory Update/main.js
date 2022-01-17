// Problem 29 (Inventory Update)
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];
function updateInventory(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        // Update Exists Data
        arr1.forEach((ele) => {
            if (ele[1] === arr2[i][1]) {
                ele[0] += arr2[i][0];
            }
        });
        // Add New Data
        let check = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                check = true;
                break;
            }
        }
        if (check === false) arr1.push(arr2[i]);
    }
    // Sort the Data alphabetical
    let newArr = [];
    let sortItem = [];
    arr1.forEach((ele) => {
        newArr.push(ele[1]);
    });
    newArr.sort();
    newArr.forEach((sortEle) => {
        arr1.forEach((ele) => {
            if (ele[1] === sortEle) {
                sortItem.push(ele);
            }
        });
    });
    return sortItem;
}
console.log(updateInventory(curInv, newInv));
