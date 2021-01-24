# Personal Website

This site was built mainly to add to my portfolio

# Setup

This site uses caddy for the server and ssl cert and pm2 to expose adonis.

Dynamic dns is done via ddclient and namecheaps dynamic dns system (setup instructions not included).

## Dyanmic DNS setup
1) Install ddclient (https://sourceforge.net/p/ddclient/wiki/Home/)
2) If you are presented with a guided setup for ddclient skip it or put in garbage values for required fields
3) Edit the ddclient config file located under `/etc/ddclient.conf` using https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/ as your guide 

## Web server setup
1) Install caddy (https://caddyserver.com/docs/install#debian-ubuntu-raspbian)
2) Install pm2 (https://pm2.keymetrics.io/docs/usage/quick-start/)
3) Install nvm (https://github.com/nvm-sh/nvm) then use nvm to install node and npm
4) Install adonis (https://adonisjs.com/docs/4.1/installation)
5) Clone this repo, cd in and run `pm2 start server.js`
6) Edit the default Caddyfile stored under `/etc/caddy/` and replace it with the included Caddyfile in the repo (if for some reason someone other than me wants to use this website replace the `bmesser.dev` line with your domain)
7) Run `caddy reload`  
8) If everything is setup properly you should now be able to access the website via whatever domain name you pointed to the server