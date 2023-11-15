/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

// import js-yaml
import yaml from 'js-yaml'
// import fs/promises
import fs from 'fs/promises'

const script = {
    name: 'del',
  
    exec: async function (ctx, payload) {
        const id = payload.id
        
        const file = await fs.readFile('./extensions/omni-core-newsfeed/updates.yaml', 'utf8')
        let updates = yaml.load(file)
        updates = updates.filter((item) => item.id !== id)
        await fs.writeFile('./extensions/omni-core-newsfeed/updates.yaml', yaml.dump(updates))
        return {ok: true, data: updates}
    }
  };
  
  export default script;
  