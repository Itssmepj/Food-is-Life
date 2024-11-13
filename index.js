// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.our-menu-item');

    // Function to update active button styling
    const updateActiveButton = (activeButton) => {
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    };

    // Click event for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Filter menu items based on the category
            menuItems.forEach(item => {
                if (item.getAttribute('data-category') === category || category === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update the active button styling
            updateActiveButton(button);
        });
    });

    // Set the "Breakfast" filter as active by default
    const defaultButton = document.querySelector('.filter-btn[data-category="morning"]');
    if (defaultButton) {
        updateActiveButton(defaultButton);
        defaultButton.click();
    }
});
