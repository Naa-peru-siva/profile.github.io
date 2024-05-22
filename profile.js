/* script.js */
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Show the first section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('section1');
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Reset all items to black
            navItems.forEach(nav => nav.style.backgroundColor = 'black');
            navItems.forEach(nav => nav.style.color = 'white');

            // Set clicked item to white
            item.style.backgroundColor = 'white';
            item.style.color = 'black';
        });
    });
});

