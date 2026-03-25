import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

// coletar todos os "to dos"
export const getGames = query({
    handler : async(ctx) => {
        const games = await ctx.db.query("games").order("desc").collect();
        return games;
    },
})

// coletar adicionar um "to do"
export const addGame = mutation({
    args: { text: v.string() },
    
    handler : async(ctx, args) => {
        const gameId = await ctx.db.insert("games", {
            text : args.text,
            isCompleted: false
        });
        return gameId;
    },
})

// deletar todos os "games"
export const clearAllGames = mutation({
    handler : async(ctx) => {
        const games = await ctx.db.query("games").collect();

        for (const game of games){
            await ctx.db.delete(game._id);
        }

        return { deletedCount: games.length };
    },
})

// mudar status do game

export const toggleGame = mutation({
    args: {id: v.id("games")},
    handler : async (ctx, args) => {
        const game = await ctx.db.get(args.id);
        if (!game) throw new ConvexError ("Game não foi encontrado")

        await ctx.db.patch(args.id, {
            isCompleted: !game.isCompleted,
        });
        
    },
});

// atualizar o texto do game
export const updateGame = mutation ({
    args : { id: v.id("games"),
            text: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            text: args.text
        })
    }
})

// deletar 1 game

export const deleteGame = mutation ({
    args : { 
        id: v.id("games")},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    }
})