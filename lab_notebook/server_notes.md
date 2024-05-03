# Hosting Backend Server on laptop vs. on board

- Hosting on Arduino may make it a more simplified architecture
- Problem is that there might not be (likely wont be) enough memory to run the https server and all the food data
- Switching to just running backend on my laptop
- But now that we run on my laptop, need to forward local host port to a public address so app and esp32 can access

# HTTPS vs. HTTP

- For some reason https does not work on arduino?
- Converting to http
- Mobile app doesnt support http...
- luckily ngrok supports dual hosting for both https and http
- Currently dual forwarding http and https servers on laptop to public addresses
- To make the api call, just need to change the address on mobile to be https and esp32 to be http

# Plain old vanilla javascript

- Nothing too fancy for the server, just a simple http server written in vanilla javascript.

- Just need to make sure that the state variables for the recipe are stored on the server and also the states for each container and whether they are filled or not

# Endpoint testing

- experimented with just using curls in the terminal, but this got kind of tedious

- decided to opt w/ using Postman for endpoint testing and this smoothed things out a lot

- could verify very easily that the backend was working and later confirmed many errors on the hardware end for why data wasn't being communicated

- very simple errors included the names in the json objects being sent didn't match what the server was looking for etc.
