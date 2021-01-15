function landingPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <main id="main">
        <h2>BurgerShtack</h2>
        <h3>The best burgers in town</h3>
    </main>
    `
    return element
}

export {landingPage};