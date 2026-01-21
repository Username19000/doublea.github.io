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
      badge: 'Starter',
      badgeClass: '',
      price: 5.00,
      priceDisplay: '$5.00',
      description: ' Start your journey with basic perks',
      image: null, // or 'images/resident.png'

      // Tebex package IDs (for purchasing)
      packageId: 7235170, // Replace with YOUR one-time package ID
      subscriptionId: null, // If you have subscription version

      // Custom perks (YOUR content)
      inGamePerks: [
        {
          text: '[Resident] prefix in chat and tab list',
          image: 'images/resident_gametag.png'  // ← Resident's own image
        },
        'Access to /hat command',
        'Access to /tpahere command',
        'Access to animation commands',
        'Ability to set up to 3 homes',
        'Ability to set up to 7 shops',
        'Ability to lock up to 15 blocks/entities',
        'Ability to claim up to 15 chunks'
      ],
      landPerks: [
        'Up to 15 chunk claims',
        'Basic land protection'
      ],
      discordPerks: [
        'Resident hoisted Discord role',
        'Access VIP Chat',
        'Access VIP Lounge',
        'Access Leaks channel'
      ]
    },
    {
      name: 'Merchant',
      icon: '💰',
      badge: 'Popular',
      badgeClass: 'popular',
      price: 10.00,
      priceDisplay: '$10.00',
      description: 'Enhanced trading and land abilities',
      image: null,
      packageId: 0, // YOUR PACKAGE ID
      subscriptionId: null,
      inGamePerks: [
        'All Resident perks',
        '[Merchant] prefix',
        '/back on death',
        '5 homes',
        '25 chunk claims'
      ],
      discordPerks: [
        'Merchant Discord role',
        'Priority support'
      ],
      landPerks: [
        'Up to 25 chunk claims',
        'Enhanced land protection'
      ]
    },
    {
      name: 'Pioneer',
      icon: '⚔️',
      badge: 'Premium',
      badgeClass: 'premium',
      price: 30.00,
      priceDisplay: '$30.00',
      priceSubscription: 8.00,
      priceSubscriptionDisplay: '$8.00/mo',
      description: 'Unlock advanced abilities',
      image: null,
      packageId: 0, // YOUR ONE-TIME PACKAGE ID
      subscriptionId: 0, // YOUR SUBSCRIPTION PACKAGE ID
      inGamePerks: [
        'All Merchant perks',
        '[Pioneer] prefix',
        'Weekly kit',
        '/workbench command',
        '10 homes',
        '50 chunk claims'
      ],
      discordPerks: [
        'Pioneer Discord role',
        'Access to exclusive channels'
      ],
      landPerks: [
        'Up to 50 chunk claims',
        'Advanced land features'
      ]
    },
    {
      name: 'Guardian',
      icon: '🛡️',
      badge: 'Premium',
      badgeClass: 'premium',
      price: 50.00,
      priceDisplay: '$50.00',
      priceSubscription: 12.00,
      priceSubscriptionDisplay: '$12.00/mo',
      description: 'Elite rank with powerful perks',
      image: null,
      packageId: 0,
      subscriptionId: 0,
      inGamePerks: [
        'All Pioneer perks',
        '[Guardian] prefix',
        'Enhanced weekly kit',
        'Keep XP on death',
        '20 homes',
        '75 chunk claims'
      ],
      discordPerks: [
        'Guardian Discord role',
        'Priority queue access'
      ],
      landPerks: [
        'Up to 75 chunk claims',
        'Premium land tools'
      ]
    },
    {
      name: 'Sovereign',
      icon: '👑',
      badge: 'Premium',
      badgeClass: 'premium',
      price: 75.00,
      priceDisplay: '$75.00',
      priceSubscription: 18.00,
      priceSubscriptionDisplay: '$18.00/mo',
      description: 'Supreme rank with exclusive abilities',
      image: null,
      packageId: 0,
      subscriptionId: 0,
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
      badge: 'Ultimate',
      badgeClass: 'premium',
      price: 100.00,
      priceDisplay: '$100.00',
      priceSubscription: 25.00,
      priceSubscriptionDisplay: '$25.00/mo',
      description: 'The ultimate rank with all perks',
      image: null,
      packageId: 0,
      subscriptionId: 0,
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