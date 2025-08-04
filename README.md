Fitness Pal 🏋️
  
A **modern workout tracker** with exercise libraries, progress visualization, and personalized routines - all in one responsive web app.

## ✨ Key Features  
- **6 Workout Categories** (Chest, Back, Abs, Legs, Glutes, Full Body)  
- **Interactive Exercise Cards** with SVG visuals  
- **Auth System** (Login/Signup with validation)  
- **Sleek UI** with gradient accents & dark mode  
- **Mobile-First Design** works on all devices  
- **Docker Support** for easy deployment  

## 🛠 Tech Stack  
**Frontend**:  
- HTML5, CSS3 (Flexbox/Grid)  
- Vanilla JavaScript (ES6+)  
- SVG for exercise illustrations  

**Infrastructure**:  
- Docker containerization  
- (Optional: Add backend if implemented later)  

## 🚀 Quick Start  

### Without Docker  
# 1. Clone repo
git clone https://github.com/cmalaikat16/fitness_pal.git

cd fitness_pal

# 2. Install live server (if needed)
npm install -g live-server

# 3. Run app
live-server --port=3000

### With Docker 
# 1. Build image
docker build -t fitness-pal .

# 2. Run container
docker run -dp 3000:3000 fitness-pal

## 📂 Project Structure
- **fitness_pal/**
- ├── index.html          # Main app entry
- ├── style.css           # All styles
- ├── script.js           # Core functionality
- ├── data.js             # Exercise database
- ├── Dockerfile          # Container config
- └── assets/             

## 🔧 How to Customize
- **1. Add More Exercises:**
Edit data.js following this format:
'chest': [
    {
        name: "New Exercise",
        svg: `<svg>...</svg>`, // Add SVG
        equipment: "Dumbbell",
        bodyPart: "Chest",
        target: "Pectorals"
    }
]

- **2. Change Styling:**
Modify gradients in style.css:
.btn-green {
    background: linear-gradient(135deg, #NEW_COLOR, #NEW_COLOR);
}

## 🤝 Contributing
- **Fork the repository**
- **Create a feature branch** (git checkout -b cool-feature)
- **Commit changes** (git commit -m 'Add awesome feature')
- **Push to branch** (git push origin cool-feature)


## 📜 License
- **MIT © MALAIKA TETA Celia**



