"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=`
  type User {
    "The users ID"
    id: ID
    "The users username"
    name: String
    "The users real name"
    realname: String
    "The url for the users Last.fm profile"
    url: String
    "The users avatar"
    image: Images
    "The country in which the user resides"
    country: String
    "The users gender"
    gender: String
    "Returns if the user is a Last.fm subscriber or not"
    subscriber: Boolean
    "The users total playcount"
    playcount: Int
    "The number of playlists the user has"
    playlists: Int
    "The date the user registered"
    registeredDate: Date
    "A list of the users loved tracks"
    lovedTracks: [Track]
    "A list of the users recently played tracks"
    recentTracks(
      "Limit the amount of recently played tracks to return"
      limit: Int,
      "The page of recently played tracks which you wish to return"
      page: Int
    ): [Track]
  }
`;exports.default="\n  type User {\n    \"The users ID\"\n    id: ID\n    \"The users username\"\n    name: String\n    \"The users real name\"\n    realname: String\n    \"The url for the users Last.fm profile\"\n    url: String\n    \"The users avatar\"\n    image: Images\n    \"The country in which the user resides\"\n    country: String\n    \"The users gender\"\n    gender: String\n    \"Returns if the user is a Last.fm subscriber or not\"\n    subscriber: Boolean\n    \"The users total playcount\"\n    playcount: Int\n    \"The number of playlists the user has\"\n    playlists: Int\n    \"The date the user registered\"\n    registeredDate: Date\n    \"A list of the users loved tracks\"\n    lovedTracks: [Track]\n    \"A list of the users recently played tracks\"\n    recentTracks(\n      \"Limit the amount of recently played tracks to return\"\n      limit: Int,\n      \"The page of recently played tracks which you wish to return\"\n      page: Int\n    ): [Track]\n  }\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWEvbGFzdGZtL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndHQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGBcbiAgdHlwZSBVc2VyIHtcbiAgICBcIlRoZSB1c2VycyBJRFwiXG4gICAgaWQ6IElEXG4gICAgXCJUaGUgdXNlcnMgdXNlcm5hbWVcIlxuICAgIG5hbWU6IFN0cmluZ1xuICAgIFwiVGhlIHVzZXJzIHJlYWwgbmFtZVwiXG4gICAgcmVhbG5hbWU6IFN0cmluZ1xuICAgIFwiVGhlIHVybCBmb3IgdGhlIHVzZXJzIExhc3QuZm0gcHJvZmlsZVwiXG4gICAgdXJsOiBTdHJpbmdcbiAgICBcIlRoZSB1c2VycyBhdmF0YXJcIlxuICAgIGltYWdlOiBJbWFnZXNcbiAgICBcIlRoZSBjb3VudHJ5IGluIHdoaWNoIHRoZSB1c2VyIHJlc2lkZXNcIlxuICAgIGNvdW50cnk6IFN0cmluZ1xuICAgIFwiVGhlIHVzZXJzIGdlbmRlclwiXG4gICAgZ2VuZGVyOiBTdHJpbmdcbiAgICBcIlJldHVybnMgaWYgdGhlIHVzZXIgaXMgYSBMYXN0LmZtIHN1YnNjcmliZXIgb3Igbm90XCJcbiAgICBzdWJzY3JpYmVyOiBCb29sZWFuXG4gICAgXCJUaGUgdXNlcnMgdG90YWwgcGxheWNvdW50XCJcbiAgICBwbGF5Y291bnQ6IEludFxuICAgIFwiVGhlIG51bWJlciBvZiBwbGF5bGlzdHMgdGhlIHVzZXIgaGFzXCJcbiAgICBwbGF5bGlzdHM6IEludFxuICAgIFwiVGhlIGRhdGUgdGhlIHVzZXIgcmVnaXN0ZXJlZFwiXG4gICAgcmVnaXN0ZXJlZERhdGU6IERhdGVcbiAgICBcIkEgbGlzdCBvZiB0aGUgdXNlcnMgbG92ZWQgdHJhY2tzXCJcbiAgICBsb3ZlZFRyYWNrczogW1RyYWNrXVxuICAgIFwiQSBsaXN0IG9mIHRoZSB1c2VycyByZWNlbnRseSBwbGF5ZWQgdHJhY2tzXCJcbiAgICByZWNlbnRUcmFja3MoXG4gICAgICBcIkxpbWl0IHRoZSBhbW91bnQgb2YgcmVjZW50bHkgcGxheWVkIHRyYWNrcyB0byByZXR1cm5cIlxuICAgICAgbGltaXQ6IEludCxcbiAgICAgIFwiVGhlIHBhZ2Ugb2YgcmVjZW50bHkgcGxheWVkIHRyYWNrcyB3aGljaCB5b3Ugd2lzaCB0byByZXR1cm5cIlxuICAgICAgcGFnZTogSW50XG4gICAgKTogW1RyYWNrXVxuICB9XG5gO1xuIl19