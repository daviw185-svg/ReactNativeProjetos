import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

// coletar todos os "posts"
export const getPosts = query({
    handler : async(ctx) => {
        const posts = await ctx.db.query("posts").order("desc").collect();
        return posts;
    },
})

// coletar adicionar um "post"
export const addPost = mutation({
    args: { text: v.string(), img: v.string() },
    
    handler : async(ctx, args) => {
        const postId = await ctx.db.insert("posts", {
            text : args.text,
            img: args.img,
        });
        return postId;
    },
})

// deletar todos os "posts"
export const clearAllPosts = mutation({
    handler : async(ctx) => {
        const posts = await ctx.db.query("posts").collect();

        for (const post of posts){
            await ctx.db.delete(post._id);
        }

        return { deletedCount: posts.length };
    },
})

