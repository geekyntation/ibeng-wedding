'use server';

import postgres from 'postgres';

type TCommentRaw = {
    id: number,
    c_name: string,
    c_comment: string,
    c_is_coming: boolean,
    created_at: Date,
}

export type TComment = {
    comment_id: number,
    name: string,
    comment: string,
    isComing: boolean,
    createdAt: Date,
}

export type TCommentDto = Omit<TComment, 'comment_id' | 'createdAt'>

export const sql = postgres(process.env.DB_URL!, { ssl: false })

export async function getComments() {
    const data = await sql<TCommentRaw[]>`
    select * from comments
    `

    return data
}

export async function insertComment(newComment: TCommentDto) {
    const { name, comment, isComing } = newComment;
    
    const result = await sql<TCommentRaw[]>`
        INSERT INTO comments (c_name, c_comment, c_is_coming)
        VALUES (${name}, ${comment}, ${isComing})
        RETURNING *
    `;
    
    return {
        comment_id: result[0].id,
        name: result[0].c_name,
        comment: result[0].c_comment,
        isComing: result[0].c_is_coming,
        createdAt: result[0].created_at
    } as TComment;
}