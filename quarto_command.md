# Quarto Cache Clearing Commands

## 🧹 **Complete Cache Clearing Commands:**

```bash
# Stop preview
pkill -f "quarto preview"

# Remove all cache
rm -rf _site/ .quarto/ .quarto-cache/

# Clean Quarto cache
quarto clean

# Add cache-busting comment
echo "/* Cache bust: $(date +%s) */" >> styles.css

# Restart preview
quarto preview
```

## 📝 **Quick Reference:**

**Most Common Use Case:**
```bash
pkill -f "quarto preview" && rm -rf _site/ .quarto/ && quarto preview
```

**When CSS Changes Don't Show:**
```bash
echo "/* Force refresh $(date) */" >> styles.css
```

**When Files Don't Update:**
```bash
quarto clean && rm -rf _site/
```

## 🚀 **Deployment Commands:**

**Deploy to GitHub Pages:**
```bash
quarto publish gh-pages --no-browser
```

**Force Fresh Deployment:**
```bash
echo "/* Cache bust: $(date +%s) */" >> styles.css
git add . && git commit -m "Force refresh" && git push origin main
quarto publish gh-pages --no-browser
```
