"use strict";
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("resume-form");
    var output = document.getElementById("resume-output");
    var personalInfoOutput = document.getElementById("personal-info-output");
    var educationOutput = document.getElementById("education-output");
    var workExperienceOutput = document.getElementById("work-experience-output");
    var skillsOutput = document.getElementById("skills-output");
    var profilePictureOutput = document.getElementById("profile-picture");
    var generateResumeButton = document.getElementById("generateResume");
    if (generateResumeButton) {
        generateResumeButton.addEventListener("click", function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var name = ((_a = document.getElementById("pname")) === null || _a === void 0 ? void 0 : _a.value) || '';
            var email = ((_b = document.getElementById("p_email")) === null || _b === void 0 ? void 0 : _b.value) || '';
            var phone = ((_c = document.getElementById("p_phone")) === null || _c === void 0 ? void 0 : _c.value) || '';
            var school = ((_d = document.getElementById("p_school")) === null || _d === void 0 ? void 0 : _d.value) || '';
            var univeristy = ((_e = document.getElementById("p_uni")) === null || _e === void 0 ? void 0 : _e.value) || '';
            var workplace = ((_f = document.getElementById("comp")) === null || _f === void 0 ? void 0 : _f.value) || '';
            var workplace2 = ((_g = document.getElementById("compa")) === null || _g === void 0 ? void 0 : _g.value) || '';
            var skills = ((_h = document.getElementById("hobby")) === null || _h === void 0 ? void 0 : _h.value) || '';
            var profilePictureInput = document.getElementById("profilePicture");
            // Display the generated resume
            if (personalInfoOutput) {
                personalInfoOutput.innerHTML = "\n                    <h3>Personal Information</h3>\n                    <p>Name: ".concat(name, "</p>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                    \n                ");
            }
            if (educationOutput) {
                educationOutput.innerHTML = "\n                    <h3>Education</h3>\n                    <p>School: ".concat(school, "</p>\n                    <p>University : ").concat(univeristy, "</p>\n                ");
            }
            if (workExperienceOutput) {
                workExperienceOutput.innerHTML = "\n                    <h3>Work Experience</h3>\n                    <p>Workplace: ".concat(workplace, "</p>\n                    <p>Workplace: ").concat(workplace2, "</p>\n                ");
            }
            if (skillsOutput) {
                skillsOutput.innerHTML = "\n                    <h3>Skills</h3>\n                    <p>Your skills : ".concat(skills, "</p>\n                ");
            }
            
            if (output) {
                output.classList.remove("hidden");
            }
        });
    }
});
