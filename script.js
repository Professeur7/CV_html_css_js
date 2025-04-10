// function download (){
//     const telecharge = document.getElementById('m');
//     const fichier = {
//         margin: [5, 5, 5, 5],
//         filename: 'CV_Hamidou_DJIRE.pdf',
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 ,
//             useCORS: true,
//             logging: true,
//         },
//         jsPDF: { 
//             unit: 'mm',
//             format: 'a4',
//             orientation: 'portrait',
//         }

//     };
//     html2pdf().set(fichier).from(telecharge).save();

// }
// function download() {
//     const element = document.getElementById('mon_cv');
    
//     if (!element) {
//         alert('Élément introuvable avec l’ID "mon_cv"');
//         return;
//     }

//     const options = {
//         margin: [5, 5, 5, 5],
//         filename: 'CV_Hamidou_DJIRE.pdf',
//         image: { 
//             type: 'jpeg', 
//             quality: 0.98 
//         },
//         html2canvas: { 
//             scale: 2,
//             useCORS: true,
//             logging: true,
//             allowTaint: false, // Mieux de laisser false sauf besoin spécifique
//             scrollX: 0,                   // Mettez à 0 pour éviter des décalages
//     scrollY: 0,                   // Idem
//     windowHeight: document.documentElement.scrollHeight, // Capture toute la hauteur
//     width: document.documentElement.scrollWidth,         // Capture toute la largeur
//     x: 0,                         // Point de départ en X
//     y: 0    
//         },
//         jsPDF: { 
//             unit: 'mm',
//             format: 'a4',
//             orientation: 'portrait'
//         }
//     };

//     html2pdf()
//         .set(options)
//         .from(element)
//         .save()
//         .then(() => {
//             console.log('PDF généré avec succès');
//         })
//         .catch((error) => {
//             console.error('Erreur lors de la génération du PDF:', error);
//             alert('Une erreur est survenue lors de la génération du PDF');
//         });
// }
// document.getElementById('download').addEventListener('click', download);


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