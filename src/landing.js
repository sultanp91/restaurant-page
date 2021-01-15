function landingPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <main id="main">
    <div class=landing>
        <h2>BurgerStack</h2>
        <h3>The best burgers in town</h3>
    </div>
    </main>
    `
    return element
}

export {landingPage};