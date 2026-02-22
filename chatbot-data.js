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
      { id: "residential", label: "Residential Interiors" },
      { id: "commercial", label: "Commercial Interiors" },
      { id: "corporate", label: "Corporate Spaces" },
      { id: "renovation", label: "Renovations" },
      { id: "landscape", label: "Landscaping" },
    ],
    answers: {
      residential: {
        message:
          "**Residential Interiors** 🏠\n\nTransform your home into a personalised sanctuary:\n\n✓ Personalised design consultation\n✓ 2D & 3D design visualisations\n✓ Modular kitchens & wardrobes\n✓ Premium material selection\n✓ End-to-end project management\n\nFrom cosy apartments to spacious villas — we craft spaces that reflect your lifestyle.",
        options: [
          { id: "contact_service", label: "Get Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      commercial: {
        message:
          "**Commercial Interiors** 🏢\n\nElevate your business environment:\n\n✓ Brand-aligned interior concepts\n✓ Retail & hospitality design\n✓ Customer-flow optimised layouts\n✓ Sustainable material choices\n✓ Fast-track execution timelines\n\nPerfect for retail outlets, restaurants, showrooms, and service centres.",
        options: [
          { id: "contact_service", label: "Get Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      corporate: {
        message:
          "**Corporate Spaces** 🏙️\n\nDesign inspiring workplaces that boost productivity:\n\n✓ Executive & boardroom interiors\n✓ Reception & lobby design\n✓ Acoustic & privacy solutions\n✓ Smart lighting & AV integration\n✓ Employee well-being focused design\n\nFrom executive suites to open-plan offices — crafted to leave a lasting impression.",
        options: [
          { id: "contact_service", label: "Get Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      renovation: {
        message:
          "**Renovations** 🔨\n\nBreathe new life into your existing space:\n\n✓ Space planning & optimisation\n✓ Structural modifications\n✓ Electrical & plumbing upgrades\n✓ Complete material replacement\n✓ Minimal disruption guarantee\n\nFrom a single room refresh to a complete home overhaul — handled with precision and care.",
        options: [
          { id: "contact_service", label: "Get Quote" },
          { id: "back", label: "← Back to Services" },
        ],
      },
      landscape: {
        message:
          "**Landscaping** 🌿\n\nBring the beauty of nature into your interiors and outdoor spaces:\n\n✓ Custom indoor plant selection & placement\n✓ Vertical gardens & green walls\n✓ Low-maintenance plant solutions\n✓ Automated irrigation systems\n✓ Ongoing maintenance support\n\nEnhance well-being, air quality, and aesthetic appeal!",
        options: [
          { id: "contact_service", label: "Get Quote" },
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
      { id: "team", label: "Meet Our Team" },
    ],
    answers: {
      company: {
        message:
          "**About IncosBlueAura** 🏆\n\nWe are a leading interior design company transforming spaces into extraordinary living experiences with innovative design solutions.\n\n📊 **Our Numbers:**\n• 300+ Projects Completed\n• 98% On-Time Deliveries\n• 4.9/5 Client Rating\n• 12+ Years Experience\n\nWe transform spaces into masterpieces through innovation, quality, and client-centric designs.",
        options: [{ id: "back", label: "← Back" }],
      },
      experience: {
        message:
          "**Our Expertise** 💼\n\nWith over 12 years in the industry, we've mastered:\n\n✓ Residential luxury interiors\n✓ Commercial & corporate space design\n✓ Complete home renovations\n✓ Modular kitchen & wardrobe solutions\n✓ Interior landscaping\n✓ Sustainable design practices\n\nWe've successfully delivered 300+ projects, earning a 4.9/5 client satisfaction rating.",
        options: [{ id: "back", label: "← Back" }],
      },
      values: {
        message:
          "**Our Core Values — INCOS** 💎\n\n🔵 **I — Innovation** - Exploring cutting-edge design trends\n🔵 **N — Nurtured Craftsmanship** - Quality in every detail and material\n🔵 **C — Client-Centric** - Your vision is our priority\n🔵 **O — On-Time Delivery** - We honour timelines, every time\n🔵 **S — Sustainability** - Eco-friendly materials and practices",
        options: [{ id: "back", label: "← Back" }],
      },
      process: {
        message:
          "**Our 6-Step Process** 📋\n\n1️⃣ **Consultation** - Share your vision and requirements\n2️⃣ **Design Development** - Create concepts and 3D renders\n3️⃣ **Approval** - Finalize design and materials\n4️⃣ **Execution** - Professional installation begins\n5️⃣ **Quality Check** - Thorough inspection\n6️⃣ **Handover** - Your dream space delivered!\n\nTypical timeline: 45-90 days",
        options: [{ id: "back", label: "← Back" }],
      },
      team: {
        message:
          "**Meet Our Expert Team** 👥\n\nThe talented people behind IncosBlueAura:\n\n👤 **Yoganand Goud. E** - CEO\n👤 **Kishore Kumar. B** - Co-Founder\n👤 **Varsha Reddy. L** - Design Director\n👤 **Naveen. G** - Sales Director\n👤 **Harish. E** - Sales Manager\n\nOur team brings together creativity, expertise, and passion for design.",
        options: [
          { id: "contact_service", label: "Work With Us" },
          { id: "back", label: "← Back" },
        ],
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
          "**Residential Projects** 🏠\n\nWe've designed beautiful homes across India including:\n\n• Modern Villa Interiors\n• Minimalist Living Spaces\n• Contemporary Kitchen Designs\n• Complete Apartment Renovations\n\nEach project reflects our commitment to quality and client satisfaction.",
        options: [
          { id: "view_all", label: "See Portfolio Page" },
          { id: "contact_service", label: "Start My Project" },
          { id: "back", label: "← Back" },
        ],
      },
      commercial_work: {
        message:
          "**Commercial Projects** 🏢\n\nOur commercial portfolio includes:\n\n• Tech Corporate Offices\n• Fine Dining Restaurants\n• Premium Retail Stores\n• Modern Co-working Spaces\n• Hospitality Interiors\n\nWe create spaces that enhance productivity and brand identity.",
        options: [
          { id: "view_all", label: "See Portfolio Page" },
          { id: "contact_service", label: "Discuss Commercial Project" },
          { id: "back", label: "← Back" },
        ],
      },
      luxury_work: {
        message:
          "**Luxury Projects** 💎\n\nExperience opulence in our luxury projects:\n\n• Regal Penthouse Suites\n• High-end Villa Interiors\n• Premium Apartments\n• Luxury Hotel Suites\n\nFeaturing premium materials, custom furniture, and impeccable craftsmanship.",
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
      { id: "traditional", label: "Traditional" },
      { id: "art_deco", label: "Art Deco" },
      { id: "vintage", label: "Vintage" },
      { id: "scandinavian", label: "Scandinavian" },
      { id: "minimalist", label: "Minimalist" },
      { id: "modern", label: "Modern" },
      { id: "contemporary", label: "Contemporary" },
      { id: "mediterranean", label: "Mediterranean" },
      { id: "bohemian", label: "Bohemian" },
      { id: "rustic", label: "Rustic" },
      { id: "shabby_chic", label: "Shabby Chic" },
    ],
    answers: {
      traditional: {
        message:
          "**Traditional Style** 🏛️\n\nTimeless elegance meets classic comfort:\n\n✓ Rich wood tones & ornate detailing\n✓ Warm colour palettes\n✓ Classic architectural elements\n✓ Symmetrical layouts\n✓ Luxurious fabrics and textures\n\n**Color Palette:** Saddle Brown, Tan, Dark Red, Dark Green\n\nBring timeless sophistication to your home!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      art_deco: {
        message:
          "**Art Deco** ✨\n\nGlamorous and bold, inspired by the roaring 1920s:\n\n✓ Bold geometric patterns\n✓ Luxurious materials & striking contrasts\n✓ Symmetrical, opulent forms\n✓ Metallic accents (gold, silver, brass)\n✓ Rich jewel-toned upholstery\n\n**Color Palette:** Black, Gold, Navy, Silver\n\nA celebration of opulence, symmetry, and artistic elegance!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      vintage: {
        message:
          "**Vintage Charm** 🕰️\n\nCelebrate nostalgia with timeless beauty:\n\n✓ Antique furniture pieces\n✓ Retro patterns and classic fabrics\n✓ Ornate mirrors and frames\n✓ Warm, earthy tones\n✓ Handcrafted details\n\n**Color Palette:** Tan, Chocolate, Sandy Brown, Dark Goldenrod\n\nBring stories of bygone eras to your home!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      scandinavian: {
        message:
          "**Scandinavian Style** 🏔️\n\nEmbracing Nordic simplicity and functionality:\n\n✓ Clean lines & natural materials\n✓ Light, neutral colour palettes\n✓ Minimalist furniture\n✓ Abundant natural light\n✓ Cozy hygge-inspired textiles\n\n**Color Palette:** White, Off-White, Warm Beige, Light Blue\n\nPerfect for creating serene, clutter-free spaces!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      minimalist: {
        message:
          "**Minimalist Design** ⚪\n\nLess is more:\n\n✓ Clean, uncluttered spaces\n✓ Monochromatic color schemes\n✓ Functional furniture with simple forms\n✓ Hidden storage solutions\n✓ Focus on quality over quantity\n\n**Color Palette:** White, Black, Gray, Off-White\n\nIdeal for modern, peaceful living.",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      modern: {
        message:
          "**Modern Design** 🏙️\n\nSleek, functional, and intentional:\n\n✓ Clean geometry & open floor plans\n✓ Restrained yet sophisticated palette\n✓ Mixed materials (glass, steel, wood)\n✓ Statement lighting & minimal decor\n✓ Form meets function in every detail\n\n**Color Palette:** Off-White, Charcoal, Steel Blue, Silver\n\nTimeless style that feels effortlessly current!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      contemporary: {
        message:
          "**Contemporary Design** 🌿\n\nCapturing the spirit of today:\n\n✓ Fluid, ever-evolving aesthetics\n✓ Borrows from multiple styles\n✓ Comfort with cutting-edge design\n✓ Organic shapes & mixed textures\n✓ Balanced, liveable spaces\n\n**Color Palette:** Light Gray, Dark Gray, Sage Green, Caramel\n\nFresh, relevant, and deeply liveable!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      mediterranean: {
        message:
          "**Mediterranean Style** 🌊\n\nSun-drenched and soulful, inspired by Southern Europe:\n\n✓ Warm earthy tones & terracotta\n✓ Mosaic tiles & textured walls\n✓ Flowing fabrics & arched doorways\n✓ Wrought iron accents\n✓ Lush greenery & natural stone\n\n**Color Palette:** Terracotta, Sandy Beige, Steel Blue, Saddle Brown\n\nA relaxed, luxurious ambience of seaside villas!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      bohemian: {
        message:
          "**Bohemian Style** 🌸\n\nFree-spirited and eclectic:\n\n✓ Layered textiles and global patterns\n✓ Rich jewel tones & mixed textures\n✓ Plants, natural elements & global artefacts\n✓ Vintage & handcrafted pieces\n✓ Soulful, uniquely personal spaces\n\n**Color Palette:** Wheat, Rosy Brown, Olive Green, Dark Brown\n\nCreate a space that defies convention and celebrates you!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      rustic: {
        message:
          "**Rustic Style** 🪵\n\nRooted in nature, warm and authentic:\n\n✓ Raw, natural wood & stone elements\n✓ Handcrafted & distressed finishes\n✓ Cozy, grounded atmosphere\n✓ Earthy colour palette\n✓ Deeply connected to the natural world\n\n**Color Palette:** Dark Goldenrod, Sienna, Tan, Dark Olive Green\n\nBring the warmth of the outdoors inside!",
        options: [
          { id: "contact_service", label: "Get This Theme" },
          { id: "back", label: "← Back to Themes" },
        ],
      },
      shabby_chic: {
        message:
          "**Shabby Chic** 🌷\n\nSoft romance and vintage comfort:\n\n✓ Soft, muted pastel colors\n✓ Distressed & whitewashed furniture\n✓ Floral patterns and lace details\n✓ Vintage accessories & mirrors\n✓ Cozy, romantic atmosphere\n\n**Color Palette:** Soft White, Blush Pink, Mint, Lavender\n\nCreate a charming, effortlessly elegant space!",
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
          "**WhatsApp Chat** 💬\n\nGet quick responses on WhatsApp:\n\n📱 **WhatsApp:** +91-8142156456\n\nClick the WhatsApp button (bottom right) to start chatting instantly!\n\nShare images, ask questions, get quotes - all on WhatsApp.",
        options: [{ id: "back", label: "← Back to Contact Options" }],
      },
      email: {
        message:
          "**Email Us** 📧\n\nSend detailed project requirements:\n\n✉️ **Email:** incosblueaura@gmail.com\n\n⏱️ **Response Time:** Within 24 hours\n\nInclude photos, plans, or inspiration images for better assistance!",
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
      { id: "warranty", label: "Warranty on Work?" },
      { id: "customise", label: "Can I Customise?" },
      { id: "package", label: "What's Included?" },
      { id: "commercial", label: "Commercial Projects?" },
    ],
    answers: {
      timeline: {
        message:
          "**How long does it take to complete a home interior project?** ⏱️\n\nA complete home interior project typically takes **45–60 days** depending on holidays and the size and complexity of your space.\n\nWe provide a detailed timeline during consultation and ensure timely delivery.",
        options: [
          { id: "contact_service", label: "Get a Consultation" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
      warranty: {
        message:
          "**Do you provide warranty on your interior work?** 🛡️\n\nYes, we provide up to **10 years warranty** on our interior works.",
        options: [{ id: "back", label: "← Back to FAQ" }],
      },
      customise: {
        message:
          "**Can I customise the designs according to my preferences?** 🎨\n\nAbsolutely! We specialise in **bespoke designs** tailored to your specific requirements, lifestyle, and aesthetic preferences.",
        options: [
          { id: "contact_service", label: "Start My Design" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
      package: {
        message:
          "**What is included in your interior design package?** 📋\n\nOur packages include:\n\n✓ Design consultation\n✓ 3D visualisations\n✓ Material procurement\n✓ Execution & installation\n✓ Post-installation support",
        options: [
          { id: "contact_service", label: "Get a Quote" },
          { id: "back", label: "← Back to FAQ" },
        ],
      },
      commercial: {
        message:
          "**Do you handle commercial interior projects?** 🏢\n\nYes! We have extensive experience in commercial interiors including:\n\n✓ Offices\n✓ Retail spaces\n✓ Restaurants\n✓ Hospitality projects",
        options: [
          { id: "contact_service", label: "Discuss Commercial Project" },
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
