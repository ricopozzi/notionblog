import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client';


export const notion = new Client({auth: process.env.NOTION_SECRET})

export const databaseId = process.env.NOTION_DATABASE_ID

export const notionX = new NotionAPI({
    authToken:
      "df56d364197ec30a27e76bbe4c402cdf4547f4a73fecef997fd3641a575e14fd2be8a3ec42a483d1f06c2ee95cab8fcae702117cd4545535d085d95906465b25f8eabb55e19d17d35a83276b92dd",
    activeUser: "5bfd920c-e1a8-44ae-b438-ba9de1d4b623",
  });