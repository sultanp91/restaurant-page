function landingPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <h1>BurgerShack</h1>
    <img src="../img/pexels-valeria-boltneva-1639565.jpg" alt="burger image">
    <p>BurgerShack, juiciest burgers you'll ever eat!</p>
    `
    return element
}

export {landingPage};