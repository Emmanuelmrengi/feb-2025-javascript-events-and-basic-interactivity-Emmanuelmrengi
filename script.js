// Button Click
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', function () {
    this.textContent = 'Clicked!';
    this.classList.add('clicked');
});

// Secret Double-Click Action
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', function () {
    alert('Secret double-click revealed!');
});

// Keypress Detection
document.addEventListener('keypress', function (event) {
    console.log('Key pressed:', event.key);
});

// Tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active-tab'));
    document.getElementById(tabId).classList.add('active-tab');
}

// Form Validation with Real-Time Feedback
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.value)) {
        emailFeedback.textContent = 'Please enter a valid email address.';
        this.classList.remove('valid');
    } else {
        emailFeedback.textContent = '';
        this.classList.add('valid');
    }
});

passwordInput.addEventListener('input', function () {
    if (this.value.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters.';
        this.classList.remove('valid');
    } else {
        passwordFeedback.textContent = '';
        this.classList.add('valid');
    }
});

const sampleForm = document.getElementById('sampleForm');
sampleForm.addEventListener('submit', function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
        alert('Please fill all required fields correctly.');
    }
});