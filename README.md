# omni-core-newsfeed

An official extension providing changelog, project updates, new extensions and new recipes in form of a handy timeline based on Molly White's excellent static timeline generator.

## Installation

Install via the omnitool extension manager

## Development / Deployment

(internal)
- Edit `updates.yaml`
- Install dev dependencies:
```
cd src
git submodule update --init
cd static-timeline-generator
yarn install
yarn build
```