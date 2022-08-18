

// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
require('dotenv').config();
const express = require('express');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-http-middleware');
//const Backend = require('i18next-node-fs-backend');

const Backend = require('i18next-locize-backend');
var app = express();

const locizeOptions = {
    projectId: process.env.LOCIZE_PROJECTID,
    apiKey: process.env.LOCIZE_APIKEY,
    refLng: process.env.LOCIZE_REFLNG,
    version: process.env.LOCIZE_VERSION
}

i18next
.use(Backend)
.use(i18nextMiddleware.LanguageDetector)
.init({
    ns: ['translation', 'template'],
    preload: ['en','es-ES','de-DE', 'fr-FR'],
    defaultNS: 'template',
    fallbackLng: 'en',
    saveMissing: true, 
    backend: locizeOptions
  })
 
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(i18nextMiddleware.handle(i18next));

app.get('/', (req, res)=>{
 
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.

    const data = {
        logo: 'logo',
        firstname: 'Javi',
        surname: 'B',
        role: 'junior',
        address: 'picadilly street',
        postcode: 12,
        city: 'Liverpool',
        check_completed_time: '13/11/2020',
        id: 1,
        overall_check_score: 20,
        employerName : 'thomas',
        employerURL : 'employer.com',
        preCheck : false,
        rent_affordability: 90,
        consumer_behaviour: 20,
        cashflow : 80,
        employment_stability : 3,
        rent_income_ratio : 0.1,
    }

    
    req.i18n.changeLanguage('en') // will not load that!!! assert it was preloaded

    res.render('report-template.ejs', data);
     
    });

    var server = app.listen(4000, function(){
        console.log('listening to port 4000')
    });