import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values"

export default defineSchema({
    cursos: defineTable({
        nome: v.string(),
        cursoCompleto: v.boolean(),
    }),
})

// npx convex dev