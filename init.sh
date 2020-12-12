docker stop app-server-react
docker run --name app-server-react -i -t --rm -d -v ${PWD}:/usr/src/app -p 127.0.0.1:3000:3000 -w /usr/src/app node:15.3.0-alpine3.12

docker exec -d app-server-react npm install -g react
docker exec -d app-server-react npm install -g react-dom
docker exec -d app-server-react npm install -g react-scripts
docker exec -d app-server-react npm install
docker exec -d app-server-react chmod 777 -R /usr/src/app 
docker exec -d app-server-react npx react-scripts start

echo "React Server Started"
