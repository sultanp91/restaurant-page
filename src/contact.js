function contactPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <main>

    <div class="contactpage">

        <h2>Contact Us</h2>

        <p>Phone No: <a href="tel:07912345678">07912345678</a><p/>

        <p>Email: <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a></p>

        <p>Address:<br>
            34 Lorem St,<br>
            Ipsum,<br>
            London,<br>
            E1 1AA
        <p/>

    </div>

    </main>
    `
    return element
}

export {contactPage};