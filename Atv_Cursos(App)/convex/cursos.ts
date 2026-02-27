import {mutation, query} from "./_generated/server";
import {v} from "convex/values"

export const getCursos = query({
    handler: async (ctx) => {
        const cursos = await ctx.db.query("cursos").order("desc").collect();
        return cursos;
    }
})
export const addCursos = mutation({
    args: {nome: v.string()},
    handler: async (ctx, args) => {
        const cursosId = await ctx.db.insert("cursos", {nome : args.nome, cursoCompleto: false})
        return cursosId
    }
})
export const deleteAllCursos = mutation({
    args: {nome: v.string()},
    handler: async (ctx, args) => {
        const todosCursos= await ctx.db.query("cursos").collect();
       
        // deletar todos os cursos
        for (const cursos of todosCursos) {
            await ctx.db.delete(cursos._id);
        }
        return {deletedCounts: todosCursos.length};
    }
})