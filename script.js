const container = document.querySelector('.container');
const height = 500;

for (let i = 0; i < 16; i++)
{
    const row = document.createElement('div');
    row.classList.add('row');
    
    let item_height = (height/16)-1-1/16;
    item_height = item_height.toFixed(2) +"px";
    
    for (let j = 0; j < 16; j++)
    {
        const item = document.createElement('item');
        item.classList.add('item');
        item.style.height = item_height;
        item.style.width = item_height;
        row.appendChild(item);
    }
    
    container.appendChild(row);
}

function addListeners()
{
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {item.addEventListener('mouseover', () => {item.classList.add('draw');});});
}

addListeners();

btn = document.querySelector('.sizeBtn');
btn.addEventListener('click', getInput);

let input;
function getInput()
{
    input = prompt("Enter grid size:");
    if (input > 100 || input <=0)
    {
        alert("Invalid range");
        getInput();
    }
    makeGrid(input);
}

function makeGrid(n)
{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < n; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        
        let item_height = (height/n)-1-1/n;
        item_height = item_height.toFixed(2) +"px";

        for (let j = 0; j < n; j++)
        {
            const item = document.createElement('item');
            item.classList.add('item');
            item.style.height = item_height;
            item.style.width = item_height;
            row.appendChild(item);
        }
        
        container.appendChild(row);
    }
    addListeners();
}

