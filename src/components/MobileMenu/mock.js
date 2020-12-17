export default {
  account: {
    children: [
      {
        label: 'My Profile',
        url: '/profile/yourprofile'
      },
      {
        label: 'Store Credits',
        url: '/profile/available'
      },
      {
        label: 'My Orders',
        url: '/profile/history'
      },
      {
        label: 'Wishlist',
        url: '/profile/wish-list'
      },
      {
        label: 'Shipping info',
        url: '/profile/shipping-info'
      },
      {
        label: 'Gift Card Balance',
        url: '/profile/gift-card-balance'
      }
    ],
    label: 'account',
    slug: 'account'
  },
  main: [
    {
      children: [
        {
          label: 'Trending',
          type: 'subtitle'
        },
        {
          label: 'New Arrivals',
          url: '/shop/new-arrivals'
        },
        {
          label: 'Best Sellers',
          url: '/shop/t/type/best-sellers'
        },
        {
          label: 'Leaving Soon',
          url: '/shop/t/type/leaving-soon'
        },
        {
          label: 'Coming Soon',
          url: '/coming-soon'
        },
        {
          label: 'Shop Insta',
          url: '/styles'
        },
        {
          label: 'Everyday Diamonds',
          url: '/shop/t/type/everyday'
        },
        {
          label: 'Zodiac',
          url: '/shop/t/type/zodiac'
        },
        {
          label: 'Categories',
          type: 'subtitle'
        },
        {
          label: 'Earrings',
          url: '/shop/t/type/earrings'
        },
        {
          label: 'Single Earrings',
          url: '/shop/t/type/single-earrings'
        },
        {
          label: 'Necklaces',
          url: '/shop/t/type/pendants'
        },
        {
          label: 'Rings',
          url: '/shop/t/type/rings'
        },
        {
          label: 'Bracelets + Anklets',
          url: '/shop/t/type/bracelets'
        },
        {
          label: 'Shop All',
          url: '/shop/t/type'
        },
        {
          label: 'Wedding',
          type: 'subtitle'
        },
        {
          label: 'Engagement Rings',
          url: '/shop/t/engagement-rings'
        },
        {
          label: "Women's Wedding Bands",
          url: '/shop/t/wedding-bands'
        },
        {
          label: "Men's Wedding Bands",
          url: '/shop/t/mens-wedding-bands'
        },
        {
          label: 'Lifestyle',
          type: 'subtitle'
        },
        {
          label: 'Travel Case',
          url: '/shop/products/travel-case'
        },
        {
          label: 'Jewlery Box',
          url: '/shop/products/jewelry-box-beige'
        },
        {
          label: 'Monthly Horoscope',
          url: '/info/horoscope'
        },
        {
          label: 'Piercing',
          posOnly: true,
          url: '/shop/products/piercing'
        }
      ],
      label: 'shop',
      slug: 'shop'
    },
    {
      children: [
        {
          label: 'By Category',
          type: 'subtitle'
        },
        {
          label: "Valentine's Gift Guide",
          url: '/info/giftguide'
        },
        {
          label: 'Most Gifted',
          url: '/collection/495-gifts'
        },
        {
          label: 'Personalized',
          url: '/collection/66-the-engravables'
        },
        {
          label: 'Gift Cards',
          url: '/shop/products/digital-giftcard'
        },
        {
          label: 'By Price',
          type: 'subtitle'
        },
        {
          label: 'Under $150',
          url: '/collection/207-under-150'
        },
        {
          label: 'Under $250',
          url: '/collection/510-under-250'
        }
      ],
      label: 'gifts',
      slug: 'gifts'
    },
    {
      children: [
        {
          label: 'Our Story',
          url: '/about-us'
        },
        {
          label: 'Fair Pricing',
          url: '/fair-pricing'
        },
        {
          label: 'Our Jewellers',
          url: '/behind-the-fine'
        },
        {
          label: 'Material and Care',
          url: '/materials'
        }
      ],
      label: 'about',
      slug: 'about'
    },
    {
      children: [
        {
          label: 'Stores',
          type: 'subtitle'
        },
        {
          label: 'New York',
          url: '/irl/new-york'
        },
        {
          label: 'Los Angeles',
          url: '/irl/losangeles'
        },
        {
          label: 'San Francisco',
          url: '/locations/san-francisco'
        },
        {
          label: 'Toronto',
          url: '/irl/toronto'
        },
        {
          label: 'Events',
          type: 'subtitle'
        },
        {
          label: 'Piercing Studio',
          url: '/info/piercing-studio'
        }
      ],
      label: 'visit us',
      slug: 'visit-us'
    }
  ],
  stylingHelp: {
    caption: 'Chat with our stylist experts in person or digitally',
    label: 'Styling Help',
    linkText: 'Book Now!',
    url: '/info/styling-appointments'
  },
  support: {
    children: [
      {
        label: 'Shipping',
        url: 'https://mejuri.com/faqs#shipping'
      },
      {
        label: 'Updating my order',
        url: 'https://mejuri.com/faqs#updating_my_order'
      },
      {
        label: 'Returns + Exchanges',
        url: 'https://mejuri.com/faqs#returns_exchanges'
      },
      {
        label: 'Materials and Care',
        url: 'https://mejuri.com/materials'
      },
      {
        label: 'Ring Sizer',
        url: 'https://mejuri.com/ring-sizer'
      },
      {
        label: 'FAQ',
        url: 'https://mejuri.com/faqs'
      }
    ],
    label: 'support',
    slug: 'support'
  }
}
