//Luke McEvoy
//Pledge my Honor that I have abided by the Stevens Honor System

// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
   var formUsername = document.getElementById("formUsername").value;
   var formCaption = document.getElementById("formCaption").value;
   var formImg = fileLocations[document.getElementById("formImg").value];
   addNewPost(formUsername, formCaption, formImg);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   var div = document.createElement("div");
   div.className=("post");
   // Create a span for the user
   var span = document.createElement("span");
   span.innerText=username;
   div.appendChild(span);
   // Create image element
   var image = document.createElement("img");
   image.src=imgLocation;
   image.alt=caption;
   div.appendChild(image);
   // Create overlay element
   var div2 = document.createElement("div");
   div2.className=("postOverlay");
   div2.innerText=caption;
   div.appendChild(div2);
   // Add all child elements (order matters)
   var x = document.getElementById("postList")
   x.appendChild(div);
   // Add event listeners to post
   var y = document.getElementsByClassName("postOverlay");
   for(var i = 0; i < y.length; i++){
      y[i].addEventListener("mouseover",function(){
         this.style.opacity = 1;
      });
      y[i].addEventListener("mouseleave",function(){
         this.style.opacity = 0;
      });
   }
   // Add post element to post list
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};