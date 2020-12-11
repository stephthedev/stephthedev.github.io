# stephthedev.github.io

Uses jekyll to serve static content and react for dynamic content. 

## Setup

### Prerequisities
1. Install [rvm](https://rvm.io/)
2. Install [bundler](https://bundler.io/)
3. Install [node](https://nodejs.org/en/download/)

### Install Jekyll
```
gem install bundle
cd jekyll
bundle install
```

### Install node modules
```
cd react
npm install
```

## Run it
### Start the jekyll server
```
cd jekyll
bundle exec jekyll servce
```

### Start the react server
Start webpack dev servers to auto-compile react files
```
npm start
```

## Verify
* `open http://localhost:4000`