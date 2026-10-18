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

export interface McpTool {
  name: string;
  body: string;
}

export const mcpReadTools: McpTool[] = [
  {
    name: "list_canvases",
    body: "Every canvas you can open, with its id, name and description. The id is the canvasId every other tool takes.",
  },
  {
    name: "bash",
    body: "A sandboxed, read-only shell over one canvas. The nole command lists (nole ls), reads (nole read), searches (nole search) and dumps tables (nole table); grep, jq, awk and friends do the rest.",
  },
];

export const mcpWriteTools: McpTool[] = [
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
];

export interface ApiField {
  name: string;
  body: string;
}

export const nodeDataFields: ApiField[] = [
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
];

export interface ApiError {
  status: number;
  code: string;
  body: string;
}

export const apiErrors: ApiError[] = [
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
];
