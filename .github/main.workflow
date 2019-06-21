workflow "Run Tests" {
  on = "pull_request"
  resolves = ["TS Lastfm Tests", "JS Lastfm Tests", "JS Fortune Tests"]
}

action "npm ci" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm ci"
}

action "JS Fortune Tests" {
  needs = "npm ci"
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:jsfortune"
}

action "JS Lastfm Tests" {
  needs = "npm ci"
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:jslastfm"
}

action "TS Lastfm Tests" {
  needs = "npm ci"
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run test:tslastfm"
}
