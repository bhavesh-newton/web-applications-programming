// Main application file
const featureList = {
    features: ['Feature 1', 'Feature 2'],
    addFeature: function(feature) {
        this.features.push(feature);
        this.updateUI();
    },
    updateUI: function() {
        const ul = document.querySelector('.feature-list ul');
        ul.innerHTML = this.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    featureList.updateUI();
}); 