import '../style/Dashboard.css'

export default function MyNavBar() {

    const date = new Date();
    //const month = date.getMonth() + 1;

    return (
        <>
            <div className="dashboard-container">
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="logo">Gloria App</div>
                    <nav>
                        <ul>
                            <li>Dashboard</li>
                            <li>Map</li>
                            <li>Saved Location</li>
                            <li>Calendar</li>
                        </ul>
                    </nav>
                    <div className="settings">
                        <p>Setting</p>
                        <p>Logout account</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <header>
                        <h1>{date.getFullYear().toString()},January</h1>
                        <p>Thursday, Jan 4, 2022</p>
                        <input type="text" placeholder="Search location here"/>
                    </header>

                    <section className="today-overview">
                        <h2>Today Overview</h2>
                        <div className="overview-cards">
                            <div className="card">Wind Speed <span>12km/h</span></div>
                            <div className="card">Rain Chance <span>24%</span></div>
                            <div className="card">Pressure <span>720 hpa</span></div>
                            <div className="card">UV Index <span>2.3</span></div>
                        </div>

                        <div className="weekly-temperature">
                            <h3>Average Weekly Temperature</h3>
                            <div className="chart">[Temperature Graph Placeholder]</div>
                        </div>
                    </section>
                </div>

                {/* Weather Details Sidebar */}
                <div className="weather-sidebar">
                    <h3>Juja</h3>
                    <p>20°C Dramatic Cloudy</p>
                    <div className="chance-of-rain">
                        <h4>Chance of rain</h4>
                        <p>7 PM: 44%</p>
                        <p>8 PM: 30%</p>
                        <p>9 PM: 67%</p>
                    </div>
                    <div className="sun-times">
                        <p>Sunrise: 4:20 AM</p>
                        <p>Sunset: 5:50 PM</p>
                    </div>
                </div>
            </div>

        </>
    )
}