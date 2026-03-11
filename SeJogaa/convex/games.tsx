import { v } from "convex/values";
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