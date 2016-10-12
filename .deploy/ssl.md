Mix steps extracted from:

1. https://certbot.eff.org/#ubuntuxenial-nginx and
2. https://github.com/arunoda/meteor-up/wiki/Setting-up-SSL-with-LetsEncrypt-and-MeteorUp

---

1. ssh into the webserver
2. Install certbot (former letsencrypt) from: https://certbot.eff.org/#ubuntuxenial-nginx
3. Run the following command and follow the steps it will give you:

        letsencrypt certonly --standalone

4. Run:

        cd /etc && tar -cvvf letsencrypt_`date "+%Y-%m-%d"`.tar letsencrypt

5. Exit the ssh session back to your box.
6. Copy the tar file back to your own box:

        scp root@konsilos:/etc/letsencrypt_`date "+%Y-%m-%d"`.tar ~/

7. Backup this file up somewhere!
8. Copy `ssl.pem` to your mup folder: `cp ssl.pem .deploy/ssl.pem`
9. Add this line to your `mup.js`:

```javascript
ssl: {
    port: 443,
    crt: './fullchain.pem',
    key: './privkey.pem'
}
```

10. Add the `force-ssl` package to meteor: `meteor add force-ssl`
11. Add the pem file to .gitignore: `echo "*.pem" >> .gitignore`
12. Redeploy: `npm run mup deploy`
