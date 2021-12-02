
// Фильтрация

const list = document.querySelector('.shop-nav'),
    items = document.querySelectorAll('.item');

function filter() {
    list.addEventListener('click', event => {
        const targetID = event.target.dataset.id;

        switch (targetID) {
            case 'all':
                getItems('item');
                break
            case 'analog':
                getItems(targetID);
                break
            case 'stock':
                getItems(targetID);
                break
            case 'best':
                getItems(targetID);
                break
            case 'clothing':
                getItems(targetID);
                break
            case 'obj':
                getItems(targetID);
                break
        }
    });
};
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

// Вывод текста input

document.querySelector('.btn-news').onclick = myClick;

function myClick() {
    const input = document.querySelector('.input').value;
    console.log(input)
};