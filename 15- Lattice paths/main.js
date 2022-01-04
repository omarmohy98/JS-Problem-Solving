// Problem 15 (Lattice paths)
function getPossiableRoutes(size) {
    let route = 1;
    for (let i = 1; i <= size; i++) {
        route = (route * (size + i)) / i;
    }
    return route;
}
console.log(getPossiableRoutes(20));
