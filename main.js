let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');
let projectsList = document.getElementById("projects-list");

let open = function () {
    codey.style.display = 'block';
    close.style.display = 'block';
    projectsList.style.display = 'block';
};

let hide = function () {
    codey.style.display = 'none';
    close.style.display = 'none';
    projectsList.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Extra
const textChange = () => {
    view.innerHTML = "Hello, My peeps!";
}

const textReturn = () => {
    view.innerHTML = "View again";
}

view.addEventListener("click", textChange);
close.addEventListener("click", textReturn);
