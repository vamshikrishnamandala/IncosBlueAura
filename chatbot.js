/**
 * Chatbot Widget - Main Application
 * Handles all chatbot functionality including:
 * - Dynamic HTML injection
 * - Conversation flow management
 * - User interaction handling
 * - Message rendering
 */

(function () {
  "use strict";

  /**
   * Chatbot Class
   * Main controller for the chatbot widget
   */
  class Chatbot {
    constructor() {
      this.conversationHistory = [];
      this.currentPath = [];
      this.isOpen = false;
      this.widget = null;
      this.toggleBtn = null;
      this.closeBtn = null;
      this.resetBtn = null;
      this.messagesContainer = null;
      this.optionsContainer = null;

      this.init();
    }

    /**
     * Initialize the chatbot
     * Injects HTML and sets up event listeners
     */
    init() {
      // Wait for DOM to be fully loaded
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.setup());
      } else {
        this.setup();
      }
    }

    /**
     * Setup chatbot HTML and event listeners
     */
    setup() {
      this.injectHTML();
      this.cacheElements();
      this.attachEventListeners();
      this.showGreeting();
    }

    /**
     * Inject chatbot HTML into the page
     */
    injectHTML() {
      // Check if chatbot already exists
      if (document.getElementById("chatbot-widget")) {
        return;
      }

      // Find or create floating buttons container
      let floatingButtons = document.querySelector(".floating-buttons");
      if (!floatingButtons) {
        floatingButtons = document.createElement("div");
        floatingButtons.className = "floating-buttons";
        document.body.appendChild(floatingButtons);
      }

      // Add chatbot button to floating buttons
      const chatbotBtn = document.createElement("button");
      chatbotBtn.id = "chatbot-toggle";
      chatbotBtn.className = "float-btn chatbot-btn";
      chatbotBtn.setAttribute("aria-label", "Chat with Us");
      chatbotBtn.innerHTML = '<i class="fas fa-comments"></i>';
      floatingButtons.appendChild(chatbotBtn);

      // Create chatbot widget
      const widgetHTML = `
        <div id="chatbot-widget" class="chatbot-widget">
          <div class="chatbot-header">
            <div class="chatbot-header-content">
              <div class="chatbot-avatar">
                <i class="fas fa-robot"></i>
              </div>
              <div class="chatbot-title">
                <h4>IncosBlueAura Assistant</h4>
                <span class="chatbot-status">
                  <span class="status-dot"></span> Online
                </span>
              </div>
            </div>
            <div class="chatbot-actions">
              <button id="chatbot-reset" class="chatbot-action-btn" title="Reset Chat" aria-label="Reset Chat">
                <i class="fas fa-redo"></i>
              </button>
              <button id="chatbot-close" class="chatbot-action-btn" title="Close Chat" aria-label="Close Chat">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          
          <div id="chatbot-messages" class="chatbot-messages">
            <!-- Messages will be dynamically inserted here -->
          </div>
          
          <div id="chatbot-options" class="chatbot-options">
            <!-- Options will be dynamically inserted here -->
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML("beforeend", widgetHTML);
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheElements() {
      this.widget = document.getElementById("chatbot-widget");
      this.toggleBtn = document.getElementById("chatbot-toggle");
      this.closeBtn = document.getElementById("chatbot-close");
      this.resetBtn = document.getElementById("chatbot-reset");
      this.messagesContainer = document.getElementById("chatbot-messages");
      this.optionsContainer = document.getElementById("chatbot-options");
    }

    /**
     * Attach all event listeners
     */
    attachEventListeners() {
      // Toggle button
      this.toggleBtn.addEventListener("click", () => this.toggle());

      // Close button
      this.closeBtn.addEventListener("click", () => this.close());

      // Reset button
      this.resetBtn.addEventListener("click", () => this.reset());

      // Keyboard accessibility - ESC to close
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
      });

      // Click outside to close (optional)
      document.addEventListener("click", (e) => {
        if (
          this.isOpen &&
          !this.widget.contains(e.target) &&
          !this.toggleBtn.contains(e.target)
        ) {
          // Uncomment the line below if you want clicking outside to close the chatbot
          // this.close();
        }
      });
    }

    /**
     * Toggle chatbot open/close
     */
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    /**
     * Open the chatbot widget
     */
    open() {
      this.widget.classList.add("active");
      this.toggleBtn.classList.add("active");
      this.isOpen = true;
      this.scrollToBottom();

      // Update toggle button icon
      this.toggleBtn.innerHTML = '<i class="fas fa-times"></i>';

      // Announce to screen readers
      this.announceToScreenReader("Chatbot opened");
    }

    /**
     * Close the chatbot widget
     */
    close() {
      this.widget.classList.remove("active");
      this.toggleBtn.classList.remove("active");
      this.isOpen = false;

      // Restore toggle button icon
      this.toggleBtn.innerHTML = '<i class="fas fa-comments"></i>';

      // Announce to screen readers
      this.announceToScreenReader("Chatbot closed");
    }

    /**
     * Reset the conversation
     */
    reset() {
      this.conversationHistory = [];
      this.currentPath = [];
      this.messagesContainer.innerHTML = "";
      this.showGreeting();
      this.scrollToBottom();

      // Announce to screen readers
      this.announceToScreenReader("Chat reset. Showing main menu.");
    }

    /**
     * Show the greeting message
     */
    showGreeting() {
      if (!chatbotData || !chatbotData.greeting) {
        console.error("Chatbot data not loaded");
        return;
      }

      const greeting = chatbotData.greeting;
      this.addBotMessage(greeting.message);
      this.showOptions(greeting.options, "greeting");
    }

    /**
     * Add a bot message to the chat
     * @param {string} text - The message text
     * @param {boolean} isMarkdown - Whether to parse markdown
     */
    addBotMessage(text, isMarkdown = true) {
      const messageDiv = document.createElement("div");
      messageDiv.className = "chat-message bot-message";
      messageDiv.setAttribute("role", "article");
      messageDiv.setAttribute("aria-label", "Bot message");

      const avatar = document.createElement("div");
      avatar.className = "message-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.innerHTML = '<i class="fas fa-robot"></i>';

      const bubble = document.createElement("div");
      bubble.className = "message-bubble";

      if (isMarkdown) {
        bubble.innerHTML = this.parseMarkdown(text);
      } else {
        bubble.textContent = text;
      }

      messageDiv.appendChild(avatar);
      messageDiv.appendChild(bubble);
      this.messagesContainer.appendChild(messageDiv);

      this.conversationHistory.push({ type: "bot", text });
      this.scrollToBottom();
    }

    /**
     * Add a user message to the chat
     * @param {string} text - The message text
     */
    addUserMessage(text) {
      const messageDiv = document.createElement("div");
      messageDiv.className = "chat-message user-message";
      messageDiv.setAttribute("role", "article");
      messageDiv.setAttribute("aria-label", "User message");

      const bubble = document.createElement("div");
      bubble.className = "message-bubble";
      bubble.textContent = text;

      messageDiv.appendChild(bubble);
      this.messagesContainer.appendChild(messageDiv);

      this.conversationHistory.push({ type: "user", text });
      this.scrollToBottom();
    }

    /**
     * Show option buttons
     * @param {Array} options - Array of option objects
     * @param {string} context - Current context/category
     */
    showOptions(options, context) {
      this.optionsContainer.innerHTML = "";

      if (!options || options.length === 0) {
        return;
      }

      options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "chat-option-btn";
        button.innerHTML = `${option.icon || ""} ${option.label}`;
        button.setAttribute("data-id", option.id);
        button.setAttribute("data-context", context);
        button.setAttribute("aria-label", option.label);
        button.setAttribute("tabindex", "0");

        button.addEventListener("click", () => {
          this.handleOptionClick(option, context);
        });

        // Keyboard support
        button.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.handleOptionClick(option, context);
          }
        });

        this.optionsContainer.appendChild(button);
      });
    }

    /**
     * Handle option button click
     * @param {Object} option - The selected option
     * @param {string} context - Current context
     */
    handleOptionClick(option, context) {
      // Add user's choice to chat
      this.addUserMessage(option.label);

      // Clear options immediately for better UX
      this.optionsContainer.innerHTML = "";

      // Add thinking indicator
      this.showThinkingIndicator();

      // Simulate slight delay for natural feel
      setTimeout(() => {
        this.removeThinkingIndicator();
        this.processOption(option.id, context);
      }, 500);
    }

    /**
     * Show typing/thinking indicator
     */
    showThinkingIndicator() {
      const indicator = document.createElement("div");
      indicator.className = "chat-message bot-message thinking-indicator";
      indicator.id = "thinking-indicator";
      indicator.setAttribute("aria-label", "Bot is typing");

      const avatar = document.createElement("div");
      avatar.className = "message-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.innerHTML = '<i class="fas fa-robot"></i>';

      const bubble = document.createElement("div");
      bubble.className = "message-bubble";
      bubble.innerHTML =
        '<div class="typing-dots"><span></span><span></span><span></span></div>';

      indicator.appendChild(avatar);
      indicator.appendChild(bubble);
      this.messagesContainer.appendChild(indicator);
      this.scrollToBottom();
    }

    /**
     * Remove typing/thinking indicator
     */
    removeThinkingIndicator() {
      const indicator = document.getElementById("thinking-indicator");
      if (indicator) {
        indicator.remove();
      }
    }

    /**
     * Process the selected option
     * @param {string} optionId - The option ID
     * @param {string} context - Current context
     */
    processOption(optionId, context) {
      // Handle special actions
      if (
        optionId === "main" ||
        (chatbotData[optionId] && chatbotData[optionId].action === "reset")
      ) {
        this.reset();
        return;
      }

      if (optionId === "back") {
        this.goBack(context);
        return;
      }

      // Check if it's a direct answer in current context
      if (
        context !== "greeting" &&
        chatbotData[context] &&
        chatbotData[context].answers &&
        chatbotData[context].answers[optionId]
      ) {
        const answer = chatbotData[context].answers[optionId];
        this.addBotMessage(answer.message);
        this.showOptions(answer.options, context);
        this.currentPath.push({ context, optionId });
        return;
      }

      // Check if it's a main category
      if (chatbotData[optionId]) {
        const category = chatbotData[optionId];

        // Handle special flows
        if (
          optionId === "pricing" ||
          optionId === "contact_service" ||
          optionId === "contact_page"
        ) {
          this.addBotMessage(category.message);
          this.showOptions(category.options, optionId);
          this.currentPath.push({ context: "greeting", optionId });
          return;
        }

        // Handle regular categories
        if (category.message) {
          this.addBotMessage(category.message);
        }

        if (category.options) {
          this.showOptions(category.options, optionId);
          this.currentPath.push({ context: "greeting", optionId });
        }
        return;
      }

      // Fallback
      this.addBotMessage(
        "I'm not sure about that. Let me show you the main options.",
      );
      this.showGreeting();
    }

    /**
     * Go back to previous context
     * @param {string} currentContext - Current context
     */
    goBack(currentContext) {
      if (this.currentPath.length === 0) {
        this.showGreeting();
        return;
      }

      // Remove last path item
      this.currentPath.pop();

      if (this.currentPath.length === 0) {
        this.showGreeting();
        return;
      }

      // Get previous context
      const previous = this.currentPath[this.currentPath.length - 1];
      const category =
        chatbotData[previous.context] || chatbotData[previous.optionId];

      if (category) {
        this.addBotMessage(category.message);
        this.showOptions(
          category.options,
          previous.context === "greeting"
            ? previous.optionId
            : previous.context,
        );
      } else {
        this.showGreeting();
      }
    }

    /**
     * Parse simple markdown to HTML
     * @param {string} text - Markdown text
     * @returns {string} - HTML string
     */
    parseMarkdown(text) {
      // First, handle links before other processing
      let html = text.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" class="chat-link">$1 →</a>',
      );

      // Handle bold text
      html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

      // Split by line breaks to process each line
      const lines = html.split(/\n/);
      const processedLines = lines.map((line) => {
        // Detect contact item pattern: emoji followed by bold text and content
        // Matches patterns like: 📞 <strong>Call:</strong> +91 98765 43210
        const contactPattern =
          /^([\p{Emoji}\p{Emoji_Presentation}\p{Emoji_Modifier_Base}])(\s*)(<strong>[^<]+<\/strong>)(.*)/u;

        if (contactPattern.test(line)) {
          return line.replace(
            contactPattern,
            '<div class="contact-item"><span class="contact-icon">$1</span><span class="contact-content">$3$4</span></div>',
          );
        }

        // Handle bullet points
        if (line.trim().startsWith("•")) {
          return line.replace(/• /g, '<span class="bullet">•</span> ');
        }

        // Handle checkmarks
        if (line.trim().startsWith("✓")) {
          return line.replace(/✓ /g, '<span class="checkmark">✓</span> ');
        }

        return line;
      });

      // Join lines with <br> for non-contact items
      html = processedLines.join("<br>");

      // Clean up extra <br> tags around contact items
      html = html.replace(/<br>(<div class="contact-item">)/g, "$1");
      html = html.replace(/(<\/div>)<br>/g, "$1");

      return html;
    }

    /**
     * Scroll messages container to bottom
     */
    scrollToBottom() {
      setTimeout(() => {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }, 100);
    }

    /**
     * Announce to screen readers (accessibility)
     * @param {string} message - Message to announce
     */
    announceToScreenReader(message) {
      const announcement = document.createElement("div");
      announcement.setAttribute("role", "status");
      announcement.setAttribute("aria-live", "polite");
      announcement.className = "sr-only";
      announcement.textContent = message;
      announcement.style.position = "absolute";
      announcement.style.left = "-10000px";
      announcement.style.width = "1px";
      announcement.style.height = "1px";
      announcement.style.overflow = "hidden";

      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }

  // Initialize chatbot when script loads
  // Check if chatbotData is available
  if (typeof chatbotData === "undefined") {
    console.error(
      "Chatbot Error: chatbot-data.js must be loaded before chatbot.js",
    );
  } else {
    new Chatbot();
  }
})();
