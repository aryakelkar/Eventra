# EcoGrowth - Organic Products E-Commerce Website

A clean, professional, and responsive e-commerce website for organic farming products including vermicompost, vermiwash, and activated charcoal.

## 📁 Files Included

1. **index.html** - Home page with hero banner and featured products
2. **shop.html** - Shop page with product grid
3. **product-detail.html** - Individual product detail page
4. **about.html** - About Us page with company information
5. **contact.html** - Contact page with form
6. **cart.html** - Shopping cart page
7. **styles.css** - Complete stylesheet
8. **script.js** - JavaScript for cart functionality and interactions

## 🎨 Design Features

- **Color Theme**: Earthy green (#3c5a31) and white (#fff)
- **Font**: Poppins (with Arial fallback)
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive Elements**: Hover effects, smooth transitions, animations
- **Modern UI**: Clean spacing, shadows, and professional layout

## 🚀 How to Use

1. **Download all files** to the same folder
2. **Open index.html** in your web browser to view the website
3. **Navigate** between pages using the header menu
4. **Test cart functionality** by adding products and viewing the cart

## 📱 Pages Overview

### Home Page (index.html)
- Hero banner with call-to-action
- Featured products section
- Sticky navigation header
- Footer with company info

### Shop Page (shop.html)
- Grid layout with 9 products
- Product cards with images and prices
- "Add to Cart" functionality
- Responsive grid that adapts to screen size

### Product Detail Page (product-detail.html)
- Large product image
- Detailed product information
- Benefits and usage instructions
- Quantity selector
- Dynamic content loading based on URL parameter

### About Us Page (about.html)
- Company mission and vision
- Product information
- Benefits of organic farming
- Call-to-action buttons

### Contact Page (contact.html)
- Contact form with validation
- Name, Email, Phone, Subject, and Message fields
- Contact information display
- Form submission handling

### Cart Page (cart.html)
- Shopping cart table
- Quantity adjustment controls
- Remove item functionality
- Grand total calculation
- Proceed to checkout button
- Empty cart handling

## 💻 Technical Features

### JavaScript Functionality
- **Cart Management**: Add, remove, update quantities
- **LocalStorage**: Persistent cart across page reloads
- **Mobile Menu**: Toggle navigation for small screens
- **Notifications**: Visual feedback when items are added
- **Form Validation**: Email and required field validation

### Responsive Design
- **Desktop**: Full layout with sidebar navigation
- **Tablet**: Adjusted grid and spacing
- **Mobile**: Single column layout, hamburger menu
- **Breakpoints**: 768px and 480px

### CSS Features
- **Flexbox & Grid**: Modern layout techniques
- **Transitions**: Smooth hover effects
- **Shadows**: Depth and visual hierarchy
- **Custom Properties**: Easy theme customization

## 🛠️ Customization

### Change Colors
Edit the color values in `styles.css`:
```css
background-color: #3c5a31;  /* Main green */
color: #fff;                /* White text */
```

### Add Products
Add new product cards in `shop.html`:
```html
<div class="product-card">
    <img src="image-url" alt="Product Name">
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Description</p>
        <div class="product-price">₹Price</div>
        <button class="btn" onclick="addToCart('Name', Price, 'image-url')">Add to Cart</button>
    </div>
</div>
```

### Modify Images
Replace Unsplash URLs with your own product images:
- Current images are placeholder images from Unsplash
- Use your own image URLs or local images
- Recommended size: 500x500px or larger

## 📦 Cart Functionality

The cart system uses browser localStorage to persist data:
- Items are stored as JSON
- Cart count updates automatically
- Quantity controls work seamlessly
- Removes items individually
- Calculates totals in real-time

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera
- Mobile browsers

## 📝 Notes

- Images are currently using Unsplash placeholder links
- Contact form shows alert (replace with actual backend API)
- Checkout is simulated (integrate payment gateway for production)
- Cart data is stored locally (implement backend for multi-device sync)

## 🔮 Future Enhancements

- Backend API integration
- User authentication
- Payment gateway integration
- Product reviews and ratings
- Search and filter functionality
- Wishlist feature
- Order history
- Email notifications

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

For questions or issues, please contact through the website's contact form.

---

**EcoGrowth** - Grow Green, Grow Organic 🌱