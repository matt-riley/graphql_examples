import LastFMAPI from './lastfm';

const dataSources = () => ({
  lastfmAPI: new LastFMAPI(),
});

export default dataSources;
