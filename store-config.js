// ========================================
// STORE CONFIGURATION
// ========================================

const STORE_CONFIG = {
  // Tebex Headless API Token (ONLY for purchasing)
  tebexPublicToken: '11c2h-d83f9a87902177a4fb436058df6ce2f2a0569c30',

  // Server details
  serverIp: 'play.doubleasmp.net',
  discordInvite: 'https://discord.com/invite/h2jQRcEYvs',


  // Community Stats Configuration
  communityStats: {
    enabled: true, // Set to false to hide the community stats section
    monthlyGoal: 15.00, // Monthly server maintenance goal in dollars
    // Update these values manually or connect to your backend
    currentProgress: 0.00, // Current month's progress towards goal
    topCustomer: {
      username: 'Example_User', // Top customer's Minecraft username
      // Minecraft UUID for skin rendering (optional, will use username if not provided)
      uuid: '8667ba71b85a4004af54457a9734eed7'
    }
  },

  // Tebex Checkout Theme
  tebexTheme: {
    theme: 'dark',
    colors: [
      { name: "primary", color: "#01a1a4" },
      { name: "secondary", color: "#f2b841" }
    ]
  },
  // Define YOUR packages with YOUR layout
  ranks: [
    {
      // Display info (YOU control this)
      name: 'Resident',
      icon: '🌱',
      badge: '',
      badgeClass: '',
      price: 5.00,
      priceDisplay: '$5.00',
      description: ' Start your journey with basic perks',
      image: 'images/Resident_Logo.png', // or 'images/resident.png'

      // Tebex package IDs (for purchasing)
      packageId: 7235170, // Replace with YOUR one-time package ID
      subscriptionId: null, // If you have subscription version

      // Custom perks (YOUR content)
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Resident_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit resident',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Set up to 3 homes',
        'Set up to 7 shops',
        'Lock up to 15 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 5 lands',
        'Claim up to 15 chunks in your land to start',
        'Have up to 25 members in your land',
        'Have up to 7 areas in your land',
        'Have up to 9 roles in your land',
        'Grant 7 additional claimable chunks to each land you are in'
        
      ],
      discordPerks: [
        'Resident hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Ability to screenshare',
        'Ability to send images in #general'
      ]
    },
    {
      name: 'Merchant',
      icon: '💰',
      badge: '',
      badgeClass: '',
      price: 10.00,
      priceDisplay: '$10.00',
      description: 'Level up with cosmetic upgrades',
      image: 'images/Merchant_Logo.png',
      packageId: 7235226, // YOUR PACKAGE ID
      subscriptionId: null,
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Merchant_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit merchant',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Access to /craft to use a virtual table',
        'Access to /nick to set an in-game nickname',
        'Set up to 5 homes',
        'Set up to 10 shops',
        'Lock up to 20 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 7 lands',
        'Claim up to 15 chunks in your land to start',
        'Have up to 25 members in your land',
        'Have up to 7 areas in your land',
        'Have up to 9 roles in your land',
        'Grant 7 additional claimable chunks to each land you are in'
        
      ],
      discordPerks: [
        'Merchant hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Ability to screenshare',
        'Ability to send images in #general',
        'Ability to send in-game messages through Discord',
        'Receive kit notifications in Discord'
      ]
    },
    {
      name: 'Pioneer',
      icon: '⚔️',
      badge: '',
      badgeClass: '',
      price: 30.00,
      priceDisplay: '$30.00',
      priceSubscription: 10.00,
      priceSubscriptionDisplay: '$10.00/mo',
      description: 'Stand out with colors and text formatting',
      image: 'images/Pioneer_Logo.png',
      packageId: 7235232, // YOUR ONE-TIME PACKAGE ID
      subscriptionId: 7235252, // YOUR SUBSCRIPTION PACKAGE ID
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Pioneer_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit pioneer',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Access to /craft to use a virtual table',
        'Access to /nick to set a colored in-game nickname',
        'Access to /trash to access a virtual can',
        'Ability to use colors and formatting on signs',
        'Set up to 10 homes',
        'Set up to 15 shops',
        'Lock up to 25 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 10 lands',
        'Claim up to 20 chunks in your land to start',
        'Have up to 30 members in your land',
        'Have up to 10 areas in your land',
        'Have up to 18 roles in your land',
        'Grant 10 additional claimable chunks to each land you are in'
        
      ],
      discordPerks: [
        'Pioneer hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Access to High-Tier Lounge',
        'Ability to screenshare',
        'Ability to send images in #general',
        'Ability to send in-game messages through Discord',
        'Ability to create a private VC with up to 5 other people',
        'Receive kit notifications in Discord'
      ]
    },
    {
      name: 'Guardian',
      icon: '🛡️',
      badge: 'Most Popular',
      badgeClass: 'popular',
      price: 45.00,
      priceDisplay: '$45.00',
      priceSubscription: 15.00,
      priceSubscriptionDisplay: '$15.00/mo',
      description: 'Access portable workstations hop on players',
      image: 'images/Guardian_Logo.png',
      packageId: 7235281,
      subscriptionId: 7235286,
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Guardian_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit guardian',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Access to /craft to use a virtual table',
        'Access to /nick to set a colored in-game nickname',
        'Access to /trash to access a virtual can',
        'Access to /anvil, /grindstone, /stonecutter, /loom, /smithtable use virtual menus',
        'Access to /condense to quickly turn all nuggets and ingots into blocks',
        'Access to a shortened /spawn timer (3s)',
        'Ability to use colors and formatting on signs',
        'Ability to ride ontop of other players',
        'Set up to 15 homes',
        'Set up to 20 shops',
        'Lock up to 30 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 15 lands',
        'Claim up to 20 chunks in your land to start',
        'Have up to 30 members in your land',
        'Have up to 10 areas in your land',
        'Have up to 18 roles in your land',
        'Grant 10 additional claimable chunks to each land you are in'
        
      ],
      discordPerks: [
        'Guardian hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Access to High-Tier Lounge',
        'Ability to screenshare',
        'Ability to send images in #general',
        'Ability to send in-game messages through Discord',
        'Ability to create a private VC with up to 15 other people',
        'Receive kit notifications in Discord',
        'Request a custom named role'
      ]
    },
    {
      name: 'Sentinel',
      icon: '👑',
      badge: '',
      badgeClass: '',
      price: 60.00,
      priceDisplay: '$60.00',
      priceSubscription: 20.00,
      priceSubscriptionDisplay: '$20.00/mo',
      description: 'Master time, weather, and storage',
      image: 'images/Sentinel_Logo.png',
      packageId: 7235985,
      subscriptionId: 7235987,
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Sentinel_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit sentinel',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Access to /craft to use a virtual table',
        'Access to /nick to set a colored in-game nickname',
        'Access to /trash to access a virtual can',
        'Access to /anvil, /grindstone, /stonecutter, /loom, /smithtable use virtual menus',
        'Access to /condense to quickly turn all nuggets and ingots into blocks',
        'Access to bypass /spawn timer',
        'Access to /ptime and /pweather to change your surroundings',
        'Access to /enderchest to access your ender chest from anywhere',
        'Ability to use colors and formatting on signs',
        'Ability to ride ontop of other players',
        'Ability to store player XP in bottles',
        'Set up to 20 homes',
        'Set up to 30 shops',
        'Lock up to 35 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 20 lands',
        'Claim up to 30 chunks in your land to start',
        'Have up to 40 members in your land',
        'Have up to 10 areas in your land',
        'Have up to 18 roles in your land',
        'Grant 13 additional claimable chunks to each land you are in'
        
      ],
      discordPerks: [
        'Sentinel hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Access to High-Tier Lounge',
        'Ability to screenshare',
        'Ability to send images in #general',
        'Ability to send in-game messages through Discord',
        'Ability to create a private VC with up to 25 other people',
        'Receive kit notifications in Discord',
        'Request a custom named role as your highest role'
      ]
    },
    {
      name: 'Overlord',
      icon: '⚡',
      badge: 'Best Value',
      badgeClass: 'popular',
      price: 75.00,
      priceDisplay: '$75.00',
      priceSubscription: 25.00,
      priceSubscriptionDisplay: '$25.00/mo',
      description: 'Rule with maximum limits and perks',
      image: 'images/Overlord_Logo.png',
      packageId: 7236047,
      subscriptionId: 7236050,
      inGamePerks: [
        {
          text: 'prefix in chat and tab list',
          image: 'images/Overlord_GameTag.png'  // ← Resident's own image
        },
        'Access to /kit overlord',
        'Access to /hat to put any item/block on your head',
        'Access to /tpahere to bring players to you',
        'Access to all animation commands to sit, lie, or crawl anywhere',
        'Access to /craft to use a virtual table',
        'Access to /nick to set a colored in-game nickname',
        'Access to /trash to access a virtual can',
        'Access to /anvil, /grindstone, /stonecutter, /loom, /smithtable use virtual menus',
        'Access to /condense to quickly turn all nuggets and ingots into blocks',
        'Access to bypass /spawn timer',
        'Access to /ptime and /pweather to change your surroundings',
        'Access to /enderchest to access your ender chest from anywhere',
        'Ability to use colors and formatting on signs',
        'Ability to ride ontop of other players',
        'Ability to store player XP in bottles',
        'Set up to 30 homes',
        'Set up to 40 shops',
        'Lock up to 40 blocks/entities',
      ],

      landPerks: [
        'Be a member of up to 25 lands',
        'Claim up to 40 chunks in your land to start',
        'Have up to 50 members in your land',
        'Have up to 15 areas in your land',
        'Have up to 18 roles in your land',
        'Grant 15 additional claimable chunks to each land you are in',
        'Rule over two lands simultaneously'
        
      ],
      discordPerks: [
        'Overlord hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel',
        'Access to priority support',
        'Access to High-Tier Lounge',
        'Ability to screenshare',
        'Ability to send images in #general',
        'Ability to send in-game messages through Discord',
        'Ability to create a private VC with no person limit',
        'Receive kit notifications in Discord',
        'Request two custom named roles as your highest roles'
      ]
    }
  ],

  crates: [
    {
      name: '(1x) Cash Crate #1 Key',
      icon: '📦',
      image: 'images/DollarCrate1Key.png', // or 'images/common_crate.png'
      badge: '',
      badgeClass: '',
      price: 15.00,
      priceDisplay: '$15.00',
      description: 'Get a random tier of the highest level farm',
      modalDescription: 'Unlock a random tier of our highest-level farm! This key grants you access to receive a farm that is over 20x better than the Level 1 Farm!',
      packageId: 7236791, // YOUR PACKAGE ID
      subscriptionId: null
    },
    {
      name: '(3x) Cash Crate #1 Key',
      icon: '💎',
      image: 'images/3DollarCrate1Key.png', // or 'images/rare_crate.png'
      badge: 'Best Value',
      badgeClass: 'popular',
      price: 37.50,
      priceDisplay: '$37.50',
      description: 'Get more keys for over 15% off!',
      modalDescription: 'Get more keys while saving over 15% on your purchase! These keys grants you access to receive a farm that is over 20x better than the Level 1 Farm!',
      packageId: 7239282,
      subscriptionId: null
    }
  ],

/*  cosmetics: [
    {
      name: 'Particle Effects',
      icon: '✨',
      image: null, // or 'images/particles.png'
      badge: null,
      badgeClass: '',
      price: 5.00,
      priceDisplay: '$5.00',
      description: 'Unique visual effects that follow you',
      modalDescription: 'Stand out with stunning particle effects! Choose from a variety of visual effects that follow you wherever you go, making your presence known on the server.',
      packageId: 0,
      subscriptionId: null
    },
    {
      name: 'Pet Companion',
      icon: '🐾',
      image: null, // or 'images/pet.png'
      badge: 'Popular',
      badgeClass: 'popular',
      price: 7.50,
      priceDisplay: '$7.50',
      description: 'Cosmetic pet that follows you around',
      modalDescription: 'Never adventure alone! Get your own loyal cosmetic pet companion that will follow you on all your journeys. Choose from various adorable creatures.',
      packageId: 0,
      subscriptionId: null
    },
    {
      name: 'Chat Colors',
      icon: '🎨',
      image: null, // or 'images/chat_colors.png'
      badge: null,
      badgeClass: '',
      price: 3.00,
      priceDisplay: '$3.00',
      description: 'Custom chat color formatting',
      modalDescription: 'Express yourself with custom chat colors! Make your messages stand out with unique color combinations and formatting options.',
      packageId: 0,
      subscriptionId: null
    }
  ]

*/

};

// Export for use in store.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORE_CONFIG;
}