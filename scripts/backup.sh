#!/bin/bash
set -e

DATE=$(date +%F)
pg_dump mydb > /tmp/mydb-$DATE.sql
aws s3 cp /tmp/mydb-$DATE.sql s3://my-backups/
