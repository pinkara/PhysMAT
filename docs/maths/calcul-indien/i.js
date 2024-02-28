function toggleStyles() {
    const body = document.body;
    const currentStyle = body.classList.contains('dark') ? 'dark' : 'light';
    const newStyle = currentStyle === 'dark' ? 'light' : 'dark';

    body.classList.remove(currentStyle);
    body.classList.add(newStyle);
}


function toggleStyles() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    // Vérifier si la classe 'dark' est présente sur le body
    const isDarkMode = body.classList.contains('dark');

    // Changer la classe du body en conséquence
    if (isDarkMode) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeIcon.classList.remove('fa-moon'); // icône pour le thème dark
        themeIcon.classList.add('fa-sun');    // icône pour le thème light
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeIcon.classList.remove('fa-sun');  // icône pour le thème light
        themeIcon.classList.add('fa-moon');    // icône pour le thème dark
    }
}
