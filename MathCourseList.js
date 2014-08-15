var options = {valueNames: ['completion','name','department','code','credit','major','minor']};
var MathCourseList = new List('math_courses',options);
MathCourseList.add([{name:"Calculus and Linear Algebra",department:"MATH",code:1003,credit:3,major:"",minor:""},
{name:"Calculus I",department:"MATH",code:1013,credit:3,major:"MAEC,MATH",minor:""},
{name:"Calculus II",department:"MATH",code:1014,credit:3,major:"MAEC,MATH",minor:""},
{name:"Concise Calculus",department:"MATH",code:1018,credit:4,major:"",minor:""},
{name:"Accelerated Calculus",department:"MATH",code:1020,credit:4,major:"MAEC,MATH",minor:""},
{name:"Honors Calculus I",department:"MATH",code:1023,credit:3,major:"MAEC,MATH",minor:""},
{name:"Honors Calculus II",department:"MATH",code:1024,credit:3,major:"MAEC,MATH",minor:""},
{name:"information Technology Practical Training",department:"MATH",code:1702,credit:0,major:"",minor:""},
{name:"Mathematics in daily Life",department:"MATH",code:1712,credit:3,major:"",minor:""},
{name:"Flattening the Earth : Maps and Map Projections",department:"MATH",code:1713,credit:3,major:"",minor:""},
{name:"Multivariable Calculus and Basic Probability",department:"MATH",code:2010,credit:3,major:"",minor:""},
{name:"Introduction to Multivariable Calculus",department:"MATH",code:2011,credit:3,major:"",minor:""},
{name:"Multivariable and Vector Calculus",department:"MATH",code:2021,credit:4,major:"",minor:""},
{name:"Multivariable Calculus",department:"MATH",code:2023,credit:4,major:"MAEC,MATH",minor:""},
{name:"Introduction to Real Analysis",department:"MATH",code:2031,credit:4,major:"",minor:""},
{name:"Mathematical Analysis",department:"MATH",code:2033,credit:4,major:"MAEC,MATH",minor:""},
{name:"Honors Mathematic Analysis",department:"MATH",code:2043,credit:4,major:"MAEC,MATH",minor:""},
{name:"Matrix Algebra and Applications",department:"MATH",code:2111,credit:3,major:"",minor:""},
{name:"Linear Algebra",department:"MATH",code:2121,credit:4,major:"MAEC,MATH",minor:""},
{name:"Honors in Linear and Abstract Algebra I",department:"MATH",code:2131,credit:4,major:"MAEC,MATH",minor:""},
{name:"Discrete Structures",department:"MATH",code:2343,credit:4,major:"",minor:""},
{name:"Applied Linear Algebra and Differential Equations",department:"MATH",code:2350,credit:4,major:"",minor:""},
{name:"Introduction to Differential Equations",department:"MATH",code:2351,credit:3,major:"",minor:""},
{name:"Differential Equations",department:"MATH",code:2352,credit:4,major:"",minor:""},
{name:"Applied Statistics",department:"MATH",code:2411,credit:4,major:"MAEC",minor:"ACTM"},
{name:"Probability",department:"MATH",code:2421,credit:4,major:"",minor:"ACTM"},
{name:"Fundamentals of Actuarial Mathematics",department:"MATH",code:2511,credit:3,major:"",minor:"ACTM"},
{name:"Concepts in Mathematics",department:"MATH",code:2721,credit:2,major:"",minor:""},
{name:"Mathematical Problem Solving",department:"MATH",code:2731,credit:3,major:"",minor:""},
{name:"Geometric Constructions",department:"MATH",code:2741,credit:2,major:"",minor:""},
{name:"Real Analysis",department:"MATH",code:3033,credit:4,major:"MAEC,MATH",minor:""},
{name:"Honors Real Analysis",department:"MATH",code:3043,credit:4,major:"MAEC,MATH",minor:""},
{name:"Abstract Algebra",department:"MATH",code:3121,credit:3,major:"",minor:""},
{name:"Honors in Linear and Abstract Algebra II",department:"MATH",code:3131,credit:4,major:"",minor:""},
{name:"introduction to Numerical Methods",department:"MATH",code:3311,credit:2,major:"",minor:""},
{name:"Numerical Analysis",department:"MATH",code:3312,credit:3,major:"",minor:""},
{name:"Combinatorial Analysis",department:"MATH",code:3343,credit:3,major:"",minor:""},
{name:"Statistical Inference",department:"MATH",code:3423,credit:3,major:"",minor:"ACTM"},
{name:"regression Analysis",department:"MATH",code:3424,credit:null,major:"",minor:""},
{name:"Stochastic Modeling",department:"MATH",code:3425,credit:3,major:"MAEC",minor:""},
{name:"Sampling",department:"MATH",code:3426,credit:3,major:"MAEC",minor:""},
{name:"Complex Analysis",department:"MATH",code:4023,credit:3,major:"",minor:""},
{name:"Calculus on Manifolds",department:"MATH",code:4033,credit:3,major:"",minor:""},
{name:"Theory of Ordinary Differential Equations",department:"MATH",code:4051,credit:3,major:"",minor:""},
{name:"Partial Differential Equations",department:"MATH",code:4052,credit:3,major:"",minor:""},
{name:"Topics in Modern Analysis",department:"MATH",code:4061,credit:2,major:"",minor:""},
{name:"Functional Analysis",department:"MATH",code:4063,credit:2,major:"",minor:""},
{name:"Number Theory and Applications",department:"MATH",code:4141,credit:3,major:"",minor:""},
{name:"Introduction to Lie Groups",department:"MATH",code:4151,credit:3,major:"",minor:""},
{name:"Euclidean and Non-Euclidean Geometries",department:"MATH",code:4221,credit:3,major:"",minor:""},
{name:"Differential Geometry",department:"MATH",code:4223,credit:3,major:"",minor:""},
{name:"Topology",department:"MATH",code:4225,credit:3,major:"",minor:""},
{name:"Game Theory",department:"MATH",code:4321,credit:3,major:"MAEC",minor:""},
{name:"Introduction to Fluid Dynamics",department:"MATH",code:4326,credit:3,major:"",minor:""},
{name:"Mathematical Biology",department:"MATH",code:4333,credit:3,major:"",minor:""},
{name:"Introduction to Optimization",department:"MATH",code:4335,credit:3,major:"MAEC",minor:""},
{name:"Introduction to Mathematics of Image Processing",department:"MATH",code:4336,credit:3,major:"",minor:""},
{name:"Numerical Solutions of Partial Differential Equations",department:"MATH",code:4351,credit:3,major:"",minor:""},
{name:"Data Analysis",department:"MATH",code:4422,credit:3,major:"",minor:""},
{name:"Nonparametric Statistics",department:"MATH",code:4423,credit:3,major:"",minor:""},
{name:"Multivariate Analysis",department:"MATH",code:4424,credit:3,major:"",minor:""},
{name:"Introductory Time Series",department:"MATH",code:4425,credit:3,major:"",minor:""},
{name:"Survival Analysis",department:"MATH",code:4426,credit:3,major:"",minor:"ACTM"},
{name:"Loss Models and Credibility Theory",department:"MATH",code:4427,credit:3,major:"",minor:"ACTM"},
{name:"Quantitative Methods for Fixed Income Derivatives",department:"MATH",code:4511,credit:3,major:"MAEC",minor:"ACTM"},
{name:"Fundamentals of Mathematical Finance",department:"MATH",code:4512,credit:3,major:"MAEC",minor:"ACTM"},
{name:"Life Contingencies Models and Insurance Risk",department:"MATH",code:4513,credit:3,major:"",minor:"ACTM"},
{name:"Special Topics in Actuarial Mathematics",department:"MATH",code:4825,credit:3,major:"",minor:"ACTM"},
{name:"Math Capstone Project",department:"MATH",code:4999,credit:3,major:"MAEC,MATH",minor:""}]);
window.onload = function(){
MathCourseList.sort('code');
MathCourseList.show(1,20);
$('.name').click(function(){
$(event.target).prev().css("color","black");
$(event.target).addClass(" clicked");
})

$('.clicked').click(function(){
$(event.target).prev().css("color","white");
$(event.target).addClass(" unclicked");
})
}

function Complete() {
$(this).closest('span').css("color","red");

}

function MathPage1() {
MathCourseList.show(1,20);
}
function MathPage2() {
MathCourseList.show(21,20);
}
function MathPage3() {
MathCourseList.show(41,20);
}
function MathPage4() {
MathCourseList.show(61,20);
}
function Major_Minor_Primer(){
MathCourseList.show(1,MathCourseList.size());
var majors = document.getElementsByClassName("major");
for(i = 0;i<majors.length;i++){
majors[i].style.display="none";
}
var minors = document.getElementsByClassName("minor");
for(i = 0;i<minors.length;i++){
minors[i].style.display="none";
}
}
function MAEC(){
Major_Minor_Primer();
MathCourseList.filter(function(course){if(course.values().major.indexOf("MAEC")!=-1){return true}else{return false}});
}
function ACTM(){
Major_Minor_Primer();
MathCourseList.filter(function(course){if(course.values().minor.indexOf("ACTM")!=-1){return true}else{return false}});
}