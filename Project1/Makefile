## up: docker-compose up -d
up:
	docker run --name=mysql -e MYSQL_ROOT_PASSWORD=root@123 -p 8060:3306 -d mysql:latest
	docker run --name=mywebserver -d -p 8070:80  webserver	
#docker-compose up

## down: docker-compose down
down:
	docker stop mysql mywebserver
	docker rm mysql mywebserver
#docker-compose down

## stop: docker-compose stop
stop:
	docker-compose stop

## start: docker-compose start
start:
	docker-compose start

## restart: docker-compose restart
restart:
	docker-compose restart
