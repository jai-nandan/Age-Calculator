# 🚀 Age Analytics – Age Calculator

A browser-based age calculator that turns a birthdate into a detailed lifetime breakdown.

## 📌 Overview

Age Analytics is a lightweight client-side web app that calculates a person's exact age from their date of birth. Rather than showing just years, it breaks the elapsed time down into months, weeks, days, hours, minutes, and seconds, presenting the results as a set of stat cards.

## ✨ Features

* Date-of-birth input via a native HTML date picker
* Total lifetime summary (years, months, days)
* Individual stat cards for total months, weeks, days, hours, minutes, and seconds lived
* Comma-formatted large numbers (via `toLocaleString()`)
* Empty state message shown before a date is submitted
* Google Font (`Plus Jakarta Sans`) based typography and a blurred background panel UI

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)

## 📂 Project Structure

```text
Age-Calculator/
├── Public/
│   ├── index.html
│   ├── agecalculator.css
│   └── agecalculator.js
└── README.md
```

## ⚙️ Installation

```bash
git clone https://github.com/jai-nandan/Age-Calculator.git
cd Age-Calculator/Public
```

No dependencies are required — this is a static HTML/CSS/JS project.

## ▶️ How to Run

1. Clone or download the repository.
2. Open `Public/index.html` directly in any web browser.
3. Pick a date of birth and click **Generate Insights**.

## 💡 How It Works

* The user picks a date via the `#birthdate` input inside the `#ageCalculator` form.
* On submit, `calculateAge()` in `agecalculator.js` computes the millisecond difference between the current date and the entered birthdate.
* That difference is progressively converted into seconds, minutes, hours, days, an approximate month count (`days / 30.4375`), and an approximate year count (`days / 365.25`).
* The results are injected into the `#result-display` panel as a grid of stat cards using template literals.

## 🎯 Learning Outcomes

* DOM manipulation and event handling (`addEventListener`, `preventDefault`)
* Date arithmetic in JavaScript using the native `Date` object
* Dynamically generating HTML with template literals
* Basic responsive UI design with custom CSS and Google Fonts

## 🔮 Future Improvements

* Add input validation for future dates or invalid entries
* Use precise calendar-based age calculation instead of average-day approximations for months/years
* Add a live/real-time updating counter instead of a one-time calculation on submit
* Make the app installable as a PWA

## ⚠️ Limitations

* Month and year calculations use fixed averages (30.4375 days/month, 365.25 days/year) rather than exact calendar math, so figures are approximate
* No validation prevents selecting a future date

## 👨‍💻 Author

**Jai Nandan**

GitHub: `https://github.com/jai-nandan`

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐.
