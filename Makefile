deploy:
	git checkout master && git pull
	npm i
	adonis migration:run
	pm2 restart 0
