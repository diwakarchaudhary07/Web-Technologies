async function trackNumber() {
    let number = document.getElementById("number").value;

    if (!number) {
        alert("Enter phone number!");
        return;
    }

    let url = `https://api.apilayer.com/number_verification/validate?number=${number}`;

    try {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "apikey": "YOUR_API_KEY"
            }
        });

        let data = await response.json();

        if (!data.valid) {
            document.getElementById("result").innerHTML = "Invalid Number!";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>📍 Country: ${data.country_name}</h2>
            <p>📡 Carrier: ${data.carrier}</p>
            <p>📱 Line Type: ${data.line_type}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data!";
    }
}