/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

// import js-yaml
import yaml from 'js-yaml'
// import fs/promises
import fs from 'fs/promises'

const script = {
    name: 'add',
  
    exec: async function (ctx, payload) {
        const item = payload.obj
        
        const file = await fs.readFile('./extensions/omni-core-newsfeed/updates.yaml', 'utf8')
        const updates = yaml.load(file)
        updates.push(item)
        await fs.writeFile('./extensions/omni-core-newsfeed/updates.yaml', yaml.dump(updates))
        return {ok: true, data: updates}
    }
  };
  
  export default script;
  