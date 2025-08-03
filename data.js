const sampleWorkouts = {
    chest: [
        {
            name: "Barbell Bench Press",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Barbell Bench Press</text>
                  </svg>`,
            equipment: "Barbell",
            bodyPart: "Chest",
            target: "Pectorals"
        },
        {
            name: "Dumbbell Flyes",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Dumbbell Flyes</text>
                  </svg>`,
            equipment: "Dumbbell",
            bodyPart: "Chest",
            target: "Pectorals"
        }
    ],
    back: [
        {
            name: "Pull Ups",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Pull Ups</text>
                  </svg>`,
            equipment: "Body Weight",
            bodyPart: "Back",
            target: "Lats"
        },
        {
            name: "Bent Over Rows",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Bent Over Rows</text>
                  </svg>`,
            equipment: "Barbell",
            bodyPart: "Back",
            target: "Upper Back"
        }
    ],
    abs: [
        {
            name: "Crunches",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Crunches</text>
                  </svg>`,
            equipment: "Body Weight",
            bodyPart: "Abs",
            target: "Rectus Abdominis"
        },
        {
            name: "Plank",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Plank</text>
                  </svg>`,
            equipment: "Body Weight",
            bodyPart: "Abs",
            target: "Core"
        }
    ],
    legs: [
        {
            name: "Barbell Squats",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Barbell Squats</text>
                  </svg>`,
            equipment: "Barbell",
            bodyPart: "Legs",
            target: "Quadriceps"
        },
        {
            name: "Lunges",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Lunges</text>
                  </svg>`,
            equipment: "Dumbbell",
            bodyPart: "Legs",
            target: "Glutes"
        }
    ],
    glutes: [
        {
            name: "Hip Thrusts",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Hip Thrusts</text>
                  </svg>`,
            equipment: "Barbell",
            bodyPart: "Glutes",
            target: "Gluteus Maximus"
        },
        {
            name: "Glute Bridges",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Glute Bridges</text>
                  </svg>`,
            equipment: "Body Weight",
            bodyPart: "Glutes",
            target: "Glutes"
        }
    ],
    'full body': [
        {
            name: "Burpees",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Burpees</text>
                  </svg>`,
            equipment: "None",
            bodyPart: "Full Body",
            target: "Full Body"
        },
        {
            name: "Mountain Climbers",
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e2850"/>
                    <text x="50%" y="50%" fill="#4facfe" font-family="Arial" font-size="16" text-anchor="middle">Mountain Climbers</text>
                  </svg>`,
            equipment: "None",
            bodyPart: "Full Body",
            target: "Core"
        }
    ]
};