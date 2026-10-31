/*
 * Content of the /developers page.
 *
 * Checked against the product repo (antaymard/nolenor), not written from
 * memory: the HTTP routes and the token auth live in convex/http.ts, the
 * REST handler in convex/httpApi/nodeDatas.ts, and the MCP tool list is
 * whatever convex/mcp/registry.ts exposes — every Nolë tool whose config
 * carries `mcp: { access }`, plus `list_canvases` from convex/mcp/server.ts.
 * If a tool gains or loses its `mcp` flag there, it changes here.
 */

import type { Lang } from "@/i18n";

export interface McpTool {
  name: string;
  body: string;
}

export const mcpReadTools: Record<Lang, McpTool[]> = {
  en: [
    {
      name: "list_canvases",
      body: "Every canvas you can open, with its id, name and description. The id is the canvasId every other tool takes.",
    },
    {
      name: "bash",
      body: "A sandboxed, read-only shell over one canvas. The nole command lists (nole ls), reads (nole read), searches (nole search) and dumps tables (nole table); grep, jq, awk and friends do the rest.",
    },
  ],
  fr: [
    {
      name: "list_canvases",
      body: "Les canevas auxquels vous avez accès, avec leur id, leur nom et leur description. Cet id est le canvasId que demandent tous les autres outils.",
    },
    {
      name: "bash",
      body: "Un shell en lecture seule, isolé en sandbox, ouvert sur un seul canevas. La commande nole liste (nole ls), lit (nole read), cherche (nole search) et extrait les tableaux (nole table) ; grep, jq, awk et consorts font le reste.",
    },
  ],
};

export const mcpWriteTools: Record<Lang, McpTool[]> = {
  en: [
    { name: "create_node", body: "Add blocks: documents, tables, links, values, titles, apps…" },
    { name: "set_node_data", body: "Set a block's values (tables have their own tools)." },
    { name: "create_connection", body: "Link two blocks." },
    { name: "group_nodes", body: "Gather blocks in a frame." },
    { name: "move_and_style_nodes", body: "Move blocks, or change their colour or display variant." },
    { name: "delete_elements", body: "Send blocks and connections to the trash, where they stay 30 days." },
    { name: "insert_blocks", body: "Insert paragraphs, headings, lists… into a document." },
    { name: "replace_block", body: "Rewrite one block of a document." },
    { name: "patch_block_text", body: "Edit a passage of text in place." },
    { name: "update_block_props", body: "Change a document block's properties." },
    { name: "delete_blocks", body: "Remove blocks from a document." },
    { name: "table_update_schema", body: "Add, rename or remove a table's columns." },
    { name: "table_insert_rows", body: "Append rows to a table." },
    { name: "table_update_rows", body: "Edit rows of a table." },
    { name: "table_delete_rows", body: "Remove rows from a table." },
    { name: "patch_app_node_code", body: "Edit the code of an App block." },
  ],
  fr: [
    { name: "create_node", body: "Ajouter des nœuds : documents, tableaux, liens, valeurs, titres, apps…" },
    { name: "set_node_data", body: "Définir les valeurs d’un nœud (les tableaux ont leurs propres outils)." },
    { name: "create_connection", body: "Relier deux nœuds." },
    { name: "group_nodes", body: "Regrouper des nœuds dans un cadre." },
    { name: "move_and_style_nodes", body: "Déplacer des nœuds, changer leur couleur ou leur variante d’affichage." },
    { name: "delete_elements", body: "Mettre nœuds et connexions à la corbeille, où ils restent 30 jours." },
    { name: "insert_blocks", body: "Insérer paragraphes, titres, listes… dans un document." },
    { name: "replace_block", body: "Réécrire un bloc d’un document." },
    { name: "patch_block_text", body: "Modifier un passage de texte sur place." },
    { name: "update_block_props", body: "Changer les propriétés d’un bloc de document." },
    { name: "delete_blocks", body: "Retirer des blocs d’un document." },
    { name: "table_update_schema", body: "Ajouter, renommer ou supprimer les colonnes d’un tableau." },
    { name: "table_insert_rows", body: "Ajouter des lignes en fin de tableau." },
    { name: "table_update_rows", body: "Modifier des lignes d’un tableau." },
    { name: "table_delete_rows", body: "Supprimer des lignes d’un tableau." },
    { name: "patch_app_node_code", body: "Modifier le code d’un nœud App." },
  ],
};

export interface ApiField {
  name: string;
  body: string;
}

export const nodeDataFields: Record<Lang, ApiField[]> = {
  en: [
    { name: "nodeId", body: "The node id you asked for." },
    {
      name: "nodeDataId",
      body: "Id of the content behind the block. Several blocks can share one, when the same content is shown on several canvases.",
    },
    {
      name: "type",
      body: "link, image, blocknote, value, title, pdf, table, app, audio, video, frame or custom.",
    },
    {
      name: "templateId",
      body: "Custom blocks only: the template that defines the shape of values.",
    },
    { name: "values", body: "The block's content. Its fields depend on type." },
    { name: "updatedAt", body: "Last change, in milliseconds since the epoch." },
  ],
  fr: [
    { name: "nodeId", body: "L’id du nœud demandé." },
    {
      name: "nodeDataId",
      body: "Id du contenu affiché par le nœud. Plusieurs nœuds peuvent partager le même, quand un contenu apparaît sur plusieurs canevas.",
    },
    {
      name: "type",
      body: "link, image, blocknote, value, title, pdf, table, app, audio, video, frame ou custom.",
    },
    {
      name: "templateId",
      body: "Nœuds personnalisés uniquement : le modèle qui définit la forme de values.",
    },
    { name: "values", body: "Le contenu du nœud. Ses champs dépendent de type." },
    { name: "updatedAt", body: "Date de dernière modification, en timestamp Unix (millisecondes)." },
  ],
};

export interface ApiError {
  status: number;
  code: string;
  body: string;
}

export const apiErrors: Record<Lang, ApiError[]> = {
  en: [
    {
      status: 400,
      code: "bad_request",
      body: "canvasId missing, nodeIds missing or empty, more than 100 nodeIds, or a POST body that isn't a JSON object.",
    },
    {
      status: 401,
      code: "unauthorized",
      body: "No token, or an invalid or revoked one.",
    },
    {
      status: 404,
      code: "canvas_not_found",
      body: "The canvas doesn't exist, or your token can't open it. Both answer the same, so the API never reveals that a private canvas exists.",
    },
  ],
  fr: [
    {
      status: 400,
      code: "bad_request",
      body: "canvasId absent, nodeIds absent ou vide, plus de 100 nodeIds, ou corps de POST qui n’est pas un objet JSON.",
    },
    {
      status: 401,
      code: "unauthorized",
      body: "Token absent, invalide ou révoqué.",
    },
    {
      status: 404,
      code: "canvas_not_found",
      body: "Le canevas n’existe pas, ou votre token n’y a pas accès. Les deux cas reçoivent la même réponse : l’API ne révèle jamais l’existence d’un canevas privé.",
    },
  ],
};
