import { Express, Request, Response } from "express";
const express = require('express')
const app: Express = express()
const axios = require('axios').default
var qs = require('qs')
const port = 3001

const { clientId, authEndpoint, redirectUri, clientSecret } = require('../helper/config');
const { getRandomString } = require('../helper/spootify');

const apiEndpoint = "https://api.spotify.com/v1/";

app.get('/new-releases', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}browse/new-releases`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err))
})

app.get('/featured-playlist', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}browse/featured-playlists`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err))
})

app.get('/categories', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}browse/categories?limit=50`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err))
})

app.get('/album', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}albums/${req.query.id}`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err.response.data))
})

app.get('/playlist', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}playlists/${req.query.id}`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err.response.data))
})

app.get('/user', (req: Request, res: Response) => {
  axios.get(`${apiEndpoint}me`, {
    headers: {
      Authorization: 'Bearer '+req.query.accessToken
    }
  })
  .then((resp: any) => res.send(resp.data))
  .catch((err: any) => console.log(err.response.data))
})

app.get('/getToken', (req: Request, res: Response) => {
  var secret = clientId+':'+clientSecret
  var buffer = Buffer.from(secret)
  var s = buffer.toString('base64')

  var data = qs.stringify({
    'grant_type': 'authorization_code',
    'code': req.query.code,
    'redirect_uri': redirectUri 
  });
  
  var config = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Authorization': 'Basic '+s, 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  axios(config)
  .then((resp: any) => {
    res.send({accessToken: resp.data.access_token, refreshToken: resp.data.refresh_token})
  })
  .catch((err: any) => console.log(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})