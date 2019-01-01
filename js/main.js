var projects = [{
    name: "Miwok Application",
    info: "	Teaches the Miwoke language using audio and text",
    git: "",
    tools: ["Android", " Java ", " XML"]
}, {
    name: "Facebook Chatbot",
    info: "Provides Automatic Responses to you facebook page",
    git: "",
    tools: ["NojeJS", " ExpressJS"]

}, {
    name: "Pomodoro Clock ",
    info: "Implementation of Pomodoro Technique",
    git: "https://github.com/GauravJain98/Pomodoro-Clock",
    tools: [" HTML", " CSS", " JavaScript "]
}, {
    name: "Tetris",
    info: "Implementation of Tetris game using canvas and requestanimationFrame",
    git: "https://github.com/GauravJain98/Tetris",
    tools: [" HTML", " CSS", " JavaScript"]
},{
    name: "Internship Portal",
    info: "Used Django Admin, User, Authentication System and website Subdomaining",
    madeFor: {
        name:"W3Dev",
        link:"https://w3dev.in/"
    },
    tools: [" HTML", " CSS", " JavaScript","Django","Redis","Memecache"],
    link: "gaurav.m.w3dev.in"
}];
var skills = [{
    name: "C",
    img: "C.png"
}, {
    name: "C++",
    img: "C++.png"
}, {
    name: "Java",
    img: "Java.png"
}, {
    name: "HTML5",
    img: "HTML5.png"
}, {
    name: "CSS",
    img: "CSS.png"
}, {
    name: "JavaScript",
    img: "JavaScript.png"
}, {
    name: "Python",
    img: "Python.png"
}, {
    name: "Android",
    img: "Android.png"
}, {
    name: "Flask",
    img: "Flask.png"
}, {
    name: "Git",
    img: "Git.png"
}, {
    name: "Bootstrap",
    img: "Boostrap.png"
}, {
    name: "Firebase",
    img: "Firebase.png"
}, {
    name: "Django",
    img: "django.png"
}, {
    name: "SQL",
    img: "SQL.png"
}];

var addSkillGrid = function(skills, id) {
    var listHtml = "";
    skills.forEach(function(el) {
        // listHtml = listHtml + '<div class="skill col-md-3 col-sm-3 col-xs-6"><div class="container-fluid tool"><h3 class="tool">' + el.name + '</h3></div></div>'
        listHtml = listHtml + '<div class="float-left p-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"><div class="thumbnail"><div class="category"><i class="icon-tag icon-white"></i> '
        listHtml = listHtml + ' <a href="#">' + '</a></div><div class="caption"><h4>' + el.name + '</h4><img class=" tool-image img-fluid" src="assets/img/' + el.img + '" width=100%></div></div></div>';
    });
    document.getElementById(id).innerHTML = listHtml;
}
var addProjectGrid = function(project, id) {
    var listHtml = "";
    project.forEach(function(el) {
        //listHtml = listHtml + '<div class="project col-md-6 col-sm-12 col-lg-2 text-center"><h2 >' + el.name + '</h2><p>' + el.info + '</p>'
        listHtml = listHtml + '<div class="project p-2 col-lg-3 col-md-6 col-sm-12 col-xs-12"><div class="thumbnail"><div class="category"><i class="icon-tag icon-white"></i> ' + el.tools.toString()
        listHtml = listHtml + ' <a href="#">' + '</a></div><div class="caption"><h4>' + el.name + '</h4><p>' + el.info + '</p><p>'
        if (typeof(el.git) !=='undefined') {
            listHtml = listHtml + '<a href="' + el.git + '" class="btn"> <i class="fa fa-github-alt"></i> Github </a>'
        }
        if (typeof(el.madeFor)!=='undefined') {
            listHtml = listHtml + '<a href="' + el.madeFor.link + '" class="btn"> <i class="fa fa-briefcase"></i> '+el.madeFor.name + ' </a>'
        }
        listHtml = listHtml + '</p></div></div></div>';
    });
    document.getElementById(id).innerHTML = listHtml;
}
addSkillGrid(skills, "skills-list");
addProjectGrid(projects, "project-list");