// Animations
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(50px)';
        feature.style.transition = `opacity 0.5s ease ${index / 5}s, transform 0.5s ease ${index / 5}s`;
    });

    const cta = document.querySelector('#cta');

    cta.style.opacity = '0';
    cta.style.transform = 'translateY(50px)';
    cta.style.transition = 'opacity 0.5s ease 1s, transform 0.5s ease 1s';

    setTimeout(() => {
        features.forEach(feature => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        });

        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
    }, 500);
});
