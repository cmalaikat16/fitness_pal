// DOM Elements
const welcomePage = document.getElementById('welcome-page');
const authPage = document.getElementById('auth-page');
const workoutSelectionPage = document.getElementById('workout-selection-page');
const workoutDetailsPage = document.getElementById('workout-details-page');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');

// Event Listeners
document.getElementById('get-started-btn').addEventListener('click', showAuthPage);
document.getElementById('show-signup').addEventListener('click', showSignupForm);
document.getElementById('show-login').addEventListener('click', showLoginForm);
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('signup-btn').addEventListener('click', signup);
document.getElementById('back-btn').addEventListener('click', goBack);

// Workout cards
document.querySelectorAll('.workout-card').forEach(card => {
    card.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        showWorkoutDetails(target);
    });
});

// Show Auth Page
function showAuthPage() {
    welcomePage.classList.add('hidden');
    authPage.classList.remove('hidden');
    showLoginForm();
}

// Toggle between login and signup forms
function showLoginForm() {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

function showSignupForm() {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showNotification('Please enter both username and password');
        return;
    }
    
    showNotification('Login successful!');
    showWorkoutSelection();
}

// Signup function
function signup() {
    const username = document.getElementById('new-username').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (!username || !phone || !password || !confirmPassword) {
        showNotification('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match');
        return;
    }
    
    showNotification('Account created successfully!');
    showWorkoutSelection();
}

// Show workout selection
function showWorkoutSelection() {
    authPage.classList.add('hidden');
    workoutSelectionPage.classList.remove('hidden');
}

// Show workout details
function showWorkoutDetails(target) {
    workoutSelectionPage.classList.add('hidden');
    workoutDetailsPage.classList.remove('hidden');
    
    document.getElementById('workout-category-title').textContent = 
        `${target.charAt(0).toUpperCase() + target.slice(1)} Exercises`;
    
    const exercises = sampleWorkouts[target] || [];
    const exercisesContainer = document.getElementById('workout-exercises');
    
    exercisesContainer.innerHTML = '';
    
    if (exercises.length === 0) {
        exercisesContainer.innerHTML = '<p>No exercises found for this category.</p>';
        return;
    }
    
    exercises.forEach(exercise => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'exercise-card';
        
        // Create image container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'exercise-img-container';
        imgContainer.innerHTML = exercise.svg; // Use the embedded SVG
        
        // Create exercise content
        const content = document.createElement('div');
        content.className = 'exercise-content';
        content.innerHTML = `
            <h3 class="exercise-name">${exercise.name}</h3>
            <div class="exercise-detail">
                <span class="detail-label">Equipment:</span>
                <span class="detail-value">${exercise.equipment}</span>
            </div>
            <div class="exercise-detail">
                <span class="detail-label">Body Part:</span>
                <span class="detail-value">${exercise.bodyPart}</span>
            </div>
            <div class="exercise-detail">
                <span class="detail-label">Target:</span>
                <span class="detail-value">${exercise.target}</span>
            </div>
        `;
        
        // Assemble the card
        exerciseCard.appendChild(imgContainer);
        exerciseCard.appendChild(content);
        exercisesContainer.appendChild(exerciseCard);
    });
}

// Go back to previous page
function goBack() {
    workoutDetailsPage.classList.add('hidden');
    workoutSelectionPage.classList.remove('hidden');
}

// Show notification
function showNotification(message) {
    notificationMessage.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize
function init() {
    welcomePage.classList.remove('hidden');
    authPage.classList.add('hidden');
    workoutSelectionPage.classList.add('hidden');
    workoutDetailsPage.classList.add('hidden');
}

init();