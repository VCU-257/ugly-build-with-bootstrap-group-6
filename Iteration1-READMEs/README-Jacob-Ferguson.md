# Student Name: Jacob Ferguson

## 1. My Assigned Work
I built the entirety of the listing page. 

## 2. Bootstrap Implementation
*Briefly explain the standard components you used for your assigned areas. [cite_start]Did you stick to the plan from Table 1?*
* **Components Used:** I used all the components listed in table 1. I also added some buttons for **add to cart** as well as **continue shopping** and **checkout**.  


## 3. Technical Challenges & Solutions
[cite_start]*Look back at Table 4: Technical Risks. Did you build any of those risky components? How did you solve the challenge? If you didn't face those specific risks, what was the hardest part of your assigned work?*

I did work with one of the risky components: mobile resizing. I worked around this by using col-md-5 and col-md-2 for resizing. I also used img-fluid for the placeholder image that way it wouldn't overflow. I also used div className="container py-4" to ensure the content doesn't touch the edges of the phone screen. 

## 4. AI / LLM Usage
*Did you use an AI tool to help write or debug your code?*
* **What I asked the AI:** How do I make reactive buttons in bootstrap 5
* **How it helped & What I learned:** It told me to implement the isAddedToCart boolean. It is set to true when the button is clicked, this changes the **add to cart** button to be yellow using *btn-warning* to give the user confirmation that it has been clicked. This is also what allowed be to add the **item added** popup when the button is clicked. This taught me that it's much easier to have a boolean that is changed in the background to change what is shown on the webpage as opposed to just executing a bunch of code on the button click itself. 

## 5. Live Site Link
*Provide the GitHub Pages link to the specific page(s) you built.*
* **Live URL:** [\[Insert Link Here\]](https://vcu-257.github.io/ugly-build-with-bootstrap-group-6/listing)