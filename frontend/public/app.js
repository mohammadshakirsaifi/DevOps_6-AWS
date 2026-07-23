let API = "";

async function loadConfig() {
    const config = await fetch("/config");
    const json = await config.json();

    API = json.apiUrl;
}

async function callAPI() {

    const response = await fetch(API + "/api/info");

    const data = await response.json();

    document.getElementById("result").textContent =
        JSON.stringify(data, null, 4);

}

document.getElementById("btn").addEventListener("click", async () => {

    if (!API) {
        await loadConfig();
    }

    callAPI();

});
