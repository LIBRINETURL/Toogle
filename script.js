// script.js

// Function to save data to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from localStorage
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Function for real-time search
function realTimeSearch(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener('input', () => {
        const filter = input.value.toLowerCase();
        const items = list.getElementsByTagName('li');

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const txtValue = item.textContent || item.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Example usage of saving and retrieving data
saveToLocalStorage('exampleKey', { example: 'value' });
console.log(getFromLocalStorage('exampleKey'));

// Example usage of the search function
document.addEventListener('DOMContentLoaded', () => {
    realTimeSearch('searchInput', 'itemList');
});
