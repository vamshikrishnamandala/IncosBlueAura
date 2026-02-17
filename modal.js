/**
 * Welcome Modal Handler
 * Shows modal on first visit and handles form submission
 */

(function () {
  "use strict";

  const MODAL_STORAGE_KEY = "incosblueaura_visited";
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbz9qDuiZCZ5tuPjyq_entsM_WOtgeuzV9PGVBdLM5SL4TYlURsiV1E3ce9paQu2p0S6rQ/exec";

  class WelcomeModal {
    constructor() {
      this.modal = null;
      this.overlay = null;
      this.form = null;
      this.closeBtn = null;
      this.init();
    }

    init() {
      // Check if user has visited before
      if (this.hasVisited()) {
        return;
      }

      // Inject modal HTML
      this.injectHTML();

      // Get elements
      this.modal = document.querySelector(".welcome-modal");
      this.overlay = document.querySelector(".welcome-modal-overlay");
      this.form = document.getElementById("welcomeModalForm");
      this.closeBtn = document.querySelector(".modal-close");

      // Setup event listeners
      this.setupEventListeners();

      // Show modal after a short delay
      setTimeout(() => {
        this.show();
      }, 1000);
    }

    hasVisited() {
      return localStorage.getItem(MODAL_STORAGE_KEY) === "true";
    }

    markAsVisited() {
      localStorage.setItem(MODAL_STORAGE_KEY, "true");
    }

    injectHTML() {
      const modalHTML = `
        <div class="welcome-modal-overlay">
          <div class="welcome-modal">
            <button class="modal-close" aria-label="Close modal">
              <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-image-section">
              <div class="modal-image-content">
                <img src="images/logo.png" alt="IncosBlueAura Logo" class="modal-logo">
                <h2>Welcome to<br>IncosBlueAura</span>!</h2>
              </div>
            </div>
            
            <div class="modal-form-section">
              <h3>Get Started Today</h3>
              <p class="subtitle">Fill in your details and we'll contact you within 24 hours</p>
              
              <div class="modal-success-message" id="modalSuccessMessage">
                <i class="fas fa-check-circle"></i> Thank you! We'll contact you soon.
              </div>
              
              <div class="modal-error-message" id="modalErrorMessage">
                <i class="fas fa-exclamation-circle"></i> Something went wrong. Please try again.
              </div>
              
              <form id="welcomeModalForm">
                <div class="modal-form-group">
                  <label for="modal-name">Full Name <span class="required">*</span></label>
                  <div class="modal-input-wrapper">
                    <i class="fas fa-user"></i>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div class="modal-form-group">
                  <label for="modal-phone">Phone Number <span class="required">*</span></label>
                  <div class="modal-input-wrapper">
                    <i class="fas fa-phone"></i>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      pattern="^[\\+]?[(]?[0-9]{1,4}[)]?[-\\s\\.]?[(]?[0-9]{1,4}[)]?[-\\s\\.]?[0-9]{1,9}$"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div class="modal-form-group">
                  <label for="modal-email">Email Address <span class="required">*</span></label>
                  <div class="modal-input-wrapper">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <button type="submit" class="modal-submit-btn">
                  <i class="fas fa-paper-plane"></i> Get Free Consultation
                </button>
                
                <div class="modal-privacy">
                  <i class="fas fa-lock"></i>
                  Your information is secure and will only be used to contact you about your interior design needs.
                </div>
              </form>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML("beforeend", modalHTML);
    }

    setupEventListeners() {
      // Close button
      this.closeBtn.addEventListener("click", () => this.close());

      // Close on overlay click
      this.overlay.addEventListener("click", (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });

      // Close on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.overlay.classList.contains("active")) {
          this.close();
        }
      });

      // Form submission
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    show() {
      this.overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    close() {
      this.overlay.classList.remove("active");
      document.body.style.overflow = "";
      this.markAsVisited();
    }

    async handleSubmit(e) {
      e.preventDefault();

      const submitBtn = this.form.querySelector(".modal-submit-btn");
      const successMsg = document.getElementById("modalSuccessMessage");
      const errorMsg = document.getElementById("modalErrorMessage");

      // Hide previous messages
      successMsg.classList.remove("active");
      errorMsg.classList.remove("active");

      // Get form values
      const name = document.getElementById("modal-name").value.trim();
      const phone = document.getElementById("modal-phone").value.trim();
      const email = document.getElementById("modal-email").value.trim();

      // Validate email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        errorMsg.textContent =
          "Please enter a valid email address (e.g., john@example.com)";
        errorMsg.classList.add("active");
        return;
      }

      // Validate phone
      const phonePattern =
        /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
      if (!phonePattern.test(phone.replace(/\s/g, ""))) {
        errorMsg.textContent =
          "Please enter a valid phone number (e.g., +91 9876543210)";
        errorMsg.classList.add("active");
        return;
      }

      // Prepare form data - using same field names as contact.html
      const formData = {
        fullName: name,
        phoneNumber: phone,
        emailAddress: email,
      };

      // Show loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        // Send data to Google Apps Script - same method as contact.html
        const response = await fetch(WEB_APP_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Show success message
        successMsg.classList.add("active");

        // Reset form
        this.form.reset();

        // Close modal after 2 seconds
        setTimeout(() => {
          this.close();
        }, 2000);
      } catch (error) {
        console.error("Form submission error:", error);

        // Show error message
        errorMsg.textContent =
          "Oops! Something went wrong. Please try again or call us at +91-8142156456";
        errorMsg.classList.add("active");
      } finally {
        // Restore button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    }
  }

  // Initialize modal when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new WelcomeModal();
    });
  } else {
    new WelcomeModal();
  }
})();
