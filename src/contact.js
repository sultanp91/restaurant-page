function contactPage () {
    let element = document.createElement("div");
    element.innerHTML = 
    `
    <main>

    <div class="contactpage">

        <h2>Contact Us</h2>

        <p>Phone No: 07912345678<p/>

        <p>Email: lorem@ipsum.com</p>

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