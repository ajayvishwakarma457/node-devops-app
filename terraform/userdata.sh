#!/bin/bash
apt-get update -y
apt-get install -y docker.io
systemctl start docker
systemctl enable docker

docker pull ajayvishwakarma457/devops-node-app:v1
docker run -d -p 3000:3000 ajayvishwakarma457/devops-node-app:v1
