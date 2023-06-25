function MyPage() {
    return (
    <div>
        <header>
        <img src = "React-icon.svg.png"/>
            <nav>
                <ul>
                    <li>Nav</li>
                    <li>Bar</li>
                    <li>Practice</li>
                </ul>
            </nav>
        </header>
        <div id = "main">
        <h1>Dreams for the next 10 years</h1>
        <ul>
            <li>Live a healthy lifestyle and enjoy everyday</li>
            <li>Live in California</li>
            <li>Fully employed as a data-scientist</li>
        </ul>
        </div>
        <footer>
            @2023 Benjamin Nicholson. All rights reserved.
        </footer>
    </div>
    )
    }

ReactDOM.render(<MyPage/>, document.getElementById("root"))