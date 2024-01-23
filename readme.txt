docker build -t nginx-website .		-	first build image
docker run -it -d -p 8080:80 nginx-website -	run image on port 8080
go to browser and type "localhost:8080"