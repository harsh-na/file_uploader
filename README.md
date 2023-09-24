# file_uploader
This is the File uploder project-


To use it on your local machine following changes need to be performed
1. make the .env file and change the credentials accordingly
2. change the path in backend/contoller/image-controller in line no. 17 to "path: `http://localhost:${process.env.PORT}/file/${file._id}`"
3. change the API_URI in frontend/src/service/api.js to "const API_URI = "http://localhost:8000";"
   Above changes helps in working the code in localhost
