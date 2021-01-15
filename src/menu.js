function menuPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <main id="main">
    <div class="menucontent">
    <ul>
        <li>
            <h4>Smash Burger</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </li>
        <li>
            <h4>Cheeseburger</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </li>
        <li>
            <h4>Double Cheeseburger</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </li>
        <li>
            <h4>Fat Stack Burger</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </li>
    </ul>
</div>
    </main>
    `
    return element
}

export {menuPage};