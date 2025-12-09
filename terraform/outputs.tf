output "instance_public_ip" {
  value = aws_instance.node_app_ec2.public_ip
}

output "app_url" {
  value = "http://${aws_instance.node_app_ec2.public_ip}:3000/health"
}
