document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            
            // Check if the response was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create and append the user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error);
        }
    }

    // Invoke the async function
    fetchUserData();
});