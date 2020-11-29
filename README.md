# Navbar
 Navbar **Active/Deactive** class using Vanilla JavaScript
***
#### HTML
***
```html
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item active">Home</li>
            <li class="nav-item">About</li>
            <li class="nav-item">Portfolio</li>
            <li class="nav-item">Services</li>
            <li class="nav-item">Contact</li>
        </ul>
    </nav>
```
#### CSS
***
```css
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navbar {
        padding: 15px 0;
        background: #123;
        color: #fff;
    }

    .nav-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nav-list li {
        border-radius: 20px;
        padding: 8px 20px;
        background-color: cadetblue;
        cursor: pointer;
        transition: all .3s ease;
    }

    .nav-list li:hover {
        background-color: crimson;
    }

    .nav-item.active {
        background-color: crimson;
    }
```
#### JavaScript
***
```javascript
    const ul = document.querySelector('.nav-list');
    const li = Array.from(ul.children)

    ul.addEventListener("click", (e) => {
        const targetLi = e.target.closest('li');

        // Code stops if it is not a li item
        if (!targetLi) return

        const activeLi = document.querySelector(".active")
        // const targetIndex = li.findIndex(dot => dot === targetLi);

        activeLi.classList.remove('active');
        targetLi.classList.add('active');
        console.log('Previous Active Li:', activeLi)
        console.log('Now Target Li:', targetLi)
    })
```