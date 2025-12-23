# NG Ice Cream Website

## 📝 How to Update Your Website Content

### Understanding the Config File

Everything you see on the website is controlled by **one file**: `config/siteConfig.json`

This file contains:
- 🏢 Business information (name, phone, email, address)
- 🍦 Ice cream products and prices
- 🖼️ Images (logo, banners, product photos)
- 📱 Social media links
- ⭐ Best sellers
- 📍 Store locations

### Step-by-Step: How to Edit Content

#### 1. **Open the Config File**

Navigate to: `config/siteConfig.json`

#### 2. **Find What You Want to Change**

The file is organized into sections:

```json
{
  "businessInfo": { ... },      // Company name, contact info
  "home": { ... },              // Homepage content
  "flavours": { ... },          // Product listings
  "stores": { ... },            // Store locations
  "about": { ... },             // About page
  "contact": { ... }            // Contact page
}
```

#### 3. **Make Your Changes**

**Example: Change Business Name**
```json
"businessInfo": {
  "name": "NG Ice Cream",  // ← Change this text
  "phone": "+91 1234567890"
}
```

**Example: Update a Price**
```json
{
  "img": "kesar.jpeg",
  "label": "Kesar Ilichi",
  "rate": "₹20"  // ← Change this price
}
```

#### 4. **Save the File**

Press `Cmd+S` (Mac) or `Ctrl+S` (Windows)

#### 5. **See Your Changes**

The website will automatically refresh in your browser! 🎉

---

## 🍦 How to Add/Edit Ice Cream Products

### Adding a New Product

1. **Add the image** to `config/img/ice-creams/` folder
2. **Edit** `config/siteConfig.json`
3. **Find** the `flavours` section
4. **Add** your product:

```json
"products": [
  {
    "img": "your-image.jpeg",     // ← Filename (must match exactly!)
    "label": "Your Flavor Name",  // ← Display name
    "rate": "₹30"                 // ← Price
  }
]
```

### ⚠️ Important: Image Filenames

The `"img"` value **must exactly match** your image filename:
- ✅ Correct: `"kesar.jpeg"` (matches `config/img/ice-creams/kesar.jpeg`)
- ❌ Wrong: `"Kesar.jpeg"` (capital K doesn't match)
- ❌ Wrong: `"kesar.jpg"` (wrong extension)

**Tip**: Copy the exact filename from your file explorer!

### Product Categories

Products are organized into categories:

```json
"categories": [
  {
    "id": "regular",
    "label": "Regular",
    "products": [ ... ]  // ← Add products here
  },
  {
    "id": "monsoon",
    "label": "Seasonal (Monsoon)",
    "products": [ ... ]  // ← Or here
  }
]
```

---

## 🖼️ How to Add/Change Images

### Image Locations

All images go in the `config/img/` folder:

```
config/img/
├── logo.png              // Company logo
├── banner/
│   └── banner.jpeg       // Homepage banner
└── ice-creams/
    ├── kesar.jpeg        // Product images
    ├── chocolate.jpeg
    └── ...
```

### Adding a New Product Image

**Step 1:** Copy your image to `config/img/ice-creams/`

**Step 2:** Note the **exact filename** (including extension)

**Step 3:** Update `config/siteConfig.json`:

```json
{
  "img": "your-exact-filename.jpeg",  // ← Use exact filename!
  "label": "Your Product Name",
  "rate": "₹30"
}
```

### Changing the Logo

1. Replace `config/img/logo.png` with your new logo
2. Keep the same filename `logo.png`, OR
3. Update the config:

```json
"businessInfo": {
  "logo": "/config/img/your-new-logo.png"
}
```

### Changing Banner Images

Replace files in `config/img/banner/` or update the config:

```json
"home": {
  "banner": {
    "images": [
      "/config/img/banner/banner1.jpeg",
      "/config/img/banner/banner2.jpeg"
    ]
  }
}
```

---

## 📍 How to Update Store Locations

Edit the `stores` section in `config/siteConfig.json`:

```json
"stores": {
  "locations": [
    {
      "name": "Main Store",
      "address": "123 Main Street, City",
      "phone": "+91 1234567890",
      "hours": "10:00 AM - 10:00 PM",
      "mapUrl": "https://maps.google.com/?q=..."  // ← Google Maps link
    }
  ]
}
```

**To add a new store:** Copy an existing store block and change the details.

---

## ⭐ How to Update Best Sellers

The homepage shows "Best Sellers". To change them:

```json
"home": {
  "bestSellers": [
    {
      "img": "kesar.jpeg",           // ← Image filename
      "label": "Kesar Ice Cream"     // ← Display name
    }
  ]
}
```

**Note:** These images also come from `config/img/ice-creams/`

---

## 📱 How to Update Social Media Links

```json
"businessInfo": {
  "social": {
    "facebook": "https://facebook.com/yourpage",
    "instagram": "https://instagram.com/yourpage",
    "twitter": "https://twitter.com/yourpage"
  }
}
```

---

## 🐛 Troubleshooting

### Images Not Showing?

**Problem:** You see a broken image icon

**Solutions:**

1. **Check the filename matches exactly**
   - Open `config/img/ice-creams/` folder
   - Copy the exact filename
   - Paste it in the config (including `.jpeg` or `.jpg`)

2. **Hard refresh your browser**
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

3. **Check the image is in the right folder**
   - Product images → `config/img/ice-creams/`
   - Logo → `config/img/`
   - Banners → `config/img/banner/`

4. **Verify the symlink exists**
   ```bash
   ls -la public/
   ```
   You should see: `config -> ../config`
   
   If not, create it:
   ```bash
   ln -s ../config public/config
   ```

### Changes Not Appearing?

1. **Save the file** (`Cmd+S` or `Ctrl+S`)
2. **Check for JSON errors** - Make sure you didn't accidentally delete a comma or quote
3. **Restart the dev server**:
   ```bash
   # Press Ctrl+C to stop
   npm run dev  # Start again
   ```

### JSON Syntax Errors?

Common mistakes:

❌ **Missing comma:**
```json
{
  "name": "Product 1"
  "price": "₹20"  // ← Missing comma after "Product 1"
}
```

✅ **Correct:**
```json
{
  "name": "Product 1",  // ← Comma here
  "price": "₹20"
}
```

❌ **Extra comma:**
```json
{
  "name": "Product 1",
  "price": "₹20",  // ← Remove this comma (last item)
}
```

**Tip:** Use VS Code or any code editor - it will highlight JSON errors!

---

## 📂 Project Structure

```
ngficecream.github.io/
├── config/
│   ├── siteConfig.json       // ← EDIT THIS to change content
│   └── img/                  // ← ADD IMAGES here
│       ├── logo.png
│       ├── banner/
│       └── ice-creams/
├── src/                      // ← Don't edit (code files)
├── public/
│   └── config -> ../config   // ← Symlink (auto-created)
├── package.json
└── README.md                 // ← You're reading this!
```

**For beginners:** Only edit files in the `config/` folder!

---

## 🎯 Common Tasks Cheat Sheet

| Task | Steps |
|------|-------|
| **Add new ice cream** | 1. Add image to `config/img/ice-creams/`<br>2. Add entry to `flavours.categories[].products` in config |
| **Change price** | Edit `"rate": "₹XX"` in the product entry |
| **Update phone number** | Edit `businessInfo.phone` in config |
| **Change logo** | Replace `config/img/logo.png` |
| **Add store location** | Add new object to `stores.locations` array |
| **Update best sellers** | Edit `home.bestSellers` array |

---

## 🚀 Deploying Your Website

### To GitHub Pages

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```

2. **Build the site:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

Your site will be live at: `https://yourusername.github.io/ngficecream.github.io`

---

## 💡 Tips for Beginners

1. **Make small changes** - Test one thing at a time
2. **Keep backups** - Copy `siteConfig.json` before making big changes
3. **Use a code editor** - VS Code will help catch JSON errors
4. **Test locally first** - Always check `http://localhost:5173` before deploying
5. **Ask for help** - If stuck, check the Troubleshooting section above

---

## 📞 Need Help?

If you're stuck:
1. Check the **Troubleshooting** section above
2. Make sure your JSON syntax is correct
3. Verify image filenames match exactly
4. Try restarting the dev server

---

## 📄 License

This project is open source and available for use.
