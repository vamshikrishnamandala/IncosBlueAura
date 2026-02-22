/**
 * Chatbot Q&A Data Structure
 * Contains all conversation flows, questions, and answers
 * Based on website content from all pages
 */

const chatbotData = {
  greeting: {
    message: "Hi 👋 Welcome to IncosBlueAura! How can we help you today?",
    options: [
      { id: "services", label: "Our Services", icon: "🏗️" },
      { id: "about", label: "About Us", icon: "ℹ️" },
      { id: "portfolio", label: "Our Work", icon: "🎨" },
      { id: "themes", label: "Design Themes", icon: "🎭" },
      { id: "contact", label: "Contact & Location", icon: "📞" },
      { id: "faq", label: "Common Questions", icon: "❓" },
    ],
  },

  services: {
    message: "What service are you interested in?",
    options: [
      { id: "luxury", label: "Luxury Interiors" },
      { id: "renovation", label: "Home Renovation" },
      { id: "landscape", label: "Interior Landscape" },
      { id: "commercial", label: "Commercial Design" },
      { id: "kitchen", label: "Modular Kitchen" },
      { id: "wardrobe", label: "Wardrobe Design" },
    ],
    answers: {
      luxury: {
        message:
          "**Luxury Interiors** 🏛️\n\nWe craft bespoke luxury interiors that reflect your personality and lifestyle. Our services include:\n\n✓ Personalized design consultation\n✓ 3D visualization and walkthroughs\n✓ Premium material procurement\n✓ Dedicated project management\n✓ 10-year warranty on products\n\nWould you like to know more?",
        options: [
          { id: "pricing", label: "Get Pricing Info" },
          { id: "contact_service", label: "Schedule Consultation" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      renovation: {
        message:
          "**Complete Home Renovation** 🔨\n\nTransform your existing space with our comprehensive renovation services:\n\n✓ Space planning & optimization\n✓ Structural modifications\n✓ Electrical & plumbing upgrades\n✓ Complete material replacement\n✓ Minimal disruption guarantee\n\nTypical timeline: 45-90 days depending on project size.",
        options: [
          { id: "contact_service", label: "Get Free Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      landscape: {
        message:
          "**Interior Landscape** 🌿\n\nBring nature indoors with our expert interior landscaping:\n\n✓ Custom plant selection & placement\n✓ Vertical gardens & green walls\n✓ Low-maintenance plant solutions\n✓ Automated irrigation systems\n✓ Ongoing maintenance support\n\nCreate a healthier, more vibrant living space!",
        options: [
          { id: "contact_service", label: "Discuss My Project" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      commercial: {
        message:
          "**Commercial Interiors** 🏢\n\nElevate your business environment:\n\n✓ Brand-aligned designs\n✓ Ergonomic workspaces\n✓ Collaborative zones\n✓ Sustainable materials\n✓ Fast-track execution\n\nPerfect for offices, retail, restaurants, and corporate spaces.",
        options: [
          { id: "contact_service", label: "Get Commercial Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      kitchen: {
        message:
          "**Modular Kitchen Design** 🍳\n\nFunctional and stylish kitchens:\n\n✓ Space-efficient layouts\n✓ Premium hardware & fittings\n✓ Durable materials\n✓ Smart storage solutions\n✓ Easy maintenance materials\n\nCustomized to your cooking style and space.",
        options: [
          { id: "contact_service", label: "Design My Kitchen" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      wardrobe: {
        message:
          "**Custom Wardrobe Design** 👔\n\nMaximize your storage with style:\n\n✓ Custom configurations\n✓ Soft-close mechanisms\n✓ Interior organizers\n✓ Mirror & lighting options\n✓ Wide material choices\n\nTailored to your space and needs.",
        options: [
          { id: "contact_service", label: "Get Wardrobe Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
    },
  },

  about: {
    message: "Learn more about IncosBlueAura",
    options: [
      { id: "company", label: "Company Overview" },
      { id: "experience", label: "Our Experience" },
      { id: "values", label: "Our Values" },
      { id: "process", label: "Our Process" },
    ],
    answers: {
      company: {
        message:
          "**About IncosBlueAura** 🏆\n\nWe are a leading interior design company with 15+ years of experience in creating extraordinary living and working spaces.\n\n📊 **Our Numbers:**\n• 500+ Projects Completed\n• 450+ Happy Clients\n• 4.9/5 Client Rating\n• 15+ Years Experience\n\nWe transform spaces into masterpieces through innovation, quality, and client-centric designs.",
        options: [{ id: "back", label: "← Back" }],
      },
      experience: {
        message:
          "**Our Expertise** 💼\n\nWith over 15 years in the industry, we've mastered:\n\n✓ Residential luxury interiors\n✓ Commercial space design\n✓ Complete home renovations\n✓ Modular solutions\n✓ Sustainable design practices\n\nWe've successfully delivered 500+ projects across India, earning a 4.9/5 client satisfaction rating.",
        options: [{ id: "back", label: "← Back" }],
      },
      values: {
        message:
          "**Our Core Values** 💎\n\n🔹 **Innovation** - Exploring cutting-edge design trends\n🔹 **Quality** - Never compromising on materials or craftsmanship\n🔹 **Integrity** - Transparent and ethical practices\n🔹 **Client-Centric** - Your vision is our priority\n🔹 **Sustainability** - Eco-friendly materials and practices\n🔹 **Excellence** - Perfection in every detail",
        options: [{ id: "back", label: "← Back" }],
      },
      process: {
        message:
          "**Our 6-Step Process** 📋\n\n1️⃣ **Consultation** - Share your vision and requirements\n2️⃣ **Design Development** - Create concepts and 3D renders\n3️⃣ **Approval** - Finalize design and materials\n4️⃣ **Execution** - Professional installation begins\n5️⃣ **Quality Check** - Thorough inspection\n6️⃣ **Handover** - Your dream space delivered!\n\nTypical timeline: 45-90 days",
        options: [{ id: "back", label: "← Back" }],
      },
    },
  },

  portfolio: {
    message: "Explore our completed projects",
    options: [
      { id: "residential", label: "Residential Projects" },
      { id: "commercial_work", label: "Commercial Projects" },
      { id: "luxury_work", label: "Luxury Projects" },
      { id: "view_all", label: "View Full Portfolio" },
    ],
    answers: {
      residential: {
        message:
          "**Residential Projects** 🏠\n\nWe've designed beautiful homes across India including:\n\n• Modern Villa Interior (Mumbai, 3500 sq.ft)\n• Minimalist Living Spaces\n• Contemporary Kitchen Designs\n• Complete Apartment Renovations\n• Coastal Beach Houses\n\nEach project reflects our commitment to quality and client satisfaction.",
        options: [
          { id: "view_all", label: "See Portfolio Page" },
          { id: "contact_service", label: "Start My Project" },
          { id: "back", label: "← Back" },
        ],
      },
      commercial_work: {
        message:
          "**Commercial Projects** 🏢\n\nOur commercial portfolio includes:\n\n• Tech Corporate Offices (8000 sq.ft)\n• Fine Dining Restaurants (5000 sq.ft)\n• Premium Retail Stores\n• Modern Co-working Spaces\n• Hospitality Interiors\n\nWe create spaces that enhance productivity and brand identity.",
        options: [
          { id: "view_all", label: "See Portfolio Page" },
          { id: "contact_service", label: "Discuss Commercial Project" },
          { id: "back", label: "← Back" },
        ],
      },
      luxury_work: {
        message:
          "**Luxury Projects** 💎\n\nExperience opulence in our luxury projects:\n\n• Regal Penthouse Suites (4500 sq.ft)\n• High-end Villa Interiors\n• Premium Apartments\n• Luxury Hotel Suites\n\nFeaturing premium materials, custom furniture, and impeccable craftsmanship.",
        options: [
          { id: "view_all", label: "See Portfolio Page" },
          { id: "contact_service", label: "Plan Luxury Project" },
          { id: "back", label: "← Back" },
        ],
      },
      view_all: {
        message:
          "You can view our complete portfolio at:\n\n🔗 [Portfolio Page](portfolio.html)\n\nSee detailed images, project specifications, and client testimonials for all our completed work.",
        options: [
          { id: "contact_service", label: "Start My Project" },
          { id: "back", label: "← Back" },
        ],
      },
    },
  },

  themes: {
    message: "Which design theme interests you?",
    options: [
      { id: "scandinavian", label: "Scandinavian" },
      { id: "minimalist", label: "Minimalist" },
      { id: "vintage", label: "Vintage" },
      { id: "coastal", label: "Coastal" },
      { id: "industrial", label: "Industrial" },
      { id: "regal", label: "Regal Opulence" },
    ],
    answers: {
      scandinavian: {
        message:
          "**Scandinavian Style** 🏔️\n\nEmbracing Nordic simplicity and functionality:\n\n✓ Light, neutral color palettes\n✓ Natural wood elements\n✓ Minimalist furniture\n✓ Abundant natural light\n✓ Cozy textiles\n\n**Color Palette:** White, Gray, Beige, Light Blue\n\nPerfect for creating serene, clutter-free spaces!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      minimalist: {
        message:
          "**Minimalist Design** ⚪\n\nLess is more:\n\n✓ Clean, uncluttered spaces\n✓ Monochromatic color schemes\n✓ Functional furniture with simple forms\n✓ Hidden storage solutions\n✓ Focus on quality over quantity\n\n**Color Palette:** White, Black, Gray\n\nIdeal for modern, peaceful living.",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      vintage: {
        message:
          "**Vintage Charm** 🕰️\n\nNostalgic elegance:\n\n✓ Antique furniture pieces\n✓ Classic patterns and fabrics\n✓ Ornate mirrors and frames\n✓ Warm, earthy tones\n✓ Handcrafted details\n\n**Color Palette:** Cream, Brown, Gold, Burgundy\n\nBring timeless beauty to your home!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      coastal: {
        message:
          "**Coastal Style** 🌊\n\nBeach-inspired tranquility:\n\n✓ Light, airy color schemes\n✓ Natural materials (rattan, jute)\n✓ Ocean-inspired decor\n✓ Striped patterns & nautical motifs\n✓ Weathered wood finishes\n\n**Color Palette:** White, Blue, Sandy Beige\n\nCreate a vacation-like atmosphere year-round!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      industrial: {
        message:
          "**Industrial Design** 🏭\n\nUrban warehouse aesthetics:\n\n✓ Exposed brick and concrete\n✓ Metal and steel furniture\n✓ Edison bulb lighting\n✓ Open floor plans\n✓ Reclaimed wood elements\n\n**Color Palette:** Dark Gray, Brown, Slate, Copper\n\nPerfect for modern, edgy spaces!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      regal: {
        message:
          "**Regal Opulence** 👑\n\nLuxurious grandeur:\n\n✓ Rich, bold colors\n✓ Ornate furniture and moldings\n✓ Luxurious fabrics (velvet, silk)\n✓ Crystal chandeliers\n✓ Gold and brass accents\n\n**Color Palette:** Deep Purple, Gold, Burgundy, Navy\n\nExperience royal living!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
    },
  },

  contact: {
    message: "How would you like to reach us?",
    options: [
      { id: "phone", label: "📞 Call Us" },
      { id: "whatsapp", label: "💬 WhatsApp" },
      { id: "email", label: "📧 Email" },
      { id: "visit", label: "📍 Visit Our Office" },
      { id: "hours", label: "🕐 Working Hours" },
    ],
    answers: {
      phone: {
        message:
          "**Call Us** 📞\n\nSpeak directly with our design consultants:\n\n☎️ **Phone:** +91-8142156456\n☎️ **Phone:** +91-9000693988\n\nBest time to call: Mon-Sat, 9:00 AM - 7:00 PM\n\nWe're here to answer all your questions!",
        options: [{ id: "back", label: "← Back to Contact Options" }],
      },
      whatsapp: {
        message:
          "**WhatsApp Chat** 💬\n\nGet quick responses on WhatsApp:\n\n📱 **WhatsApp:** +91 8142156456\n\nClick the WhatsApp button (bottom right) to start chatting instantly!\n\nShare images, ask questions, get quotes - all on WhatsApp.",
        options: [{ id: "back", label: "← Back to Contact Options" }],
      },
      email: {
        message:
          "**Email Us** 📧\n\nSend detailed project requirements:\n\n✉️ **Email:** incosblueaura@gmail.com\n✉️ **Email:** projects@incosblueaura.com\n\n⏱️ **Response Time:** Within 24 hours\n\nInclude photos, plans, or inspiration images for better assistance!",
        options: [{ id: "back", label: "← Back to Contact Options" }],
      },
      visit: {
        message:
          "**Visit Our Office** 📍\n\n**IncosBlueAura Design Studio**\n\nTummala Residency, Plot no 336\nRoad no 1/2, Mathrusree nagar\nMiyapur, Hyderabad\n\n🗺️ [Open in Google Maps](https://www.google.com/maps/search/?api=1&query=Tummala+Residency+Plot+no+336+Road+no+1%2F2+Mathrusree+nagar+Miyapur+Hyderabad)\n\nWalk-ins welcome! Appointment recommended.",
        options: [
          { id: "hours", label: "Check Working Hours" },
          { id: "back", label: "← Back to Contact Options" },
        ],
      },
      hours: {
        message:
          "**Working Hours** 🕐\n\n📅 **Days:** Monday - Saturday\n⏰ **Time:** 9:00 AM - 7:00 PM\n\n📅 **Days:** Sunday\n⏰ **Time:** By Appointment Only\n\n📅 **Days:** Public Holidays\n⏰ **Time:** Closed\n\nPlan your visit accordingly!",
        options: [{ id: "back", label: "← Back to Contact Options" }],
      },
    },
  },

  faq: {
    message: "Common questions we receive:",
    options: [
      { id: "timeline", label: "Project Timeline?" },
      { id: "cost", label: "Pricing & Packages?" },
      { id: "warranty", label: "Warranty & Support?" },
      { id: "materials", label: "Material Sourcing?" },
      { id: "consultation", label: "Free Consultation?" },
    ],
    answers: {
      timeline: {
        message:
          "**Project Timeline** ⏱️\n\nTypical timelines:\n\n🏠 **Complete Home Interior:** 45-90 days\n🔨 **Renovation:** 30-60 days\n🍳 **Modular Kitchen:** 15-30 days\n👔 **Wardrobe:** 15-25 days\n\nTimeline depends on:\n• Project size and complexity\n• Material availability\n• Approval speed\n\nWe provide detailed schedules during consultation.",
        options: [
          { id: "contact_service", label: "Get Project Estimate" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
      cost: {
        message:
          "**Pricing Information** 💰\n\nOur packages are customized based on:\n\n• Project size (sq.ft)\n• Design complexity\n• Material selection\n• Finish quality\n\n**Typical Ranges:**\n• Basic: ₹1,200 - ₹1,800 per sq.ft\n• Premium: ₹1,800 - ₹2,500 per sq.ft\n• Luxury: ₹2,500+ per sq.ft\n\n*Prices are indicative. Final quote after consultation.*",
        options: [
          { id: "contact_service", label: "Get Detailed Quote" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
      warranty: {
        message:
          "**Warranty & Support** 🛡️\n\nWe stand behind our work:\n\n✓ **10-year warranty** on modular products\n✓ **1-year** on installation and finishing\n✓ Free service visits during warranty period\n✓ Lifetime support and maintenance guidance\n✓ Quick response to issues\n\nYour satisfaction is guaranteed!",
        options: [{ id: "back", label: "← Back to FAQ" }],
      },
      materials: {
        message:
          "**Material Sourcing** 🏗️\n\nWe use premium materials from trusted brands:\n\n✓ Direct partnerships with top manufacturers\n✓ Certified & eco-friendly materials\n✓ Wide variety of finishes and styles\n✓ Transparent pricing\n✓ Material samples provided before finalization\n\nYou'll see and approve everything before execution!",
        options: [{ id: "back", label: "← Back to FAQ" }],
      },
      consultation: {
        message:
          "**Free Consultation** 🎯\n\nYes! We offer a **completely FREE** initial consultation:\n\n✓ Site visit and measurements\n✓ Requirement discussion\n✓ Design ideas and inspiration\n✓ Preliminary budget estimation\n✓ No obligation to proceed\n\nSchedule yours today!",
        options: [
          { id: "contact_service", label: "Book Free Consultation" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
    },
  },

  // Special flows
  pricing: {
    message:
      "**Get Pricing Information** 💳\n\nFor accurate pricing, we need to understand your requirements.\n\nWould you like to:\n\n1. Fill out a quick form on our contact page\n2. Call us for immediate discussion\n3. Schedule a free site visit\n\nAll options are free with no obligation!",
    options: [
      { id: "contact_page", label: "Go to Contact Page" },
      // { id: "phone", label: "Call Now" },
      { id: "back", label: "← Back" },
    ],
  },

  contact_service: {
    message:
      "**Let's Get Started!** 🚀\n\nYou can reach us through:\n\n📞 **Call:** +91-8142156456\n💬 **WhatsApp:** +91-8142156456\n📧 **Email:** incosblueaura@gmail.com\n📝 **Contact Form:** [Contact Page](contact.html)\n\nOr schedule a free consultation today!",
    options: [{ id: "main", label: "← Back to Main Menu" }],
  },

  contact_page: {
    message:
      "**Contact Page** 📝\n\n[Click here to visit our contact page](contact.html)\n\nYou can fill out the detailed form with your project requirements, and we'll get back to you within 24 hours with a customized proposal!",
    options: [{ id: "main", label: "← Back to Main Menu" }],
  },

  back: {
    action: "goBack",
  },

  main: {
    action: "reset",
  },
};
