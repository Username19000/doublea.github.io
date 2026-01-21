// ========================================
// STORE CONFIGURATION
// ========================================

const STORE_CONFIG = {
  // Tebex Headless API Token (ONLY for purchasing)
  tebexPublicToken: '11c2h-d83f9a87902177a4fb436058df6ce2f2a0569c30',

  // Server details
  serverIp: 'play.doubleasmp.net',
  discordInvite: 'https://discord.com/invite/h2jQRcEYvs',

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
        'Ability to create a private VC with up to 10 other people',
        'Receive kit notifications in Discord',
        'Request a custom named role'
      ]
    },
    {
      name: 'Sentinel',
      icon: '👑',
      badge: '',
      badgeClass: '',
      price: 75.00,
      priceDisplay: '$75.00',
      priceSubscription: 18.00,
      priceSubscriptionDisplay: '$18.00/mo',
      description: 'Master the environment controlling time, weather, and storage.',
      image: null,
      packageId: 7235985,
      subscriptionId: 7235987,
      inGamePerks: [
        'All Guardian perks',
        '[Sovereign] prefix',
        'Keep inventory on death',
        '35 homes',
        '100 chunk claims',
        '/fly in claimed land'
      ],
      discordPerks: [
        'Sovereign Discord role',
        'Exclusive Sovereign lounge'
      ],
      landPerks: [
        'Up to 100 chunk claims',
        'Maximum land control'
      ]
    },
    {
      name: 'Overlord',
      icon: '⚡',
      badge: 'Best Value',
      badgeClass: 'popular',
      price: 100.00,
      priceDisplay: '$100.00',
      priceSubscription: 25.00,
      priceSubscriptionDisplay: '$25.00/mo',
      description: 'The ultimate rank with all perks',
      image: null,
      packageId: 7236047,
      subscriptionId: 7236050,
      inGamePerks: [
        'All Sovereign perks',
        '[Overlord] prefix',
        'Unlimited homes',
        '150 chunk claims',
        '/fly everywhere',
        'Custom join/quit messages',
        'All cosmetics'
      ],
      discordPerks: [
        'Overlord Discord role',
        'Special Overlord badge',
        'All Discord perks'
      ],
      landPerks: [
        'Up to 150 chunk claims',
        'Complete land mastery'
      ]
    }
  ],

  crates: [
    {
      name: 'Common Crate Key',
      icon: '📦',
      badge: null,
      badgeClass: '',
      price: 2.50,
      priceDisplay: '$2.50',
      description: 'Basic resources and small chance at rare items',
      packageId: 0, // YOUR PACKAGE ID
      subscriptionId: null
    },
    {
      name: 'Rare Crate Key',
      icon: '💎',
      badge: 'Popular',
      badgeClass: 'popular',
      price: 5.00,
      priceDisplay: '$5.00',
      description: 'Better rewards and higher rare item chances',
      packageId: 0,
      subscriptionId: null
    },
    {
      name: 'Legendary Crate Key',
      icon: '⭐',
      badge: 'Premium',
      badgeClass: 'premium',
      price: 10.00,
      priceDisplay: '$10.00',
      description: 'Epic loot and exclusive items',
      packageId: 0,
      subscriptionId: null
    }
  ],

  cosmetics: [
    {
      name: 'Particle Effects',
      icon: '✨',
      badge: null,
      badgeClass: '',
      price: 5.00,
      priceDisplay: '$5.00',
      description: 'Unique visual effects that follow you',
      packageId: 0,
      subscriptionId: null
    },
    {
      name: 'Pet Companion',
      icon: '🐾',
      badge: 'Popular',
      badgeClass: 'popular',
      price: 7.50,
      priceDisplay: '$7.50',
      description: 'Cosmetic pet that follows you around',
      packageId: 0,
      subscriptionId: null
    },
    {
      name: 'Chat Colors',
      icon: '🎨',
      badge: null,
      badgeClass: '',
      price: 3.00,
      priceDisplay: '$3.00',
      description: 'Custom chat color formatting',
      packageId: 0,
      subscriptionId: null
    }
  ]
};

// Export for use in store.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORE_CONFIG;
}