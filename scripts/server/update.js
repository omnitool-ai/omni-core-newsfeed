/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

// import js-yaml
import yaml from 'js-yaml'
// import fs/promises
import fs from 'fs/promises'

const script = {
    name: 'update',
  
    exec: async function (ctx, payload) {
        const obj = payload.obj
        
        const file = await fs.readFile('./extensions/omni-core-newsfeed/updates.yaml', 'utf8')
        let updates = yaml.load(file)
        const item = updates.find((item) => item.id === obj.id)
        if (!item) {
            return {ok: false, error: 'item not found'}
        }
        Object.assign(item, payload.obj)
        await fs.writeFile('./extensions/omni-core-newsfeed/updates.yaml', yaml.dump(updates))
        return {ok: true, data: updates}
    }
  };
  
  export default script;
  