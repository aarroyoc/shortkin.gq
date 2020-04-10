# Shortkin.gq

Shortkin.gq is an anonymous URL shortener based on LevelDB.

# Run it!

```
docker-compose up
```

# Develop

```
git clone https://github.com/aarroyoc/shortkin.gq
cd shortkin.gq
npm install
npm start
npm test
```
# Backup

```
ansible-playbook backup.yml -i 192.168.0.156, --ask-pass
```