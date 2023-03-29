//Example node Event homeview
const linx = require('@chaordic/impulse-sdk-js');

const homeClass = linx.impulse.pages.home
const home = new linx.impulse.events.constructor(homeClass)

home.pageData
    .url('teste.com.br')
    .deviceId("fb4e49b6-35e3-42a1-a397-960f0b37ab6a")
    //... add more params builder

const homeMergedData = { ...home.pageData.data, ...home.pageData.default };

linx.impulse.events.homeView(homeMergedData).then((res) => console.log(res.status))

console.log(home, homeMergedData)