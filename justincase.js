document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json') // Replace 'data.json' with the actual path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const textArea = data.textArea;
            for (const key in textArea) {
                const element = document.querySelector(`[data-key="${key}"]`);
                if (element) {
                    element.textContent = textArea[key];
                }
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
