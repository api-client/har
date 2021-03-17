# ARC HAR

A module containing all logic and UIs related to HAR data processing in Advanced REST Client.

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-har.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-har)

[![Tests and publishing](https://github.com/advanced-rest-client/arc-har/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/arc-har/actions/workflows/deployment.yml)

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/arc-har
```

### Transforming the request object

To transform ARC request object into a HAR log, use the `HarTransformer` class.

```javascript
import { HarTransformer } from '@advanced-rest-client/arc-har';

const processor = new HarTransformer('My app name', 'My app version');
const result = await processor.transform([arcRequest]);
```

The argument of the `transform` function accepts an array of requests to create a multi page HAR object.

## Development

```sh
git clone https://github.com/@advanced-rest-client/arc-har
cd arc-har
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```

## License

<!-- API Components © 2021 by Pawel Psztyc is licensed under CC BY 4.0. -->

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">API Components</span> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/jarrodek">Pawel Psztyc</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
