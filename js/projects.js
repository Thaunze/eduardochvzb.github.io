const CATEGORIES = ['Responsive Web Design', 'Front-end Libraries', 'Data Visualization', 'APIs and microservices'];


const containerRoot = () => {
    let elem = document.createElement('div');
    elem.classList.add('col-lg-4', 'col-sm-6');
    return elem;
};
const textElem = data => {
    let captionContent = document.createElement('div');
    captionContent.classList.add('portfolio-box-caption-content');

    let categoryText = document.createElement('div');
    categoryText.classList.add('project-category','text-faded');
    categoryText.innerText = CATEGORIES[data[0]];

    let nameText = document.createElement('div');
    nameText.classList.add('project-name');
    nameText.innerText = data[1];

    captionContent.appendChild(categoryText);
    captionContent.appendChild(nameText);

    return captionContent;
}
const containerInfo = data =>{
    let container = document.createElement('a');
    let captionBox = document.createElement('div');
    let img = document.createElement('img');

    container.classList.add('portfolio-box');
    container.setAttribute('target','_blank');
    container.setAttribute('href', data[3]);

    img.setAttribute('src', `img/portfolio/${data[2]}.png`);
    img.classList.add('img-responsive');

    container.appendChild(img);

    captionBox.classList.add('portfolio-box-caption');    

    let captionContent = textElem(data);
    captionBox.appendChild(captionContent);
    container.appendChild(captionBox);

    return container;
}


function projectCreator (projects, root){
    projects.forEach(elem => {
        let container = containerRoot();
        let infoElem = containerInfo(elem);

        container.appendChild(infoElem);
        root.appendChild(container);
    });
}

const PROJECTS = [
    [
        2,
        'Bar chart',
        13,
        'https://echvzb.github.io/barChartGDP/',
    ],
    [
        1,
        'Drum Machine',
        1,
        'https://drummachine-chvz.netlify.app/'
    ],
    [
        0,
        'Weather App',
        19,
        'https://echvzb.github.io/weatherApp/'
    ],
    [
        3,
        'URL Shortener Microservice',
        11,
        'https://url-shortener-microservice-chvz.glitch.me/'
    ],
    [
        0,
        'Tribute Page',
        2,
        'https://echvzb.github.io/alfredoJalife/'
    ],
    [
        1,
        'Javascript Calculator',
        3,
        'https://calculadorajs-chvz.netlify.app/'
    ],
    [
        1,
        'Markdown Previewer',
        4,
        'https://markapp-chvz.netlify.app'
    ],
    [
        3,
        'Request Header Parser Microservice',
        10,
        'https://request-header-parser-microservice-chvz.glitch.me/',
    ],
    [
        2,
        'Scatter Plot',
        14,
        'https://echvzb.github.io/scatterPlotDoping/'
    ],
    [
        1,
        'Pomodoro Clock',
        5,
        'https://pomodoroclock-chvz.netlify.app/'
    ],
    [
        0,
        'Product Landing Page',
        8,
        'https://echvzb.github.io/ProductPage/'
    ],
    [
        3,
        'Timestamp Microservice',
        9,
        'https://timestamp-microservice-chvz.glitch.me/'
    ],
    [
        1,
        'To Do App',
        6,
        'https://todo-chvz.netlify.app/'
    ],
    [
        2,
        'Heat Map',
        15,
        'https://echvzb.github.io/heatMap/'
    ],
    [
        1,
        'Random Quote Machine',
        12,
        'https://quotemachine-chvz.netlify.app/'
    ],
    [
        3,
        'File Metadata',
        18,
        'https://file-metadata-chvz.glitch.me/'
    ],
    [
        3,
        'Exercise Tracker',
        17,
        'https://exercise-tracker-chvz.glitch.me/',
    ],
    [
        2,
        'Choropleth Map',
        16,
        'https://echvzb.github.io/us-education-ChroplethMap/'
    ],
    [
        0,
        'Survey Form',
        7,
        'https://echvzb.github.io/SurveyForm/'
    ],
]


const portfolioElem = document.querySelector('#project-row');


projectCreator(PROJECTS, portfolioElem);
