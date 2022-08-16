import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';

const locizeOptions = {
    projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
    apiKey: process.env.REACT_APP_LOCIZE_APIKEY,
    refLng: process.env.REACT_APP_LOCIZE_REFLNG,
    version: process.env.REACT_APP_LOCIZE_VERSION
}

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend)
.init({
    fallbackLng: 'en',
    saveMissing: true, 
    backend: locizeOptions
//missingKeyHandler: function(lngs, ns, key, fallbackValue, updateMissing, options) { console.log(lngs, ns, key, fallbackValue, updateMissing, options) }
    
})

i18next.on('missingKey', function(lngs, namespace, key, res) {
    
    console.log(lngs, namespace, key, res);
    
    console.error(`missing key: ${key} in languages ${i18next.resolvedLanguage}`)
})

console.log(i18next.languages);

//console.log(i18next.options.resources['en']);


// const transMap = new Map();

// Object.keys(i18next.options.resources).map((res) => {
//     transMap.set(res,Object.keys(i18next.options.resources[res]['translation']))
//     //console.log(res);
//     //console.log(Object.keys(i18next.options.resources[res]['translation']));
// });

// console.log(transMap);



// resources: {
//     en: {
//         translation: {
//             add: "Add",
//             user: {
//                 id: 'User {{number}} ID',
//                 name: 'User {{number}} Name',
//             },
//             connectionTitle : 'Connection List',
//             userInputTitle: 'User List',
//             id: 'ID',
//             name: 'Name',
//             connections: 'Connections',
//             personalConnections: '{{username}} Connections',

//             connectionLink: 'Connections',
//             EspecificConnectionsTitle: 'User with ID {{id}} connections'
//         }
//     },
//     es: {
//         translation: {
//             add: "Añadir",
//             user: {
//                 id: 'ID Usuario {{number}} ',
//                 name: 'Nombre Usuario {{number}}',
//             },
//             connectionTitle : 'Lista de conexiones',
//             userInputTitle: 'Lista de usuarios',
//             id: 'ID',
//             name: 'Nombre',
//             connections: 'Conexiones',
//             personalConnections: 'Conexiones de {{username}}',
//             userLink: 'Usuarios',
//             connectionLink: 'Conexiones',
//             EspecificConnectionsTitle: 'Conexiones del usuario con ID {{id}}'
//         }
//     }
// }