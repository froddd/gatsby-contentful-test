# Gatsby Contentful test

A simple repository with a barebones Gatsby/Contentful integration to showcase work in [this Pull Request](https://github.com/gatsbyjs/gatsby/pull/17500)

## Setup

```bash
$ yarn
```

### Test without fix

```bash
$ yarn develop
```

Should produce an error similar to this:

```
"gatsby-source-contentful" threw an error while running the sourceNodes lifecycle:

entryItemFields[foreignReference.name].push is not a function



  TypeError: entryItemFields[foreignReference.name].push is not a function

  - normalize.js:331 foreignReferences.forEach.foreignReference
    [gatsby-contentful-test]/[gatsby-source-contentful]/normalize.js:331:52

  - Array.forEach

[truncated]
```

### Test with fix

Clone the fix repository, build the `gatsby-source-contentful` package then link locally:

```bash
$ cd ..
$ git clone git@github.com:froddd/gatsby.git
$ cd gatsby/packages/gatsby-source-contentful
$ yarn && yarn build
$ yarn link
$ cd ../../../gatsby-contentful-test
$ yarn link gatsby-source-contentful
``` 

Clear build caches and run develop again, the error message should have disappeared:

```bash
$ rm -rf .cache && rm -rf public && yarn develop
```

The site builds correctly and the content can be checked in the graphql explorer on http://localhost:8000/___graphql

