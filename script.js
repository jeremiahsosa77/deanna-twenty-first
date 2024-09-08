
const photos = 
[
    'assets/IMG_0299.png', 'assets/IMG_0344.png', 'assets/IMG_0743.png', 'assets/IMG_1130.png',
    'assets/IMG_1715.png', 'assets/IMG_1729.png', 'assets/IMG_1762.png', 'assets/IMG_1834.png', 'assets/IMG_1950.png',
    'assets/IMG_2163.png', 'assets/IMG_2225.png', 'assets/IMG_2439.png', 'assets/IMG_2527.png', 'assets/IMG_2548.png', 
    'assets/IMG_2577.png', 'assets/IMG_2627.png', 'assets/IMG_2903.png', 'assets/IMG_2982.png', 'assets/IMG_2998.png', 
    'assets/IMG_3024.png', 'assets/IMG_5231.png', 'assets/IMG_5763.png', 'assets/IMG_7005.png', 'assets/IMG_7570.png', 
    'assets/IMG_7630.png'
];

const valentinePhotos = ['valentine.png', 'valentine2.png', 'valentine3.png', 'valentine4.png'];

function createFloatingPhoto(src) {
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.width = '150px';
    img.style.height = '150px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '50%';
    img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    
    const container = document.getElementById('floating-photos');
    container.appendChild(img);

    function movePhoto() {
        const maxX = window.innerWidth - 18.5;
        const maxY = window.innerHeight - 18.5;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        img.style.transition = 'all 5s ease-in-out';
        img.style.left = `${newX}px`;
        img.style.top = `${newY}px`;
        
        setTimeout(movePhoto, 4250);
    }
    
    movePhoto();
}

photos.forEach(createFloatingPhoto);



const floatKeyframes = `
@keyframes float {
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-100px); }
}`;

const style = document.createElement('style');
style.textContent = floatKeyframes;
document.head.appendChild(style);




// Add event listener to the button to navigate to the gallery page
document.querySelector('.present-button').addEventListener('click', function() {
    window.location.href = 'gallery.html'; // Adjust the path if needed
});
