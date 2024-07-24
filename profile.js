document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling function
    const smoothScroll = (e) => {
        if (e.target.tagName === 'A' && e.target.href.includes('#')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (href.startsWith('#')) {
                const scrollToElement = document.querySelector(href);
                scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // Attach the smooth scroll function to navbar link clicks
    document.querySelector('.navbar').addEventListener('click', smoothScroll);

    // Function to fetch user details and update the navbar
    function fetchUserDetails() {
        // Simulated user details (replace with actual data retrieval logic)
        const userDetails = {
            username: 'JohnDoe',
            followers: 100,
            stars: 4.5
        };

        // Update navbar with user details
        document.querySelector('.navbar .username').textContent = userDetails.username;
        document.querySelector('.navbar .followers').textContent = `Followers: ${userDetails.followers}`;
        document.querySelector('.navbar .stars').textContent = `Stars: ${userDetails.stars}`;
    }

    // Function to fetch requested items and update the requested items section
    function fetchRequestedItems() {
        // Simulated requested items (replace with actual data retrieval logic)
        const requestedItems = [
            { name: 'Item 1', status: 'pending' },
            { name: 'Item 2', status: 'closed' }
        ];

        const requestedItemsList = document.querySelector('.requested-items');

        // Clear existing items
        requestedItemsList.innerHTML = '';

        // Add requested items to the list
        requestedItems.forEach(item => {
            const listItem = document.createElement('div');
            listItem.classList.add('item');
            listItem.innerHTML = `<span class="item-name">${item.name}</span><span class="status ${item.status}">${item.status}</span>`;
            requestedItemsList.appendChild(listItem);
        });
    }

    // Function to fetch previously purchased items and update the purchased items section
    function fetchPurchasedItems() {
        // Simulated purchased items (replace with actual data retrieval logic)
        const purchasedItems = ['Item 1', 'Item 2'];

        const purchasedItemsList = document.querySelector('.purchased-items');

        // Clear existing items
        purchasedItemsList.innerHTML = '';

        // Add purchased items to the list
        purchasedItems.forEach(item => {
            const listItem = document.createElement('div');
            listItem.classList.add('item');
            listItem.textContent = item;
            purchasedItemsList.appendChild(listItem);
        });
    }

    // Fetch user details, requested items, and purchased items when the page loads
    fetchUserDetails();
    fetchRequestedItems();
    fetchPurchasedItems();
});
