# GSM World Wireless - Enterprise Electronics Wholesale Platform

> A high-performance, scalable e-commerce platform built specifically for electronics wholesale businesses, featuring advanced search capabilities, real-time inventory management, and B2B-optimized user experience.

## 🚀 Overview

GSM World Wireless is a modern, enterprise-grade e-commerce platform designed specifically for electronics wholesale distributors. Built on Next.js 15 with Shopify as the commerce backend and Algolia for lightning-fast search, this platform delivers the performance and features needed to handle large electronics catalogs with thousands of products, complex filtering requirements, and high-volume B2B transactions.

### 🎯 Perfect For Electronics Wholesale

- **Large Product Catalogs**: Handle thousands of electronics components, accessories, and devices
- **Complex Filtering**: Advanced search by specifications, compatibility, frequency bands, connectivity
- **Real-time Inventory**: Live stock levels across multiple warehouses and suppliers
- **Bulk Pricing**: B2B pricing tiers and volume discounts
- **Technical Specifications**: Detailed product attributes for electronics components
- **Quick Search**: Instant search across model numbers, part numbers, and technical specs

## 🏗️ Technical Architecture

### Core Technologies

| Component            | Technology              | Purpose                                           |
| -------------------- | ----------------------- | ------------------------------------------------- |
| **Frontend**         | Next.js 15 + React 18   | Modern React framework with App Router            |
| **Styling**          | Tailwind CSS + Radix UI | Utility-first CSS with accessible components      |
| **Commerce Backend** | Shopify                 | Product data, inventory, orders, customers        |
| **Search Engine**    | Algolia                 | Fast search, filtering, faceting, recommendations |
| **State Management** | Zustand                 | Lightweight, scalable state management            |
| **Forms**            | React Hook Form + Zod   | Type-safe form handling and validation            |
| **Deployment**       | Vercel                  | Global CDN, edge functions, analytics             |

### Performance Optimizations

- **ISR/SSG**: Static generation for product pages, ISR for dynamic content
- **Edge Caching**: Global CDN distribution for instant loading worldwide
- **Bundle Analysis**: Built-in bundle analyzer for optimization
- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Automatic route-based and component-based splitting

## ✨ Key Features

### 🔍 Advanced Search & Filtering

- **Instant Search**: Sub-second search across entire catalog
- **Technical Filters**: Filter by frequency bands, connectivity, compatibility
- **Smart Suggestions**: Autocomplete with product model numbers
- **Typo Tolerance**: Fuzzy search for part numbers and model names
- **Category Faceting**: Multi-level electronics categorization

### 📦 Inventory Management

- **Real-time Stock**: Live inventory from multiple suppliers
- **Bulk Operations**: Quantity-based pricing and availability
- **Supplier Integration**: Multi-vendor inventory aggregation
- **Stock Alerts**: Low inventory notifications and automated reordering

### 🛒 B2B Commerce Features

- **Bulk Pricing**: Tiered pricing based on order volume
- **Quick Order**: Upload CSV files for bulk ordering
- **Saved Carts**: Save and share cart configurations
- **Account Management**: B2B account hierarchies and permissions

### 📊 Electronics-Specific Features

- **Technical Specs**: Detailed specifications for all products
- **Compatibility Matrix**: Product compatibility information
- **Documentation**: Download manuals, datasheets, certificates
- **Certification Badges**: Compliance and certification indicators

## 🚦 Quick Start

### Prerequisites

- Node.js 20.11.1 or higher
- Shopify store with Admin API access
- Algolia account with search indices

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yasser/gsm-world-wireless.git
   cd gsm-world-wireless/starters/shopify-algolia
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   # Shopify Configuration
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_token
   SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_token
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com

   # Algolia Configuration
   ALGOLIA_APP_ID=your_algolia_app_id
   ALGOLIA_PRODUCTS_INDEX=electronics_products
   ALGOLIA_CATEGORIES_INDEX=electronics_categories
   ALGOLIA_WRITE_API_KEY=your_write_api_key
   ```

4. **Run development server**

   ```bash
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

### Production Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yasser/gsm-world-wireless)

## 📁 Project Structure

```
starters/shopify-algolia/
├── app/                    # Next.js App Router pages
│   ├── (browse)/          # Main browsing routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── product/           # Product-specific components
│   └── filters/           # Search and filter components
├── lib/                   # Core business logic
│   ├── algolia/           # Search functionality
│   ├── shopify/           # Commerce integration
│   └── utils/             # Helper functions
├── stores/                # Zustand state stores
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🔧 Configuration

### Algolia Setup

1. Create indices for products, categories, and reviews
2. Configure searchable attributes for electronics products
3. Set up faceting for brands, categories, specifications
4. Enable typo tolerance and synonyms

### Shopify Integration

1. Enable Admin API and Storefront API
2. Configure webhooks for inventory updates
3. Set up product metafields for technical specifications
4. Configure B2B pricing and customer segmentation

## 📈 Performance Metrics

- **Search Response**: <100ms average response time
- **Page Load**: <2s first contentful paint
- **Core Web Vitals**: 95+ scores across all pages
- **SEO**: Perfect Lighthouse SEO scores
- **Mobile**: Optimized for mobile B2B purchasing

## 🧪 Development

### Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build           # Build for production
yarn start           # Start production server

# Testing
yarn test            # Run Jest tests
yarn e2e             # Run Playwright e2e tests

# Code Quality
yarn lint            # Run ESLint
yarn prettier:fix    # Format code

# Data Management
yarn codegen         # Generate GraphQL types
yarn sync            # Sync Shopify data to Algolia
```

### Testing Strategy

- **Unit Tests**: Jest for component and utility testing
- **E2E Tests**: Playwright for critical user journeys
- **Integration Tests**: API route and data flow testing
- **Performance Testing**: Lighthouse and Web Vitals monitoring

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on git push

### Manual Deployment

```bash
# Build the application
yarn build

# Start production server
yarn start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for the electronics wholesale community
