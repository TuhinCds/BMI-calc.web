document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const inputForm = document.getElementById('inputForm');
    const resultsContainer = document.getElementById('resultsContainer');
    const routineForm = document.getElementById('routineForm');
    const saveRoutineBtn = document.getElementById('saveRoutineBtn');
    const editRoutineBtn = document.getElementById('editRoutineBtn');
    const printRoutineBtn = document.getElementById('printRoutineBtn');
    const resetFormBtn = document.getElementById('resetForm');
    const newRoutineBtn = document.getElementById('newRoutineBtn');
    const savedRoutinesContainer = document.getElementById('savedRoutines');
    const saveModal = document.getElementById('saveModal');
    const confirmModal = document.getElementById('confirmModal');
    const closeModal = document.querySelector('.close-modal');
    const confirmSaveBtn = document.getElementById('confirmSave');
    const saveRoutineNameInput = document.getElementById('saveRoutineName');
    const confirmActionBtn = document.getElementById('confirmAction');
    const cancelActionBtn = document.getElementById('cancelAction');
    
    // Theme management
    function setTheme(isDark) {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.checked = true;
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.checked = false;
        }
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }
    
    themeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });
    
    // Form submission
    routineForm.addEventListener('submit', function(e) {
        e.preventDefault();
        generateRoutine();
    });
    
    // Generate routine based on form inputs
    function generateRoutine() {
        // Get form values with defaults
        const routineName = document.getElementById('routineName').value || 'My Routine';
        const name = document.getElementById('name').value || 'User';
        const age = parseInt(document.getElementById('age').value) || 30;
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value) || 70;
        const height = parseFloat(document.getElementById('height').value) || 175;
        const goal = document.getElementById('goal').value;
        const activity = document.getElementById('activity').value;
        const foodType = document.getElementById('foodType').value;
        const wakeTime = document.getElementById('wakeTime').value || '07:00';
        const sleepTime = document.getElementById('sleepTime').value || '23:00';
        const workStart = document.getElementById('workStart').value || '09:00';
        const workEnd = document.getElementById('workEnd').value || '17:00';
        const medical = document.getElementById('medical').value;
        
        // Calculate BMR (Basal Metabolic Rate)
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        
        // Calculate TDEE (Total Daily Energy Expenditure) based on activity level
        let activityMultiplier;
        switch(activity) {
            case 'sedentary': activityMultiplier = 1.2; break;
            case 'light': activityMultiplier = 1.375; break;
            case 'moderate': activityMultiplier = 1.55; break;
            case 'active': activityMultiplier = 1.725; break;
            case 'extreme': activityMultiplier = 1.9; break;
            default: activityMultiplier = 1.2;
        }
        
        let tdee = bmr * activityMultiplier;
        
        // Adjust calories based on goal
        let calorieAdjustment = 0;
        switch(goal) {
            case 'lose': calorieAdjustment = -500; break;
            case 'gain': calorieAdjustment = 500; break;
            default: calorieAdjustment = 0;
        }
        
        const dailyCalories = Math.round(tdee + calorieAdjustment);
        
        // Calculate water intake (ml)
        const waterIntake = Math.round(weight * 35); // 35ml per kg of body weight
        
        // Calculate sleep duration
        const sleepDuration = calculateTimeDifference(wakeTime, sleepTime);
        
        // Generate meal plan
        const mealPlan = generateMealPlan(foodType, dailyCalories);
        
        // Generate workout plan
        const workoutPlan = generateWorkoutPlan(goal, activity, workStart, workEnd);
        
        // Generate daily schedule
        const dailySchedule = generateDailySchedule(
            wakeTime, 
            sleepTime, 
            workStart, 
            workEnd, 
            mealPlan, 
            workoutPlan
        );
        
        // Display results
        displayResults({
            routineName,
            name,
            age,
            gender,
            weight,
            height,
            goal,
            activity,
            foodType,
            wakeTime,
            sleepTime,
            workStart,
            workEnd,
            medical,
            dailyCalories,
            waterIntake,
            sleepDuration,
            mealPlan,
            workoutPlan,
            dailySchedule
        });
        
        // Switch to results view
        inputForm.classList.remove('active');
        resultsContainer.classList.add('active');
        
        // Set routine title
        document.getElementById('routineTitle').textContent = routineName;
    }
    
    // Calculate time difference in hours
    function calculateTimeDifference(startTime, endTime) {
        const start = new Date(`2000-01-01T${startTime}:00`);
        const end = new Date(`2000-01-01T${endTime}:00`);
        
        // Handle overnight case
        if (end < start) {
            end.setDate(end.getDate() + 1);
        }
        
        const diffMs = end - start;
        const diffHours = diffMs / (1000 * 60 * 60);
        
        return diffHours.toFixed(1);
    }
    
    // Generate meal plan based on preferences and calories
    function generateMealPlan(foodType, dailyCalories) {
        const meals = {
            breakfast: { time: '', items: [], calories: 0 },
            morningSnack: { time: '', items: [], calories: 0 },
            lunch: { time: '', items: [], calories: 0 },
            afternoonSnack: { time: '', items: [], calories: 0 },
            dinner: { time: '', items: [], calories: 0 }
        };
        
        // Calculate calories per meal (breakfast 20%, snacks 10% each, lunch 30%, dinner 30%)
        meals.breakfast.calories = Math.round(dailyCalories * 0.2);
        meals.morningSnack.calories = Math.round(dailyCalories * 0.1);
        meals.lunch.calories = Math.round(dailyCalories * 0.3);
        meals.afternoonSnack.calories = Math.round(dailyCalories * 0.1);
        meals.dinner.calories = Math.round(dailyCalories * 0.3);
        
        // Generate meal items based on food type
        const foodItems = {
            balanced: {
                proteins: ['Chicken breast', 'Salmon', 'Lean beef', 'Eggs', 'Greek yogurt', 'Cottage cheese', 'Tofu', 'Turkey'],
                carbs: ['Brown rice', 'Quinoa', 'Sweet potatoes', 'Whole wheat bread', 'Oats', 'Whole wheat pasta', 'Buckwheat'],
                veggies: ['Broccoli', 'Spinach', 'Kale', 'Bell peppers', 'Zucchini', 'Carrots', 'Brussels sprouts'],
                fruits: ['Banana', 'Apple', 'Berries', 'Orange', 'Pear', 'Kiwi'],
                fats: ['Avocado', 'Nuts', 'Seeds', 'Olive oil', 'Coconut oil']
            },
            vegetarian: {
                proteins: ['Lentils', 'Chickpeas', 'Black beans', 'Tofu', 'Tempeh', 'Greek yogurt', 'Cottage cheese', 'Eggs'],
                carbs: ['Quinoa', 'Brown rice', 'Sweet potatoes', 'Whole wheat bread', 'Oats', 'Farro', 'Barley'],
                veggies: ['Broccoli', 'Spinach', 'Kale', 'Bell peppers', 'Mushrooms', 'Cauliflower', 'Asparagus'],
                fruits: ['Banana', 'Apple', 'Berries', 'Pear', 'Peach', 'Plum'],
                fats: ['Avocado', 'Nuts', 'Seeds', 'Olive oil', 'Flaxseed oil']
            },
            vegan: {
                proteins: ['Lentils', 'Chickpeas', 'Black beans', 'Tofu', 'Tempeh', 'Edamame', 'Seitan', 'Peas'],
                carbs: ['Quinoa', 'Brown rice', 'Sweet potatoes', 'Whole wheat bread', 'Oats', 'Millet', 'Amaranth'],
                veggies: ['Broccoli', 'Spinach', 'Kale', 'Bell peppers', 'Mushrooms', 'Eggplant', 'Green beans'],
                fruits: ['Banana', 'Apple', 'Berries', 'Mango', 'Pineapple', 'Papaya'],
                fats: ['Avocado', 'Nuts', 'Seeds', 'Coconut oil', 'Hemp seed oil']
            },
            lowcarb: {
                proteins: ['Chicken breast', 'Salmon', 'Eggs', 'Lean beef', 'Turkey', 'Pork chops', 'Shrimp'],
                carbs: ['Cauliflower rice', 'Zucchini noodles', 'Broccoli rice', 'Mushrooms', 'Asparagus', 'Green beans'],
                veggies: ['Spinach', 'Kale', 'Bell peppers', 'Zucchini', 'Cabbage', 'Brussels sprouts', 'Avocado'],
                fruits: ['Berries', 'Lemon', 'Lime', 'Tomato', 'Olives'],
                fats: ['Avocado', 'Nuts', 'Seeds', 'Olive oil', 'Butter', 'Coconut oil']
            },
            highprotein: {
                proteins: ['Chicken breast', 'Salmon', 'Egg whites', 'Lean beef', 'Turkey', 'Tuna', 'Greek yogurt', 'Cottage cheese'],
                carbs: ['Brown rice', 'Quinoa', 'Sweet potatoes', 'Oats', 'Whole wheat bread', 'Buckwheat'],
                veggies: ['Broccoli', 'Spinach', 'Green beans', 'Asparagus', 'Brussels sprouts', 'Kale'],
                fruits: ['Banana', 'Apple', 'Berries', 'Orange', 'Pear'],
                fats: ['Avocado', 'Nuts', 'Seeds', 'Olive oil', 'Flaxseed oil']
            }
        };
        
        const selectedFoods = foodItems[foodType] || foodItems.balanced;
        
        // Breakfast
        meals.breakfast.items = [
            `${selectedFoods.proteins[Math.floor(Math.random() * selectedFoods.proteins.length)]}`,
            `with ${selectedFoods.carbs[Math.floor(Math.random() * selectedFoods.carbs.length)]}`,
            `and ${selectedFoods.veggies[Math.floor(Math.random() * selectedFoods.veggies.length)]}`
        ];
        
        // Morning snack
        meals.morningSnack.items = [
            `${selectedFoods.fruits[Math.floor(Math.random() * selectedFoods.fruits.length)]}`,
            `with ${selectedFoods.fats[Math.floor(Math.random() * selectedFoods.fats.length)]}`
        ];
        
        // Lunch
        meals.lunch.items = [
            `${selectedFoods.proteins[Math.floor(Math.random() * selectedFoods.proteins.length)]}`,
            `with ${selectedFoods.carbs[Math.floor(Math.random() * selectedFoods.carbs.length)]}`,
            `and ${selectedFoods.veggies[Math.floor(Math.random() * selectedFoods.veggies.length)]} salad`
        ];
        
        // Afternoon snack
        meals.afternoonSnack.items = [
            `${selectedFoods.proteins[Math.floor(Math.random() * selectedFoods.proteins.length)]}`,
            `and ${selectedFoods.fruits[Math.floor(Math.random() * selectedFoods.fruits.length)]}`
        ];
        
        // Dinner
        meals.dinner.items = [
            `${selectedFoods.proteins[Math.floor(Math.random() * selectedFoods.proteins.length)]}`,
            `with ${selectedFoods.veggies[Math.floor(Math.random() * selectedFoods.veggies.length)]}`,
            `and ${selectedFoods.fats[Math.floor(Math.random() * selectedFoods.fats.length)]}`
        ];
        
        return meals;
    }
    
    // Generate workout plan based on goal and activity level
    function generateWorkoutPlan(goal, activity, workStart, workEnd) {
        const workouts = [];
        const workoutTypes = {
            lose: ['Cardio', 'HIIT', 'Circuit Training', 'Swimming', 'Cycling'],
            maintain: ['Strength Training', 'Yoga', 'Pilates', 'Functional Training', 'Dance'],
            gain: ['Weight Lifting', 'Bodybuilding', 'Powerlifting', 'Calisthenics', 'CrossFit']
        };
        
        // Determine workout frequency based on activity level
        let frequency;
        switch(activity) {
            case 'sedentary': frequency = 3; break;
            case 'light': frequency = 4; break;
            case 'moderate': frequency = 5; break;
            case 'active': frequency = 6; break;
            case 'extreme': frequency = 7; break;
            default: frequency = 4;
        }
        
        // Generate workout times based on work schedule
        const workStartHour = parseInt(workStart.split(':')[0]);
        const workEndHour = parseInt(workEnd.split(':')[0]);
        
        // Possible workout times (morning before work, lunch break, evening after work)
        const possibleTimes = [];
        
        // Morning workout option
        possibleTimes.push(`${workStartHour - 2}:00`);
        
        // Lunch break workout option
        possibleTimes.push(`${Math.floor(workStartHour + (workEndHour - workStartHour)/2)}:00`);
        
        // Evening workout option
        possibleTimes.push(`${workEndHour + 1}:00`);
        
        // Create workout sessions
        for (let i = 0; i < frequency; i++) {
            const workoutType = workoutTypes[goal][Math.floor(Math.random() * workoutTypes[goal].length)];
            const duration = goal === 'lose' ? 
                Math.floor(Math.random() * 30) + 30 : // 30-60 mins for weight loss
                Math.floor(Math.random() * 45) + 45;  // 45-90 mins for maintenance/gain
            
            workouts.push({
                type: workoutType,
                duration: `${duration} minutes`,
                time: possibleTimes[i % possibleTimes.length],
                day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i % 7]
            });
        }
        
        return workouts;
    }
    
    // Generate daily schedule
    function generateDailySchedule(wakeTime, sleepTime, workStart, workEnd, mealPlan, workoutPlan) {
        const schedule = [];
        
        // Convert times to minutes since midnight for easier comparison
        function timeToMinutes(time) {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes;
        }
        
        const wakeMinutes = timeToMinutes(wakeTime);
        const sleepMinutes = timeToMinutes(sleepTime);
        const workStartMinutes = timeToMinutes(workStart);
        const workEndMinutes = timeToMinutes(workEnd);
        
        // Add wake up time
        schedule.push({
            time: wakeTime,
            activity: 'Wake up',
            icon: 'fas fa-bed',
            details: 'Start your day with a glass of water'
        });
        
        // Add breakfast (1 hour after waking up)
        const breakfastTime = addMinutesToTime(wakeTime, 60);
        schedule.push({
            time: breakfastTime,
            activity: 'Breakfast',
            icon: 'fas fa-utensils',
            details: mealPlan.breakfast.items.join(', ')
        });
        mealPlan.breakfast.time = breakfastTime;
        
        // Add morning routine (exercise or preparation)
        if (Math.random() > 0.5) {
            schedule.push({
                time: addMinutesToTime(breakfastTime, 30),
                activity: 'Morning Routine',
                icon: 'fas fa-spa',
                details: 'Meditation, journaling, or light stretching'
            });
        }
        
        // Add work start time
        schedule.push({
            time: workStart,
            activity: 'Work/School',
            icon: 'fas fa-briefcase',
            details: 'Focus time'
        });
        
        // Add morning snack (mid-morning)
        const morningSnackTime = addMinutesToTime(workStart, (workEndMinutes - workStartMinutes) / 3);
        schedule.push({
            time: morningSnackTime,
            activity: 'Morning Snack',
            icon: 'fas fa-apple-alt',
            details: mealPlan.morningSnack.items.join(', ')
        });
        mealPlan.morningSnack.time = morningSnackTime;
        
        // Add lunch (mid work day)
        const lunchTime = addMinutesToTime(workStart, (workEndMinutes - workStartMinutes) / 2);
        schedule.push({
            time: lunchTime,
            activity: 'Lunch',
            icon: 'fas fa-utensils',
            details: mealPlan.lunch.items.join(', ')
        });
        mealPlan.lunch.time = lunchTime;
        
        // Add afternoon snack
        const afternoonSnackTime = addMinutesToTime(lunchTime, (workEndMinutes - timeToMinutes(lunchTime)) / 2);
        schedule.push({
            time: afternoonSnackTime,
            activity: 'Afternoon Snack',
            icon: 'fas fa-seedling',
            details: mealPlan.afternoonSnack.items.join(', ')
        });
        mealPlan.afternoonSnack.time = afternoonSnackTime;
        
        // Add work end time
        schedule.push({
            time: workEnd,
            activity: 'Work/School Ends',
            icon: 'fas fa-home',
            details: 'Time to unwind'
        });
        
        // Add workout if scheduled for today
        const todayWorkout = workoutPlan.find(w => w.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }));
        if (todayWorkout) {
            schedule.push({
                time: todayWorkout.time,
                activity: 'Workout',
                icon: 'fas fa-dumbbell',
                details: `${todayWorkout.type} for ${todayWorkout.duration}`
            });
        }
        
        // Add dinner (2 hours after workout or work end)
        const dinnerTime = addMinutesToTime(todayWorkout ? todayWorkout.time : workEnd, 120);
        schedule.push({
            time: dinnerTime,
            activity: 'Dinner',
            icon: 'fas fa-utensils',
            details: mealPlan.dinner.items.join(', ')
        });
        mealPlan.dinner.time = dinnerTime;
        
        // Add wind down time (1 hour before sleep)
        const windDownTime = addMinutesToTime(sleepTime, -60);
        schedule.push({
            time: windDownTime,
            activity: 'Wind Down',
            icon: 'fas fa-book',
            details: 'Relaxing activities, no screens'
        });
        
        // Add sleep time
        schedule.push({
            time: sleepTime,
            activity: 'Bedtime',
            icon: 'fas fa-moon',
            details: 'Aim for 7-9 hours of quality sleep'
        });
        
        // Add water reminders throughout the day
        const waterTimes = [
            addMinutesToTime(wakeTime, 30),
            addMinutesToTime(breakfastTime, 90),
            addMinutesToTime(lunchTime, -30),
            addMinutesToTime(lunchTime, 90),
            addMinutesToTime(dinnerTime, -30),
            addMinutesToTime(dinnerTime, 60)
        ];
        
        waterTimes.forEach(time => {
            schedule.push({
                time: time,
                activity: 'Water Break',
                icon: 'fas fa-tint',
                details: 'Drink a glass of water'
            });
        });
        
        // Sort schedule by time
        schedule.sort((a, b) => {
            return timeToMinutes(a.time) - timeToMinutes(b.time);
        });
        
        return schedule;
    }
    
    // Helper function to add minutes to a time string
    function addMinutesToTime(time, minutesToAdd) {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes + minutesToAdd, 0, 0);
        
        const newHours = date.getHours().toString().padStart(2, '0');
        const newMinutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${newHours}:${newMinutes}`;
    }
    
    // Display results
    function displayResults(data) {
        // Summary section
        document.getElementById('summaryCalories').textContent = `${data.dailyCalories} kcal`;
        document.getElementById('summaryWater').textContent = `${data.waterIntake} ml`;
        document.getElementById('summaryWorkout').textContent = `${data.workoutPlan.length} sessions/week`;
        document.getElementById('summarySleep').textContent = `${data.sleepDuration} hours`;
        
        // Timeline schedule
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';
        
        data.dailySchedule.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-content">
                    <i class="${item.icon}"></i>
                    <strong>${item.activity}</strong>: ${item.details}
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });
        
        // Meal plan
        const mealsGrid = document.getElementById('mealsGrid');
        mealsGrid.innerHTML = '';
        
        const mealTypes = [
            { key: 'breakfast', title: 'Breakfast', icon: 'fas fa-sun' },
            { key: 'morningSnack', title: 'Morning Snack', icon: 'fas fa-coffee' },
            { key: 'lunch', title: 'Lunch', icon: 'fas fa-utensils' },
            { key: 'afternoonSnack', title: 'Afternoon Snack', icon: 'fas fa-apple-alt' },
            { key: 'dinner', title: 'Dinner', icon: 'fas fa-moon' }
        ];
        
        mealTypes.forEach(meal => {
            const mealData = data.mealPlan[meal.key];
            
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';
            
            mealCard.innerHTML = `
                <div class="meal-header">
                    <div class="meal-title">
                        <i class="${meal.icon}"></i>
                        ${meal.title}
                    </div>
                    <div class="meal-calories">${mealData.calories} kcal</div>
                </div>
                <ul class="meal-items">
                    ${mealData.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                ${mealData.time ? `<div class="meal-time"><i class="fas fa-clock"></i> ${mealData.time}</div>` : ''}
            `;
            
            mealsGrid.appendChild(mealCard);
        });
        
        // Workout plan
        const workoutsList = document.getElementById('workoutsList');
        workoutsList.innerHTML = '';
        
        data.workoutPlan.forEach(workout => {
            const workoutItem = document.createElement('div');
            workoutItem.className = 'workout-item';
            
            workoutItem.innerHTML = `
                <div class="workout-icon">
                    <i class="fas fa-dumbbell"></i>
                </div>
                <div class="workout-details">
                    <div class="workout-title">${workout.type}</div>
                    <div class="workout-duration">${workout.duration} on ${workout.day} at ${workout.time}</div>
                </div>
            `;
            
            workoutsList.appendChild(workoutItem);
        });
    }
    
    // Save routine to localStorage
    function saveRoutine(routineName, routineData) {
        let routines = JSON.parse(localStorage.getItem('routines')) || {};
        
        // Use timestamp if name is empty
        const saveName = routineName || `Routine_${new Date().getTime()}`;
        
        routines[saveName] = {
            name: saveName,
            data: routineData,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('routines', JSON.stringify(routines));
        loadSavedRoutines();
    }
    
    // Load saved routines from localStorage
    function loadSavedRoutines() {
        const routines = JSON.parse(localStorage.getItem('routines')) || {};
        savedRoutinesContainer.innerHTML = '';
        
        if (Object.keys(routines).length === 0) {
            savedRoutinesContainer.innerHTML = '<p>No saved routines yet.</p>';
            return;
        }
        
        Object.values(routines).forEach(routine => {
            const routineItem = document.createElement('div');
            routineItem.className = 'routine-item';
            
            routineItem.innerHTML = `
                <h4>${routine.name}</h4>
                <p>Created: ${new Date(routine.timestamp).toLocaleString()}</p>
                <div class="routine-actions">
                    <button class="btn btn-secondary load-routine" data-name="${routine.name}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-secondary delete-routine" data-name="${routine.name}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            
            savedRoutinesContainer.appendChild(routineItem);
        });
        
        // Add event listeners to the new buttons
        document.querySelectorAll('.load-routine').forEach(btn => {
            btn.addEventListener('click', function() {
                loadRoutine(this.dataset.name);
            });
        });
        
        document.querySelectorAll('.delete-routine').forEach(btn => {
            btn.addEventListener('click', function() {
                showConfirmModal(
                    'Delete Routine',
                    `Are you sure you want to delete "${this.dataset.name}"?`,
                    () => deleteRoutine(this.dataset.name)
                );
            });
        });
    }
    
    // Load a specific routine
    function loadRoutine(routineName) {
        const routines = JSON.parse(localStorage.getItem('routines')) || {};
        const routine = routines[routineName];
        
        if (!routine) return;
        
        // Fill the form with the saved data
        document.getElementById('routineName').value = routine.data.routineName;
        document.getElementById('name').value = routine.data.name;
        document.getElementById('age').value = routine.data.age;
        document.getElementById('gender').value = routine.data.gender;
        document.getElementById('weight').value = routine.data.weight;
        document.getElementById('height').value = routine.data.height;
        document.getElementById('goal').value = routine.data.goal;
        document.getElementById('activity').value = routine.data.activity;
        document.getElementById('foodType').value = routine.data.foodType;
        document.getElementById('wakeTime').value = routine.data.wakeTime;
        document.getElementById('sleepTime').value = routine.data.sleepTime;
        document.getElementById('workStart').value = routine.data.workStart;
        document.getElementById('workEnd').value = routine.data.workEnd;
        document.getElementById('medical').value = routine.data.medical;
        
        // Generate and display the routine
        displayResults(routine.data);
        inputForm.classList.remove('active');
        resultsContainer.classList.add('active');
        document.getElementById('routineTitle').textContent = routine.data.routineName;
    }
    
    // Delete a routine
    function deleteRoutine(routineName) {
        let routines = JSON.parse(localStorage.getItem('routines')) || {};
        delete routines[routineName];
        localStorage.setItem('routines', JSON.stringify(routines));
        loadSavedRoutines();
    }
    
    // Show confirmation modal
    function showConfirmModal(title, message, confirmCallback) {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = message;
        confirmModal.style.display = 'flex';
        
        const confirmAction = function() {
            confirmCallback();
            confirmModal.style.display = 'none';
            confirmActionBtn.removeEventListener('click', confirmAction);
        };
        
        confirmActionBtn.addEventListener('click', confirmAction);
    }
    
    // Event listeners
    saveRoutineBtn.addEventListener('click', function() {
        saveModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        saveModal.style.display = 'none';
    });
    
    confirmSaveBtn.addEventListener('click', function() {
        const routineName = saveRoutineNameInput.value || document.getElementById('routineName').value || `Routine_${new Date().getTime()}`;
        
        // Get all the data needed to recreate the routine
        const routineData = {
            routineName: document.getElementById('routineName').value || 'My Routine',
            name: document.getElementById('name').value || 'User',
            age: parseInt(document.getElementById('age').value) || 30,
            gender: document.getElementById('gender').value,
            weight: parseFloat(document.getElementById('weight').value) || 70,
            height: parseFloat(document.getElementById('height').value) || 175,
            goal: document.getElementById('goal').value,
            activity: document.getElementById('activity').value,
            foodType: document.getElementById('foodType').value,
            wakeTime: document.getElementById('wakeTime').value || '07:00',
            sleepTime: document.getElementById('sleepTime').value || '23:00',
            workStart: document.getElementById('workStart').value || '09:00',
            workEnd: document.getElementById('workEnd').value || '17:00',
            medical: document.getElementById('medical').value,
            dailyCalories: parseInt(document.getElementById('summaryCalories').textContent.split(' ')[0]) || 2000,
            waterIntake: parseInt(document.getElementById('summaryWater').textContent.split(' ')[0]) || 2000,
            sleepDuration: parseFloat(document.getElementById('summarySleep').textContent.split(' ')[0]) || 8.0,
            mealPlan: JSON.parse(JSON.stringify(getCurrentMealPlan())),
            workoutPlan: JSON.parse(JSON.stringify(getCurrentWorkoutPlan())),
            dailySchedule: JSON.parse(JSON.stringify(getCurrentDailySchedule()))
        };
        
        saveRoutine(routineName, routineData);
        saveModal.style.display = 'none';
        saveRoutineNameInput.value = '';
    });
    
    // Helper function to get current meal plan from DOM
    function getCurrentMealPlan() {
        const mealPlan = {
            breakfast: { time: '', items: [], calories: 0 },
            morningSnack: { time: '', items: [], calories: 0 },
            lunch: { time: '', items: [], calories: 0 },
            afternoonSnack: { time: '', items: [], calories: 0 },
            dinner: { time: '', items: [], calories: 0 }
        };
        
        document.querySelectorAll('.meal-card').forEach(card => {
            const title = card.querySelector('.meal-title').textContent.trim();
            const calories = parseInt(card.querySelector('.meal-calories').textContent.split(' ')[0]);
            const items = Array.from(card.querySelectorAll('.meal-items li')).map(li => li.textContent);
            const timeElement = card.querySelector('.meal-time');
            const time = timeElement ? timeElement.textContent.replace('⏰ ', '') : '';
            
            let key;
            if (title.includes('Breakfast')) key = 'breakfast';
            else if (title.includes('Morning Snack')) key = 'morningSnack';
            else if (title.includes('Lunch')) key = 'lunch';
            else if (title.includes('Afternoon Snack')) key = 'afternoonSnack';
            else if (title.includes('Dinner')) key = 'dinner';
            
            if (key) {
                mealPlan[key] = {
                    time,
                    items,
                    calories
                };
            }
        });
        
        return mealPlan;
    }
    
    // Helper function to get current workout plan from DOM
    function getCurrentWorkoutPlan() {
        const workouts = [];
        
        document.querySelectorAll('.workout-item').forEach(item => {
            const type = item.querySelector('.workout-title').textContent;
            const details = item.querySelector('.workout-duration').textContent;
            const [duration, day, _, time] = details.split(' ');
            
            workouts.push({
                type,
                duration: duration + ' ' + day,
                time,
                day: day
            });
        });
        
        return workouts;
    }
    
    // Helper function to get current daily schedule from DOM
    function getCurrentDailySchedule() {
        const schedule = [];
        
        document.querySelectorAll('.timeline-item').forEach(item => {
            const time = item.querySelector('.timeline-time').textContent;
            const content = item.querySelector('.timeline-content').textContent.split(': ');
            const activity = content[0];
            const details = content.slice(1).join(': ');
            const icon = item.querySelector('.timeline-content i').className;
            
            schedule.push({
                time,
                activity,
                details,
                icon
            });
        });
        
        return schedule;
    }
    
    editRoutineBtn.addEventListener('click', function() {
        inputForm.classList.add('active');
        resultsContainer.classList.remove('active');
    });
    
    printRoutineBtn.addEventListener('click', function() {
        window.print();
    });
    
    resetFormBtn.addEventListener('click', function() {
        routineForm.reset();
    });
    
    newRoutineBtn.addEventListener('click', function() {
        inputForm.classList.add('active');
        resultsContainer.classList.remove('active');
        routineForm.reset();
    });
    
    cancelActionBtn.addEventListener('click', function() {
        confirmModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === saveModal) {
            saveModal.style.display = 'none';
        }
        if (e.target === confirmModal) {
            confirmModal.style.display = 'none';
        }
    });
    
    // Initialize the app
    loadSavedRoutines();
});