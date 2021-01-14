function landingPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
        <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
    
    <main>
        <h2>BurgerShack</h2>
        <h3>The best burgers in town</h3>
    </main>
    `
    return element
}

export {landingPage};