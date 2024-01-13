<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', e => {
    let searchBar = document.getElementById('search')
    searchBar.addEventListener('focus', e => {
        document.getElementById('search-btns').classList.remove('d-none')
    })

    document.addEventListener("click", (evt) => {
        if (document.activeElement.id !== 'search') {
            const searchElement = document.getElementById("search-form");
            let targetElement = evt.target; // clicked element

            do {
                if (targetElement == searchElement) {
                    // This is a click inside. Do nothing, just return.
                    console.log("Clicked inside!")
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);

            // This is a click outside.
            document.getElementById('search-btns').classList.add('d-none')
        }
    });
=======
window.addEventListener('DOMContentLoaded', e => {
    let searchBar = document.getElementById('search')
    searchBar.addEventListener('focus', e => {
        document.getElementById('search-btns').classList.remove('d-none')
    })

    document.addEventListener("click", (evt) => {
        if (document.activeElement.id !== 'search') {
            const searchElement = document.getElementById("search-form");
            let targetElement = evt.target; // clicked element

            do {
                if (targetElement == searchElement) {
                    // This is a click inside. Do nothing, just return.
                    console.log("Clicked inside!")
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);

            // This is a click outside.
            document.getElementById('search-btns').classList.add('d-none')
        }
    });
>>>>>>> d3301e023643c436dffadd75c29a502468ba92d3
})