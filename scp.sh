#!/usr/bin/env sh
echo 'start copy --->'
ssh root@47.102.132.207 rm -r -f /root/xiaoxin/blog/vp

scp -r vp root@47.102.132.207:/root/xiaoxin/blog/vp
