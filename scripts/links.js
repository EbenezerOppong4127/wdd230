const baseURL = 'https://ebenezeroppong4127.github.io/wdd230'; // Replace with your GitHub Pages URL
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const container = document.getElementById('activity-links');
    container.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        container.appendChild(weekTitle);

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        container.appendChild(linksList);
    });
}

getLinks();
