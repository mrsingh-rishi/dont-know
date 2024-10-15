const axios = require("axios");
async function main() {
  while (true) {
    await axios.get(
      "https://visitcount.itsvg.in/api?id=shwetaa94&icon=0&color=4"
    );
    await axios.get(
      "https://visitcount.itsvg.in/api?id=mrsingh-rishi&icon=0&color=4"
    );

    console.log("API call success for type ");
  }
}

main().catch(console.error);
