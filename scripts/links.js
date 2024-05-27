const baseURL = 'https://ebenezeroppong4127.github.io/wdd230'; // Your GitHub Pages URL
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

function displayLinks(weeks) {
    const container = document.querySelector('.custom-list');
    if (!container) {
        console.error('No element with class "custom-list" found in the DOM');
        return;
    }
    container.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        listItem.textContent = `${week.week} : `;

        const spanList = document.createElement('span');
        week.links.forEach((link, index) => {
            const span = document.createElement('span');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}/${link.url}`;
            anchor.textContent = link.title;
            span.appendChild(anchor);
            spanList.appendChild(span);

            // Add separator if it's not the last link
            if (index < week.links.length - 1) {
                const separator = document.createTextNode(' | ');
                spanList.appendChild(separator);
            }
        });
        listItem.appendChild(spanList);

        container.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', getLinks);
