//example ES6 Event homeView
import "./dist-esm/bundle.js";

const homeClass = impulse.pages.home
const home = new impulse.events.constructor(homeClass)

home.pageData
    .source("desktop")
    .url()
    .deviceId("fb4e49b6-35e3-42a1-a397-960f0b37ab6a")

const homeMergedData = { ...home.pageData.data, ...home.pageData.default };

impulse.events.homeView(homeMergedData).then((res) => console.log(k, res.status))

console.log(home, homeMergedData)