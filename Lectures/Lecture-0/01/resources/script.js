document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buggy-button');
    const response = document.getElementById('response');

    button.addEventListener('click', () => {
        respone.textContent = 'Button Clicked!';

        // example of a fetch request

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
            });
    });
});
