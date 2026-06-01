# ⚡ QUICK START GUIDE

Welcome to your Avengers SRE Portfolio! Here's your 5-minute setup:

## 🎯 What You Have

Your portfolio folder contains:
- `index.html` - Your hero profile page
- `styles.css` - Avengers-themed styling
- `script.js` - Interactive animations
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Hosting guide

## 🔧 Customization (15 mins)

### Critical Updates:
1. **Open `index.html` in your text editor**
2. Search and replace "AMITH" with your name
3. Replace contact emails/links with yours
4. Update your title from "Site Reliability Engineer" if needed

### Update Your Skills:
1. Edit the power cards (Docker, Kubernetes, AWS sections)
2. Replace with YOUR actual skills
3. Update the skill tags to match

### Add Your Projects:
1. Edit mission cards with your actual projects
2. Use real metrics and impact numbers
3. Update status labels

## 📱 Test Locally (5 mins)

### Option A: Direct Open
```bash
# Just open the file in browser
open ~/Personal/portfolio/index.html
```

### Option B: Local Server (Better)
```bash
cd ~/Personal/portfolio

# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## 🚀 Deploy to Web (5-10 mins)

### Fastest: Netlify
1. Commit to GitHub:
```bash
cd ~/Personal/portfolio
git init
git add .
git commit -m "Portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" → Select your repo
4. Done! Your site is live in 60 seconds.

### Best Control: GitHub Pages
1. Follow same git steps above
2. Go to repo → Settings → Pages
3. Select branch: main, folder: / (root)
4. Your site is at: https://YOUR_USERNAME.github.io/portfolio

## ✅ After Deployment

- [ ] Share your portfolio link
- [ ] Add to your resume
- [ ] Add to LinkedIn profile
- [ ] Share on Twitter/LinkedIn

## 🎨 Optional Enhancements

- Add your photo to `.hero-image` section
- Change colors in `styles.css`
- Add more projects/skills
- Setup custom domain (guides in DEPLOYMENT.md)

## 📚 Full Documentation

- **README.md** - Complete feature guide
- **DEPLOYMENT.md** - All hosting options
- **index.html** - Edit content here
- **styles.css** - Customize appearance
- **script.js** - Add interactions

## 🆘 Help

**Problem: Can't see the site locally?**
```bash
# Make sure you're in the right folder
cd ~/Personal/portfolio
ls  # Should see index.html, styles.css, script.js
```

**Problem: Styles look broken?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Try incognito mode

**Problem: Deployment stuck?**
- Check DEPLOYMENT.md for your chosen platform
- Verify all files are committed to git

## 🎯 Next Steps

1. Customize all the content
2. Test locally
3. Push to GitHub
4. Deploy (Netlify or GitHub Pages)
5. Share and celebrate! 🎉

---

**Ready to launch?** Start with editing index.html, then follow deployment steps!

Questions? Check README.md or DEPLOYMENT.md for detailed info.
