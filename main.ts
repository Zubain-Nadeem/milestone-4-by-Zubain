document.getElementById("resume")?.addEventListener("submit",function(event:Event){
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillElement = document.getElementById("skill") as HTMLTextAreaElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){

        const name:string = nameElement.value;
        const email:string = emailElement.value;
        const phone:string = phoneElement.value;
        const education:string = educationElement.value;
        const experience:string = experienceElement.value;
        const skill:string = skillElement.value;

        const resumeOutput:string = `
        <h2>Resume</h2>
        <p><strong>Name</strong><span id="edit-name" class="editable"> ${name} </span></p>
        <p><strong>Email</strong><span id="edit-email" class="editable"> ${email}  </span></p>
        <p><strong>Phone-No</strong><span id="edit-phone" class="editable"> ${phone }  </span></p>

        <h3>Education</h3>
        <p id="edit-education" class="editable" >${education} </p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience} </p>

        <h3>Skills</h3>
        <p id="edit-skill" class="editable">${skill} </p>
        `;

        const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
        if(resumeOutputDiv){
            resumeOutputDiv.innerHTML = resumeOutput;
            makeEditable();
        }
       
    }
});


function makeEditable(){
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener("click",function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";


            // replace
            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
                const input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add ("editing-input");
                
                input.addEventListener("blur", function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline";
                    input.remove;
                })



                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();}
        })
        
    });
}