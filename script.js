// Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Welcome popup functionality
    window.onload = function () {
      setTimeout(function () {
        document.getElementById("welcomeOverlay").classList.add("active");
      }, 1000);
    };

   // School subjects for age < 18
        const schoolSubjects = [
            'Mathematics',
            'Science',
            'English',
            'History',
            'Geography',
            'Physics',
            'Chemistry',
            'Biology',
            'Computer Science',
            'Art',
            'Music',
            'Physical Education'
        ];

        // College subjects for age >= 18
        const collegeSubjects = [
            'Computer Science',
            'Business Administration',
            'Engineering',
            'Medicine',
            'Law',
            'Economics',
            'Psychology',
            'Marketing',
            'Finance',
            'Literature',
            'Political Science',
            'Sociology',
            'Architecture',
            'Design',
            'Data Science'
        ];

        // Countdown and auto-show popup after 2 seconds
        let countdown = 2;
        const countdownElement = document.getElementById('countdown');
        const countdownDisplay = document.getElementById('countdownDisplay');
        const countdownTimer = document.getElementById('countdownTimer');

        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            countdownTimer.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                document.getElementById('formOverlay').style.display = 'flex';
                countdownDisplay.style.display = 'none';
            }
        }, 3000);

        // Age change handler
        document.getElementById('age').addEventListener('input', function() {
            const age = parseInt(this.value);
            const subjectGroup = document.getElementById('subjectGroup');
            const subjectSelect = document.getElementById('subject');
            const subjectLabel = document.getElementById('subjectLabel');
            const ageInfo = document.getElementById('ageInfo');
            
            if (age && age >= 5 && age <= 100) {
                subjectGroup.style.display = 'block';
                subjectSelect.innerHTML = '<option value="">Select a subject</option>';
                
                if (age < 18) {
                  alert("You must be 18 or above");
                  this.value = "";
                    subjectLabel.textContent = 'School Subject';
                    ageInfo.textContent = 'School subjects available for students under 18';
                    schoolSubjects.forEach(subject => {
                        const option = document.createElement('option');
                        option.value = subject.toLowerCase().replace(/\s+/g, '-');
                        option.textContent = subject;
                        subjectSelect.appendChild(option);
                        return;
                    });
                } else {
                    subjectLabel.textContent = 'College Subject';
                    ageInfo.textContent = 'College subjects available for students 18 and above';
                    collegeSubjects.forEach(subject => {
                        const option = document.createElement('option');
                        option.value = subject.toLowerCase().replace(/\s+/g, '-');
                        option.textContent = subject;
                        subjectSelect.appendChild(option);
                    });
                }
            } else {
                subjectGroup.style.display = 'none';
                ageInfo.textContent = 'Enter your age to see relevant subject options';
            }
        });

        // Close popup functionality
        document.getElementById('formCloseBtn').addEventListener('click', function() {
            document.getElementById('formOverlay').style.display = 'none';
        });

        // Close popup when clicking outside
        document.getElementById('formOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });

        // Form submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add Bootstrap validation
            this.classList.add('was-validated');
            
            if (this.checkValidity()) {
                const submitBtn = this.querySelector('.submit-btn');
                const buttonText = submitBtn.querySelector('.button-text');
                const loadingSpinner = submitBtn.querySelector('.loading-spinner');
                
                // Show loading state
                buttonText.style.display = 'none';
                loadingSpinner.style.display = 'inline';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // Hide form and show success message
                    this.style.display = 'none';
                    document.getElementById('successMessage').style.display = 'block';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        this.reset();
                        this.classList.remove('was-validated');
                        this.style.display = 'block';
                        document.getElementById('successMessage').style.display = 'none';
                        document.getElementById('subjectGroup').style.display = 'none';
                        document.getElementById('formOverlay').style.display = 'none';
                        
                        // Reset button
                        buttonText.style.display = 'inline';
                        loadingSpinner.style.display = 'none';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 1500);
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.getElementById('formOverlay').style.display = 'none';
            }
        });