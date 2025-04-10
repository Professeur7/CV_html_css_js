document.getElementById('generate-pdf-btn').addEventListener('click', function() {
    const element = document.querySelector('.section');
    html2pdf().from(element).save('mon_cv.pdf');
});

    const educations = document.querySelectorAll('.education');
    const contact_i = document.querySelectorAll('.contact .info p i');
    const aubout_icon = document.querySelectorAll('.section .gridcv .professionabout .about .titres .icon');
    const exp_icon = document.querySelectorAll('.section .gridcv .professionabout .experience .titres .icon ');
    const comp_icon = document.querySelectorAll('.section .gridcv .professionabout .competence .titres .icon');
    const progressbar = document.querySelectorAll('.section .gridcv .professionabout .competence .ulgrid ul li .barre .progressbar');
    const profiles = document.querySelectorAll('.informationprofile .profile');

    document.getElementById("generate-color-btn").addEventListener("click", () => {
    // Changer le texte + couleur de fond pour chaque élément
    profiles.forEach((profile, index) => {
        
        profile.style.backgroundColor = "#a0d2eb";     // Changer la couleur de fond
    });

    // Modifier tous les .education
    educations.forEach((education, index) => {
    
        education.style.backgroundColor = "#a0d2eb"; // une couleur bleu clair
    });

    progressbar.forEach((education, index) => {
    
    education.style.backgroundColor = "#a0d2eb"; // une couleur bleu clair
    });


    comp_icon.forEach((education, index) => {
    
    education.style.backgroundColor = "#a0d2eb"; // une couleur bleu clair
    });
    exp_icon.forEach((education, index) => {
    
    education.style.backgroundColor = "#a0d2eb"; // une couleur bleu clair
    });
    aubout_icon.forEach((education, index) => {
    
    education.style.backgroundColor = "#a0d2eb"; // une couleur bleu clair
    });

    contact_i.forEach((education, index) => {
    
    education.style.color = "#a0d2eb"; // une couleur bleu clair
    });
    });