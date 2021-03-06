export default `
  "The type for a recording artist"
  type Artist {
    "The musicbrainz id for the artist"
    id: ID
    "The artists name"
    name: String
    "The URL to the artists Last.fm page"
    url: String
    "Images of the Artist"
    images: Images
    "The total amount of listeners for the Artist"
    totalListeners: String
    "The total amount of plays the artist has had"
    totalPlays: String
    "Tags assigned to the artist"
    tags: [Tag]
    "The artists biography"
    bio: Bio
  }
`;
