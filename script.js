document.addEventListener('DOMContentLoaded', () => {
    // Booking button functionality
    document.querySelector('.btn').addEventListener('click', () => {
        showBookingForm();
        document.querySelector('.btn').style.display = 'none'; // Hide the button
    });
  
    // Content for different sections
    const sections = {
        'Main': '<h2>Welcome to UrbanPEDALS</h2><p>Your one-stop shop for all things biking!</p>',
        'About': `
            <h2 style="color: white;">About Us</h2>
            <p style="color: white;">UrbanPEDALS was founded by three friends who shared a deep passion for cycling. They envisioned a place where fellow biking enthusiasts could come together, find top-quality bikes, and receive expert services. From humble beginnings in a small garage, UrbanPEDALS has grown into a thriving community hub. Our mission is to promote a healthy, active lifestyle and foster a love for cycling in everyone who walks through our doors. Join us on this incredible journey and roll with us!</p>
        `,
        'Services': `
            <h2>Our Services</h2>
            <div id="service-details">
                <div class="service-option" data-service="Bike Rental">
                    <img src="bike-rental-icon.png" alt="Bike Rental Icon">
                    <h3>Bike Rental</h3>
                    <p>Choose from a variety of bikes for rent, including mountain bikes, road bikes, and electric bikes.</p>
                </div>
                <div class="service-option" data-service="Bike Repair">
                    <img src="bike-repair-icon.png" alt="Bike Repair Icon">
                    <h3>Bike Repair</h3>
                    <p>Our expert mechanics are here to help with all your bike repair needs.</p>
                </div>
                <div class="service-option" data-service="Buy a New Bike">
                    <img src="new-bike-icon.png" alt="New Bike Icon">
                    <h3>Buy a New Bike</h3>
                    <p>Check out our selection of new bikes available for purchase.</p>
                </div>
            </div>
            <h2>Meet Our Specialists</h2>
            <div class="specialist">
                <h3>John Doe</h3>
                <p>John has over 10 years of experience in bike repairs and is an avid mountain biker.</p>
            </div>
            <div class="specialist">
                <h3>Jane Smith</h3>
                <p>Jane is a professional cyclist and specializes in road bike maintenance and repairs.</p>
            </div>
            <div class="specialist">
                <h3>Mike Johnson</h3>
                <p>Mike is an expert in electric bikes and has been working in the industry for over 5 years.</p>
            </div>
        `,
        'Location': `
            <h2>Our Location</h2>
            <div id="map"></div>
            <div class="contact-info">
                <p>Address: 123 Yonge Street, Toronto, ON</p>
                <p>Phone: 647-858-9494</p>
                <p>Email: urbanpedals@yahoo.fr</p>
                <p>Business Hours: Monday to Friday, 9 AM - 5 PM</p>
            </div>
        `
    };
  
    // Navigation link functionality
    document.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.textContent.trim();
            document.querySelector('.titre').innerHTML = sections[section] || '<h2>Section not found</h2>';
            if (section === 'Location') {
                initMap();
            } else if (section === 'Services') {
                setupServiceOptions();
            }
        });
    });
  
    // Initialize Google Map
    function initMap() {
        const location = { lat: 43.6532, lng: -79.3832 }; // Coordinates for 123 Yonge Street, Toronto
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
  
    // Show booking form
    function showBookingForm() {
        const bookingForm = `
            <div class="booking-form">
                <h2>Book a Service</h2>
                <form id="booking-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="date">Choose a date:</label>
                    <input type="date" id="date" name="date" min="2025-01-01" max="2025-12-31" required>
                    <label for="specialist">Choose a specialist:</label>
                    <select id="specialist" name="specialist" required>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Mike Johnson">Mike Johnson</option>
                    </select>
                    <label for="service">Choose a service:</label>
                    <select id="service" name="service" required>
                        <option value="Bike Rental">Bike Rental</option>
                        <option value="Bike Repair">Bike Repair</option>
                        <option value="Buy a New Bike">Buy a New Bike</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        `;
        document.querySelector('.titre').innerHTML = bookingForm;
  
        // Handle form submission
        document.getElementById('booking-form').addEventListener('submit', (event) => {
            event.preventDefault();
            showConfirmation();
        });
    }
  
    // Show confirmation page
    function showConfirmation() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const specialist = document.getElementById('specialist').value;
        const service = document.getElementById('service').value;
  
        const confirmation = `
            <div class="confirmation">
                <h2>🎉 Booking Confirmed! 🎉</h2>
                <p>Name: ${name}</p>
                <p>Phone Number: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Date: ${date}</p>
                <p>Specialist: ${specialist}</p>
                <p>Service: ${service}</p>
                <div class="emoji">🚴‍♂️🚴‍♀️</div>
            </div>
        `;
        document.querySelector('.titre').innerHTML = confirmation;
    }
  
    // Setup service options
    function setupServiceOptions() {
        document.querySelectorAll('.service-option').forEach(option => {
            option.addEventListener('click', (event) => {
                const service = event.target.getAttribute('data-service');
                let serviceDetails = '';
                if (service === 'Bike Rental') {
                    serviceDetails = `
                        <h3>Bike Rental Options</h3>
                        <ul>
                            <li>Mountain Bike</li>
                            <li>Road Bike</li>
                            <li>Hybrid Bike</li>
                            <li>Electric Bike</li>
                        </ul>
                    `;
                } else if (service === 'Bike Repair') {
                    serviceDetails = `
                        <h3>Bike Repair Services</h3>
                        <p>We offer a range of bike repair services to keep your bike in top condition.</p>
                    `;
                } else if (service === 'Buy a New Bike') {
                    serviceDetails = `
                        <h3>Buy a New Bike</h3>
                        <p>Check out our selection of new bikes available for purchase.</p>
                    `;
                }
                document.getElementById('service-details').innerHTML = serviceDetails;
            });
        });
    }
  });