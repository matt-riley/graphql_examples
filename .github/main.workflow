workflow "Run Tests" {
  on = "pull_request"
  resolves = ["npm ci"]
}

action "npm ci" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm ci"
  resolves = ["TS Lastfm Tests", "JS Lastfm Tests", "JS Fortune Tests"]
}

action "JS Fortune Tests" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:jsfortune"
}

action "JS Lastfm Tests" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:jslastfm"
}

action "TS Lastfm Tests" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:tslastfm"
}
