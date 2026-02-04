function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) return;

    const birthDate = new Date(birthdateInput);
    const diff = today - birthDate;

    // Conversions
    const sec = Math.floor(diff / 1000);
    const min = Math.floor(sec / 60);
    const hrs = Math.floor(min / 60);
    const days = Math.floor(hrs / 24);
    const years = Math.floor(days / 365.25);
    const months = Math.floor(days / 30.4375);

    const display = document.getElementById("result-display");

    display.innerHTML = `
        <div class="result-grid">
            <div class="stat-card full-width">
                <h3>Total Lifetime</h3>
                <p>${years} Years ${months % 12} Months ${days % 30} Days</p>
            </div>
            <div class="stat-card"><h3>Months</h3><p>${months.toLocaleString()}</p></div>
            <div class="stat-card"><h3>Weeks</h3><p>${Math.floor(days/7).toLocaleString()}</p></div>
            <div class="stat-card"><h3>Days</h3><p>${days.toLocaleString()}</p></div>
            <div class="stat-card"><h3>Hours</h3><p>${hrs.toLocaleString()}</p></div>
            <div class="stat-card"><h3>Minutes</h3><p>${min.toLocaleString()}</p></div>
            <div class="stat-card"><h3>Seconds</h3><p>${sec.toLocaleString()}</p></div>
        </div>
    `;
}

document.getElementById("ageCalculator").addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAge();
});