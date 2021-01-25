deploy:
	git checkout master && git pull
	pm2 restart 0
