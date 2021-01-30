window.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = "header-container";
    let h1 = document.createElement('h1');
    let t = document.createTextNode("This is an h1")
    h1.appendChild(t);
    div.appendChild(h1);
    document.body.appendChild(div);
    let h2 = document.createElement('h2');
    let h2txt = document.createTextNode('This is an h2');
    h2.appendChild(h2txt);
    div.appendChild(h2);
    let h3 = document.createElement('h3');
    let h3txt = document.createTextNode('This is an h3');
    h3.appendChild(h3txt);
    div.appendChild(h3);
    let h4 = document.createElement('h4');
    let h4txt = document.createTextNode('This is an h4');
    h4.appendChild(h4txt);
    div.appendChild(h4);
    let h5 = document.createElement('h5');
    let h5txt = document.createTextNode('This is an h5');
    h5.appendChild(h5txt);
    div.appendChild(h5);
    let h6 = document.createElement('h6');
    let h6txt = document.createTextNode('This is an h6');
    h6.appendChild(h6txt);
    div.appendChild(h6);
    h1.className = "h1";
    h2.className = "h2";
    h3.className = "h3";
    h4.className = "h4";
    h5.className = "h5";
    h6.className = "h6";
    let colors = ['blue', 'black', 'pink', 'red', 'orange', 'green', 'yellow', 'purple']
    h1.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h1.style.color = colors[randomnumber]
    });
    h2.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h2.style.color = colors[randomnumber]
    });
    h3.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h3.style.color = colors[randomnumber]
    });
    h4.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h4.style.color = colors[randomnumber]
    });
    h5.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h5.style.color = colors[randomnumber]
    });
    h6.addEventListener('dblclick', function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
        h6.style.color = colors[randomnumber]
    });
    let liDiv = document.createElement('div');
    let ul = document.createElement('ul');
    liDiv.appendChild(ul);
    document.body.appendChild(liDiv);
    let counter = 0;
    let button = document.querySelector('button.btnnewliitem');
    button.addEventListener('click', function () {
        counter++;
        let li = document.createElement('li');
        let litxt = document.createTextNode('This is list item ' + counter);
        li.appendChild(litxt);
        ul.appendChild(li);
        li.addEventListener('click', function () {
            let randomnumber = Math.floor(Math.random() * colors.length)
            li.style.color = colors[randomnumber]
        })
        li.addEventListener('dblclick', function (){
            this.remove();
        })
    })
});
