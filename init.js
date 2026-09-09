import { HelyxPFResources } from "./index.js";

Hooks.on("init", function()
{

    if(!game.helyx_externals)
    { game.helyx_externals = {}; }

    if(!game.helyx_externals.tokens)
    { game.helyx_externals.tokens = {}; }

    game.helyx_externals.tokens["helyx-pf-ai-resources"] = HelyxPFResources;    

});
