function nav () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <nav>
        <ul>
            <li class="home">Home</li>
            <li class="menu">Menu</li>
            <li class="contact">Contact</li>
        </ul>
    </nav>
    `
    return element
}

export {nav};