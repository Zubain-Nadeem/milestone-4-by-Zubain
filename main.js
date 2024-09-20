var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name</strong><span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n        <p><strong>Email</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "  </span></p>\n        <p><strong>Phone-No</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "  </span></p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\" >").concat(education, " </p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, " </p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skill\" class=\"editable\">").concat(skill, " </p>\n        ");
        var resumeOutputDiv = document.getElementById("resume-output");
        if (resumeOutputDiv) {
            resumeOutputDiv.innerHTML = resumeOutput;
            makeEditable();
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove;
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
