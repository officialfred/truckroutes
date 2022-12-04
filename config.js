let zoom = 16;

let intro  = "<div>New York City laws <a href='https://www.nyc.gov/html/dot/html/motorist/truckrouting.shtml' style='color:white' target='_blank'>requires</a> vehicles with six or more tires, or three or more axles to travel on <a href='https://www.nyc.gov/html/dot/html/motorist/trucks.shtml#map' style='color:white' target='_blank'>designated truck routes</a>. This is done to maximize the efficiency of truck routing and to protect users travelling on neighborhood streets. Despite this, truckers regularly travel on neighborhood, side, and residential streets and go largely unchecked, putting New Yorkers at risk daily.</div>"

let title1 = "Eric Salitsky"
let description1 = "<div>On May 5th, 2022, a private waste truck hit and killed architect Eric Salitsky in Borough Park, and proceeded to flee the scene. Eric was riding his bicycle on 9th Avenue, and the bike lane was partially blocked by illegally parked cars. Eric's death was preventable.</div>"

let title2 = "Devra Freelander"
let description2 = "<div>On July 1st, 2019, artist Devra Freelander was mowed down by a cement truck travelling East on Boerum Street while she was riding her bike. The owner of the company running the truck blamed cyclists for there being 'too many bikes on the road'. Residents of the neighborhood claimed the company's trucks regularly speed through residential streets in the area, outside of truck routes. Devra's death was not an accident.</div>"

let title3 = "Kevin Flores"
let description3 = "<div>On January 26th, 2018, Kevin Flores was killed by an oil taked in Bed-Stuy. Kevin was 13 years old. He was riding his bicycle on Lewis Avenue, when the oil tanker made a right turn over him. The driver had seven license suspensions, and did not have a valid license at the time of the incident. He'd been caught driving withouth a license as little as a month before. Kevin's death could have been prevented.</div>"

let title4 = "Derrick Belton"
let description4 = "<div>On August 18th, 2016, Derrick Belton was riding his bicycle on Albany Avenue when he killed by a private garbage truck. The Transform Don't Trash Coalition <a href='http://transformdonttrashnyc.org/wp-content/uploads/2016/06/Reckless-Endangerment.pdf'>found</a> that private garbage collection service drivers are often forced to drive trucks with faulty brakes, worn tires and broken lights. Derrick's death was not unavoidable.</div>"

let title5 = "Leah Silvain"
let description5 = "<div>On June 7th, 2016, Leah Silvain was riding her bike on Evergreen Avenue when she was killed by a fuel truck turning left over the bike lane. CBS New York proceeded to baselessly blame the Sylvain, despite the fact that she undisputedly had the right of way. Leah's death was not her fault.</div>"


let title6 = "Kala Santiago"
let description6 = "<div>On October 11th, 2022, Kala Santiago was killed by a Tractor trailer making an unsafe pass on Parkside Avenue. The next street over was a truck route. Despite this, NYPD refused to attribute blame for the incident. Kala's death was not an accident.</div>"

let config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1Ijoib2ZmaWNpYWxmcmVkIiwiYSI6ImNremhucWQxajQzYTQydnA0Y2cyaWVlemYifQ.rHit1ma6fsUrAjsxqoxheA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'These are not accidents',
    subtitle: 'A map to remember the New Yorkers who were killed by large trucks outside of truck lanes, while riding their bicycles.',
    byline: "I put together this map to remember the people who were killed by trucks outside of truck routes in New York City in recent years. I take this data from the NYPD's <a href='https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95' style='color:white' target='_blank'>Motor Vehicle Collision dataset</a>, and plotted the city's <a href='https://data.cityofnewyork.us/Transportation/New-York-City-Truck-Routes/jjja-shxy' style='color:white' target='_blank'>truck route's</a> in blue. I opted to not name the truck driver involved, not because I don't find them responsible for these needless deaths, but because the issue is much more insidious than irresponsible drivers. These New Yorkers died because of companies which required drivers to operate unfit trucks through illegal routes, they died because of a lack of enforcement of truck routes, they died because of improperly designed stretss, they died because of a lack of infrastructure to protect them. May we not forget them." ,
    footer: 'I want to acknowledge Streetsblog for covering these incidents. Most of the information in this page comes from them. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: "This city is killing us",
            description: intro,
            location: {
                center : [-73.92823, 40.74],
                zoom: 9.84,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: title1,
            image: '/images/image1.jpeg',
            description: description1,
            location: {
                center: [-73.993935, 40.647068],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: title2,
            image: '/images/image2.jpg',
            description: description2,
            location: {
                center: [ -73.9396060, 40.7062100],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: title3,
            image: '/images/image3.webp',
            description: description3,
            location: {
                center: [-73.9354550, 40.6849630],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: title4,
            image: '/images/image4.jpg',
            description: description4,
            location: {
                center: [-73.9400300, 40.6630170],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: title5,
            image: '/images/image5.jpg',
            description: description5,
            location: {
                center: [-73.9288400, 40.6971860],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: title6,
            image: '/images/image6.webp',
            description: description6,
            location: {
                center: [ -73.96622, 40.65319],
                zoom: zoom,
                pitch: 0,
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        

    ]
};
