/*
#testimonial
    #testimonial-thumb
    #testimonial-name
    #testimonial-company
    #testimonial-text

*/
var webSiteLink = "http://127.0.0.1:8080/";
var testimonialTargetDiv = $('#testimonial');
var testimonialTargetName = $('#testimonial-name');
var testimonialTargetCompany = $('#testimonial-company');
var testimonialTargetText = $('#testimonial-text');
var testimonialTargetImage = $('#testimonial-image');
var testimonialNextButton = $('#testimonial-right-arrow')
var testimonialPrevButton = $('#testimonial-left-arrow')
var currentTestimonial = 0;
var tss = []
var testimonialTemplate = function () {
    return {
        "name": "N/A"
        , "company": "N/A"
        , "text": "N/A"
        , "image": "N/A"
    }
}

function retrieveTestimonials() {
    try {
        var TestimonialsData = [
            {
                name: "OUR AFFAIR", company: "SERVICES", text: "PORTFOLIO", image: "../img/flower.jpg"
            },
            {
                name: "BRANDING", company: "DESIGNING", text: "SOCIAL MEDIA", image: "../img/flower2.jpg"
            },
            {
                name: "Brand Name", company: "Logo", text: "Tagline", image: "../img/download.jpg"
            }
        ];
        for (var i = 0; i <= TestimonialsData.length - 1; i++) {
            var t = new testimonialTemplate();
            t.name = TestimonialsData[i].name;
            t.company = TestimonialsData[i].company;
            t.text = TestimonialsData[i].text;
            t.image = TestimonialsData[i].image;
            tss.push(t);
        }
    }
    catch (err) {
        console.log("Error in Testimonial.js-->" + err.message);
    }
    finally {
        onPageReady();
    }
}
function viewTestimonial(no) {
    if (no < tss.length) {
        var selectedTestimonial = tss[no];
        testimonialTargetName.html(selectedTestimonial.name);
        testimonialTargetCompany.html(selectedTestimonial.company);
        testimonialTargetText.html(selectedTestimonial.text);
        testimonialTargetImage.css("background-image", 'url("' + '../img/person.png' + '")');
        if (selectedTestimonial.image) {
            if (selectedTestimonial.image != "N/A") {
                testimonialTargetImage.css("background-image", 'url( "' + selectedTestimonial.image + '")');
            }
        }
    }
    else {
        console.log("Cannot access testimonial no. " + no + " out of total " + tss.length + " testimonials");
    }
}

function onPageReady() {
    testimonialNextButton.on('click', nextTestimonial);
    testimonialPrevButton.on('click', prevTestimonial);
    startChanger(6000);
}

function startChanger(timeOut) {
    viewTestimonial(0);
    setInterval(nextTestimonial, timeOut);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % tss.length;
    viewTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1) % tss.length;
    if (currentTestimonial == -1) {
        currentTestimonial = tss.length - 1;
    }
    viewTestimonial(currentTestimonial);
}
$(document).ready(function () {
    retrieveTestimonials();
})
