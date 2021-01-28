deploy:
	git checkout master && git pull
	adonis migration:run
	pm2 restart 0
