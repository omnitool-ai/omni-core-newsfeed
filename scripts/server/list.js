/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

// import js-yaml
import yaml from 'js-yaml'
// import fs/promises
import fs from 'fs/promises'

const script = {
    name: 'list',
  
    exec: async function (ctx, payload) {
        console.error("a")
        const file = await fs.readFile('./extensions/omni-core-newsfeed/updates.yaml', 'utf8')
        let updates = yaml.load(file)
        console.log(updates)

        return {ok: true, data: updates}

    }
  };
  
  export default script;
  