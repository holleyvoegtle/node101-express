# node101-express

The purpose of this project was to create a new server using the Express framework. This included logging all incoming requests with the morgan logging library. A previous project (SD Top Spots) was used to update it with a backend. 

Instead of just responding with a simple "Hello World", an entire dictionary and some data for the application was served. 

Exit criteria:
- server responded to GET requests to/route from the Top Spots page
- server responded with a status code of 200
- server logged each request using morgan's dev format
- server indicated when its is listening and on which port
- server responded to GET requests to data/route from the Top Spots data
- all tests passed
