#!/usr/bin/env sh
echo 'scp to bixin'
ssh -o StrictHostKeyChecking=no 47.102.132.207

scp -r vp root@47.102.132.207:/root/xiaoxin/blog/vp
