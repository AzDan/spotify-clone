interface NewWeekReleases {
  albums: {
    href?: string
    items: [
      {
        album_type: string
        artists: [
          {
            external_urls: {
              spotify: string
            }
            href?: string
            id: string
            name: string
            type: string
            uri?: string
          }
        ]
        available_markets: string[]
        external_urls: {
          spotify: string
        }
        href?: string
        id: string
        images: [
          {
            height: number
            url: string
            width: number
          }
        ]
        name: string
        release_date: string
        release_date_precision: string
        total_tracks: number
        type: string
        uri?: string
      }
    ]
  }
}

interface FeaturedPlaylists {
  message: string
  playlists: {
    href: string
    items: [{
      collaborative: boolean
      description: string
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: [{
        height?: number | null
        url: string
        width?: number | null
      }]
      name: string
      owner: {
        display_name: string
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
      }
      primary_color: string|null
      public: string|null
      snapshot_id: string
      tracks: {
        href: string
        total: number
      }
      type: string
      uri: string
    }]
  }
}

interface BrowseCategories {
  categories: {
    href: string
    items: [{
      href: string
      icons: [{
        height: number | null
        url: string
        width: number | null
      }]
      id: string
      name: string
    }]
  }
}

interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: [{
    url: string
    height: number
    width: number
  }]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: {
    reason: string
  }
  type: string
  uri: string
  artists: [{
    external_urls: {
      spotify: string
    }
    followers: {
      href: string
      total: number
    }
    genres: string[]
    href: string
    id: string
    images: [{
      url: string
      height: number
      width: number
    }]
    name: string
    popularity: number
    type: string
    uri: string
  }]
  tracks:{
    href: string
    items:[{
      artists: [
        {
          external_urls: {
            spotify: string
          }
          href?: string
          id: string
          name: string
          type: string
          uri?: string
        }
      ]
      available_markets: string[]
      disc_number: number
      duration: number
      explicit: boolean
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      is_local: boolean
      name: string
      preview_url: string
      track_number: number
      type: string
      uri: string
    }]
    limit: number
    next: string
    offset: number
    previous: string
    total: number
  }
}

interface Playlist {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  href: string
  id: string
  images: [{
    url: string
    height: number
    width: number
  }]
  name: string
  owner: {
    external_urls: {
      spotify: string
    }
    followers: {
      href: string
      total: number
    }
    href: string
    id: string
    type: string
    uri: string
    display_name: string
  }
  public: boolean
  snapshot_id: string
  tracks:{
    href: string
    items:[{
      added_at: string
      added_by: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
      }
      is_local: boolean
      primary_color: string|null
      track: {
        album: {
          album_type: string
          artists: [
            {
              external_urls: {
                spotify: string
              }
              href?: string
              id: string
              name: string
              type: string
              uri?: string
            }
          ]
          available_markets: string[]
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          images: [{
            url: string
            height: number
            width: number
          }]
          name: string
          release_date: string
          release_date_precision: string
          total_tracks: number
          type: string
          uri: string
        }
        artists: [
          {
            external_urls: {
              spotify: string
            }
            href?: string
            id: string
            name: string
            type: string
            uri?: string
          }
        ]
        available_markets: string[]
        disc_number: number
        duration_ms: number
        episode: boolean
        explicit: boolean
        external_ids: any
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        is_local: boolean
        name: string
        popularity: number
        preview_url: string
        track: boolean
        track_number: number
        type: string
        uri: string
        video_thumbnail: {
          url: string|null
        }
      }
    }]
    limit: number
    next: string
    offset: number
    previous: string
    total: number
  }
  type: string
  uri: string
}

interface User {
  country: string
  display_name: string
  email:  string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number|null
  }
  href: string
  id: string
  images: [{
    url: string
    height: number|null
    width: number|null
  }]
  product: string
  type: string
  uri: string
}


// {
//   "error": {
//       "status": 401,
//       "message": "The access token expired"
//   }
// }
